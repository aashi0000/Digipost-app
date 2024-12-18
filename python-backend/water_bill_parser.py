# #water
# import pytesseract
# from PIL import Image, ImageEnhance, ImageFilter
# import re

# # Set up Tesseract path (update if necessary)
# #pytesseract.pytesseract.tesseract_cmd = "/opt/homebrew/bin/tesseract"
# pytesseract.pytesseract.tesseract_cmd = r"C:\\Program Files\\Tesseract-OCR\\tesseract.exe"


# # Step 1: Preprocess and Extract Text
# def preprocess_and_extract_text(image_path):
#     try:
#         # Open the image
#         img = Image.open(image_path)

#         # Preprocess the image
#         img = img.convert("L")  # Convert to grayscale
#         #img = ImageEnhance.Contrast(img).enhance(2.0)  # Increase contrast
#         #img = img.filter(ImageFilter.SHARPEN)  # Sharpen the image

#         # Save preprocessed image for debugging
#         img.save("preprocessed_water_bill.png")

#         # OCR extraction
#         extracted_text = pytesseract.image_to_string(img, config="--psm 6")  # PSM 6 for semi-structured text

#         return extracted_text
#     except Exception as e:
#         print(f"Error during preprocessing: {e}")
#         return ""

# # Step 2: Parse Water Bill Details
# def parse_water_bill_details(text):
#     details = {}

#     # Extract Bill Number
#     bill_number_match = re.search(r"Bill\s*Number\s*[:\-]?\s*(\d+)", text, re.IGNORECASE)
#     details['Bill Number'] = bill_number_match.group(1) if bill_number_match else "Not Found"

#     # Extract Consumer Number
#     consumer_number_match = re.search(r"Consumer Number\s*[:\-]?\s*(\d+)", text, re.IGNORECASE)
#     details['Consumer Number'] = consumer_number_match.group(1) if consumer_number_match else "Not Found"

#     # Extract Meter Number
#     meter_number_match = re.search(r"Meter No\s*[:\-]?\s*(\w+)", text, re.IGNORECASE)
#     details['Meter Number'] = meter_number_match.group(1) if meter_number_match else "Not Found"

#     # Extract Status
#     status_match = re.search(r"Status\s*[:\-]?\s*(.+)", text, re.IGNORECASE)
#     details['Status'] = status_match.group(1).strip() if status_match else "Not Found"

#     # Extract Bimonthly Water Charge
#     water_charge_match = re.search(r"Total Additional Amount\s*(\d+)", text, re.IGNORECASE)
#     details['Total Additional Amount'] = water_charge_match.group(1) if water_charge_match else "Not Found"

#     # Extract Total Amount
#     total_amount_match = re.search(r"Total Amount\s*[:\-]?\s*(\d+\/-)", text, re.IGNORECASE)
#     details['Total Amount'] = total_amount_match.group(1) if total_amount_match else "Not Found"

   
#     return details

# # # Step 3: Main Function
# # def main():
# #     image_path = "data/water_bill_2.png"  # Path to the bill image

# #     # Preprocess and extract text
# #     extracted_text = preprocess_and_extract_text(image_path)
# #     if not extracted_text:
# #         print("Failed to extract text from the image.")
# #         return

# #     # Print extracted text for debugging
# #     # print("Extracted Text:")
# #     # print(extracted_text)

# #     # Parse bill details
# #     bill_details = parse_water_bill_details(extracted_text)

# #     # Display parsed details
# #     print("\nExtracted Water Bill Details:")
# #     for key, value in bill_details.items():
# #         print(f"{key}: {value}")

# # # Run the script
# # if __name__ == "__main__":
# #     main()

#water
import pytesseract
from PIL import Image, ImageEnhance, ImageFilter
import re
import firebase_admin
from firebase_admin import credentials, db  # Use Firestore for structured data storage

# Set up Tesseract path (update if necessary)
pytesseract.pytesseract.tesseract_cmd = "/opt/homebrew/bin/tesseract"


if not firebase_admin._apps:
    cred = credentials.Certificate("serviceAccountKey.json")  # Replace with your path to serviceAccountKey.json
    firebase_admin.initialize_app(cred, {
        "databaseURL": "https://indiapost-33d9d-default-rtdb.firebaseio.com"  # Replace with your database URL
    })

# Step 1: Preprocess and Extract Text
def preprocess_and_extract_text(image_path):
    try:
        # Open the image
        img = Image.open(image_path)

        # Preprocess the image
        img = img.convert("L")  # Convert to grayscale
        #img = ImageEnhance.Contrast(img).enhance(2.0)  # Increase contrast
        #img = img.filter(ImageFilter.SHARPEN)  # Sharpen the image

        # Save preprocessed image for debugging
        img.save("preprocessed_water_bill.png")

        # OCR extraction
        extracted_text = pytesseract.image_to_string(img, config="--psm 6")  # PSM 6 for semi-structured text

        return extracted_text
    except Exception as e:
        print(f"Error during preprocessing: {e}")
        return ""

# Step 2: Parse Water Bill Details
def parse_water_bill_details(text):
    details = {}

    # Extract Bill Number
    bill_number_match = re.search(r"Bill\s*Number\s*[:\-]?\s*(\d+)", text, re.IGNORECASE)
    details['Bill Number'] = bill_number_match.group(1) if bill_number_match else "Not Found"

    # Extract Consumer Number
    consumer_number_match = re.search(r"Consumer Number\s*[:\-]?\s*(\d+)", text, re.IGNORECASE)
    details['Consumer Number'] = consumer_number_match.group(1) if consumer_number_match else "Not Found"

    # Extract Meter Number
    meter_number_match = re.search(r"Meter No\s*[:\-]?\s*(\w+)", text, re.IGNORECASE)
    details['Meter Number'] = meter_number_match.group(1) if meter_number_match else "Not Found"

    # Extract Status
    status_match = re.search(r"Status\s*[:\-]?\s*(.+)", text, re.IGNORECASE)
    details['Status'] = status_match.group(1).strip() if status_match else "Not Found"

    # Extract Bimonthly Water Charge
    water_charge_match = re.search(r"Total Additional Amount\s*(\d+)", text, re.IGNORECASE)
    details['Total Additional Amount'] = water_charge_match.group(1) if water_charge_match else "Not Found"

    # Extract Total Amount
    total_amount_match = re.search(r"Total Amount\s*[:\-]?\s*(\d+\/-)", text, re.IGNORECASE)
    details['Total Amount'] = total_amount_match.group(1) if total_amount_match else "Not Found"

    send_to_firebase(details)
    return details

def send_to_firebase(details):
    try:
        ref = db.reference("/water_details")
        ref.push(details)
        print("Water bill details successfully saved to Firebase.")
    except Exception as e:
        print(f"Error saving to Firebase: {e}")


# Step 3: Main Function
def main():
    image_path = "data/water_bill_2.png"  # Path to the bill image

    # Preprocess and extract text
    extracted_text = preprocess_and_extract_text(image_path)
    if not extracted_text:
        print("Failed to extract text from the image.")
        return

    # Print extracted text for debugging
    # print("Extracted Text:")
    # print(extracted_text)

    # Parse bill details
    bill_details = parse_water_bill_details(extracted_text)

    # Display parsed details
    print("\nExtracted Water Bill Details:")
    for key, value in bill_details.items():
        print(f"{key}: {value}")

# Run the script
if __name__ == "__main__":
    main()