from flask import Flask, request, jsonify, send_file
from flask_cors import CORS  # Import CORS
import os
from electricity_bill_parser import preprocess_and_extract_text as preprocess_electricity, parse_electricity_bill_details
from water_bill_parser import preprocess_and_extract_text as preprocess_water, parse_water_bill_details
from dop_prophet import generate_and_save_forecast
from dop_ai_analysis import run_analysis
from vehicle_maintenance_pred import train_model, predict_maintenance
from packaging_material_pred import train_model, predict_packaging
import base64

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Configure upload folder
UPLOAD_FOLDER = "./uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
PLOTS_DIR = "./plots"
os.makedirs(PLOTS_DIR, exist_ok=True)
OUTPUT_DIR = "./outputs"
os.makedirs(OUTPUT_DIR, exist_ok=True)
V_OUTPUT_DIR = "./vehicleoutputs"
os.makedirs(V_OUTPUT_DIR, exist_ok=True)

def save_base64_file(base64_str, filename):
    file_path = os.path.join(UPLOAD_FOLDER, filename)
    with open(file_path, "wb") as file:
        file.write(base64.b64decode(base64_str))
    return file_path

# Parse electricity bill
@app.route("/parse-electricity-bill", methods=["POST"])
def parse_electricity_bill():
    try:
        data = request.get_json()
        if not data or "file" not in data:
            return jsonify({"error": "No file uploaded"}), 400
        file_path = save_base64_file(data["file"], data.get("filename", "electricity_bill.png"))
        text = preprocess_electricity(file_path)
        details = parse_electricity_bill_details(text)
        return jsonify(details)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Parse water bill
@app.route("/parse-water-bill", methods=["POST"])
def parse_water_bill():
    try:
        data = request.get_json()
        if not data or "file" not in data:
            return jsonify({"error": "No file uploaded"}), 400
        file_path = save_base64_file(data["file"], data.get("filename", "water_bill.png"))
        text = preprocess_water(file_path)
        details = parse_water_bill_details(text)
        return jsonify(details)
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    
#for forecast plots
@app.route("/generate-forecast-plots", methods=["GET"])
def generate_forecast_plots():
    try:
        print("Starting plot generation...")  # Debugging log
        forecast_plot_path, components_plot_path = generate_and_save_forecast()
        print("Plots generated successfully.")  # Debugging log
        print(f"Forecast Plot: {forecast_plot_path}, Components Plot: {components_plot_path}")
        
        return jsonify({
            "forecast_plot": forecast_plot_path,
            "components_plot": components_plot_path
        })
    except Exception as e:
        print(f"Error in generate_forecast_plots: {e}")  # Debugging log
        return jsonify({"error": str(e)}), 500

    
@app.route("/get-plot/<filename>", methods=["GET"])
def get_plot(filename):
    try:
        file_path = os.path.join(PLOTS_DIR, filename)
        if os.path.exists(file_path):
            return send_file(file_path, mimetype="image/png")
        else:
            return jsonify({"error": "File not found"}), 404
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    
#for dop ai analysis
@app.route("/run-ai-analysis", methods=["GET"])
def run_ai_analysis():
    try:
        # Run the analysis and get file paths
        csv_path, plot_path = run_analysis()

        # Return the paths for the CSV and plot
        return jsonify({
            "csv": csv_path,
            "plot": plot_path
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/get-output/<filename>", methods=["GET"])
def get_output(filename):
    try:
        file_path = os.path.join(OUTPUT_DIR, filename)
        if os.path.exists(file_path):
            mimetype = "image/png" if filename.endswith(".png") else "text/csv"
            return send_file(file_path, mimetype=mimetype)
        else:
            return jsonify({"error": "File not found"}), 404
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    
#for ai vehicle maintenance 
@app.route("/train-vehicle-maintenance", methods=["GET"])
def train_vehicle_maintenance():
    try:
        metrics_path = train_model()
        return jsonify({"metrics": metrics_path})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/predict-vehicle-maintenance", methods=["POST"])
def predict_vehicle_maintenance():
    try:
        data = request.get_json()
        if not data or "vehicle_data" not in data:
            return jsonify({"error": "No vehicle data provided"}), 400
        
        vehicle_data = data["vehicle_data"]
        prediction = predict_maintenance(vehicle_data)
        return jsonify({"vehicle_data": vehicle_data, "prediction": prediction})
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    
@app.route("/train-packaging-model", methods=["GET"])
def train_packaging_model():
    try:
        result = train_model()
        return jsonify(result)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/predict-packaging", methods=["POST"])
def predict_packaging_endpoint():
    try:
        data = request.get_json()
        if not data or "item_type" not in data or "sustainability_score" not in data:
            return jsonify({"error": "Invalid input. 'item_type' and 'sustainability_score' are required."}), 400
        
        item_type = data["item_type"]
        sustainability_score = data["sustainability_score"]
        prediction = predict_packaging(item_type, sustainability_score)
        return jsonify({"item_type": item_type, "sustainability_score": sustainability_score, "predicted_packaging": prediction})
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True, port=5000)
