import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report, confusion_matrix
import os

# Model and data variables
model = None
V_OUTPUT_DIR = "./vehicleoutputs"
os.makedirs(V_OUTPUT_DIR, exist_ok=True)

def train_model():
    """
    Train the RandomForestClassifier for vehicle maintenance prediction.
    Saves evaluation metrics to a file.
    """
    global model

    # Step 1: Generate Dummy Data
    def generate_dummy_data(num_samples=1000):
        np.random.seed(42)
        mileage = np.random.randint(0, 200000, num_samples)  # Mileage in kilometers
        engine_temp = np.random.randint(70, 120, num_samples)  # Engine temperature in Celsius
        oil_quality = np.random.randint(1, 10, num_samples)  # Oil quality rating (1-10)
        failure = [(1 if (m > 150000 or o < 4) else 0) for m, o in zip(mileage, oil_quality)]
        data = pd.DataFrame({
            'mileage': mileage,
            'engine_temp': engine_temp,
            'oil_quality': oil_quality,
            'failure': failure
        })
        return data

    # Generate the data
    vehicle_data = generate_dummy_data()

    # Step 2: Data Preprocessing
    X = vehicle_data.drop('failure', axis=1)  # Features
    y = vehicle_data['failure']  # Target variable

    # Split the data into training and testing sets
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    # Step 3: Model Training
    model = RandomForestClassifier(n_estimators=100, random_state=42)
    model.fit(X_train, y_train)

    # Step 4: Model Evaluation
    y_pred = model.predict(X_test)
    conf_matrix = confusion_matrix(y_test, y_pred)
    report = classification_report(y_test, y_pred, target_names=["No Maintenance Needed", "Maintenance Needed"])

    # Save metrics to a file
    metrics_path = os.path.join(V_OUTPUT_DIR, "vehicle_maintenance_metrics.txt")
    with open(metrics_path, "w") as f:
        f.write("=== Model Evaluation Results ===\n")
        f.write(f"\nConfusion Matrix:\n{conf_matrix}\n")
        f.write(f"\nClassification Report:\n{report}\n")
    
    return metrics_path

def predict_maintenance(vehicle_data):
    """
    Predict whether maintenance is needed for a given vehicle's data.
    """
    if model is None:
        raise ValueError("Model is not trained yet.")
    prediction = model.predict([vehicle_data])
    return "Maintenance Needed" if prediction[0] == 1 else "No Maintenance Needed"
