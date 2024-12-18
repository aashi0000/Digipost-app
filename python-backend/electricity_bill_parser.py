# #electricity
# import pytesseract
# #pytesseract.pytesseract.tesseract_cmd = "/opt/homebrew/bin/tesseract"
#

# from PIL import Image, ImageEnhance, ImageFilter
# import re
# from fuzzywuzzy import fuzz, process

# # Step 1: Preprocess and Extract Text
# def preprocess_and_extract_text(image_path):
#     try:
#         img = Image.open(image_path)
#         img = img.convert("L")
#         #img = ImageEnhance.Contrast(img).enhance(2.0)
#         #img = img.filter(ImageFilter.SHARPEN)
#         img.save("preprocessed_image.png")
#         extracted_text = pytesseract.image_to_string(img, config="--psm 6")
#         return extracted_text
#     except Exception as e:
#         print(f"Error in processing the image: {e}")
#         return ""

# # Step 2: Clean Extracted Text
# def clean_text(text):
#     corrections = {
#         "Tonsumer No": "Consumer No",
#         "Bil Date": "Bill Date",
#         "Biling Address": "Billing Address",
#     }
#     for incorrect, correct in corrections.items():
#         text = text.replace(incorrect, correct)
#     return text

# # Step 3: Fuzzy Match Utility
# def fuzzy_find(target, text):
#     lines = text.splitlines()
#     match, score = process.extractOne(target, lines, scorer=fuzz.partial_ratio)
#     return match if score > 80 else None

# # Step 4: Parse Relevant Details Using Regex
# def parse_electricity_bill_details(text):
#     try:
#         details = {}

#         # Extract Bill Amount
#         bill_amount_match = re.search(r"Bill Amount\s*[:\s]*([\d,]+\.\d{2})", text)
#         details['Bill Amount'] = bill_amount_match.group(1) if bill_amount_match else "Not Found"

#         # Extract Pay By Date
#         pay_by_date_match = re.search(r"Pay By Date\s*[:\s]*([\d/]+)", text)
#         details['Pay By Date'] = pay_by_date_match.group(1) if pay_by_date_match else "Not Found"

#         # Extract Consumer Number using fuzzy match
#         # consumer_no_line = fuzzy_find("Consumer No", text)
#         # if consumer_no_line:
#         #     consumer_no_match = re.search(r"Consumer No\s*[:\-]?\s*([\w\d]+)", consumer_no_line)
#         #     details['Consumer Number'] = consumer_no_match.group(1) if consumer_no_match else "Not Found"
#         # else:
#         #     details['Consumer Number'] = "Not Found"

#         # consumer_no_match = re.search(r"(Tonsumer|Consumer)\s*No\s*[:\-']?\s", text, re.IGNORECASE)
#         # details['Consumer Number'] = consumer_no_match.group(1) if consumer_no_match else "Not Found"
#         consumer_no_match = re.search(r"(Tonsumer|Consumer)\s*No\s*[:\-']?\s*(\d+)", text, re.IGNORECASE)
#         details['Consumer Number'] = consumer_no_match.group(2) if consumer_no_match else "Not Found"


#         # Extract Billing Address
#         # address_match = re.search(r"Billing\s*Address\s*[:\-]?\s*(.*?)(\d{6})", text, re.DOTALL)
#         # if address_match:
#         #     details['Billing Address'] = f"{address_match.group(1).strip()} {address_match.group(2)}"
#         # else:
#         #     details['Billing Address'] = "Not Found"
#         match = re.search(r"Billing\s*Address\s*[:\-]?\s*(.*?)(?=\s*Mobile/Tel No)", text, re.DOTALL)
#         if match:
#             details['billing_address'] = match.group(1).strip()
#         else:
#             details['billing_address'] ="Not Found"

#         # Extract Meter Reading
#         # meter_reading_line = fuzzy_find("MDI Reading", text)
#         # if meter_reading_line:
#         #     meter_reading_match = re.search(r"[\d\.]+", meter_reading_line)
#         #     details['Meter Reading'] = meter_reading_match.group(0) if meter_reading_match else "Not Found"
#         # else:
#         #     details['Meter Reading'] = "Not Found"
#         meter_reading_match = re.search(r"MDI\s*Reading\s*[:\-]?\s*([\d\.]+)", text, re.IGNORECASE)
#         details['Meter Reading'] = meter_reading_match.group(1) if meter_reading_match else "Not Found"

#         return details
#     except Exception as e:
#         print(f"Error in parsing text: {e}")
#         return {}

# # Step 5: Main Function
# def main():
#     image_path = "data/electricity_bill.png"
#     extracted_text = preprocess_and_extract_text(image_path)
#     if not extracted_text:
#         print("Failed to extract text from the image.")
#         return

#     cleaned_text = clean_text(extracted_text)
#     # print("Cleaned Extracted Text:")
#     # print(cleaned_text)

#     bill_details = parse_electricity_bill_details(cleaned_text)

#     print("\nExtracted Electricity Bill Details:")
#     for key, value in bill_details.items():
#         print(f"{key}: {value}")

# # Execute the script
# if __name__ == "__main__":
#     main()

#electricity
import pytesseract
pytesseract.pytesseract.tesseract_cmd = "/opt/homebrew/bin/tesseract"
from PIL import Image, ImageEnhance, ImageFilter
import re
import json
#from fuzzywuzzy import fuzz, process
import firebase_admin
from firebase_admin import credentials, db  # Use Firestore for structured data storage

if not firebase_admin._apps:
    cred = credentials.Certificate("serviceAccountKey.json")  # Replace with your path to serviceAccountKey.json
    firebase_admin.initialize_app(cred, {
        "databaseURL": "https://indiapost-33d9d-default-rtdb.firebaseio.com"  # Replace with your database URL
    })

# Step 1: Preprocess and Extract Text
def preprocess_and_extract_text(image_path):
    try:
        img = Image.open(image_path)
        img = img.convert("L")
        #img = ImageEnhance.Contrast(img).enhance(2.0)
        #img = img.filter(ImageFilter.SHARPEN)
        img.save("preprocessed_image.png")
        extracted_text = pytesseract.image_to_string(img, config="--psm 6")
        return extracted_text
    except Exception as e:
        print(f"Error in processing the image: {e}")
        return ""

# Step 2: Clean Extracted Text
def clean_text(text):
    corrections = {
        "Tonsumer No": "Consumer No",
        "Bil Date": "Bill Date",
        "Biling Address": "Billing Address",
    }
    for incorrect, correct in corrections.items():
        text = text.replace(incorrect, correct)
    return text

# Step 3: Fuzzy Match Utility
def fuzzy_find(target, text):
    lines = text.splitlines()
    match, score = process.extractOne(target, lines, scorer=fuzz.partial_ratio)
    return match if score > 80 else None

# Step 4: Parse Relevant Details Using Regex
def parse_electricity_bill_details(text):
    try:
        details = {}

        # Extract Bill Amount
        bill_amount_match = re.search(r"Bill Amount\s*[:\s]*([\d,]+\.\d{2})", text)
        details['Bill Amount'] = bill_amount_match.group(1) if bill_amount_match else "Not Found"

        # Extract Pay By Date
        pay_by_date_match = re.search(r"Pay By Date\s*[:\s]*([\d/]+)", text)
        details['Pay By Date'] = pay_by_date_match.group(1) if pay_by_date_match else "Not Found"

        # Extract Consumer Number using fuzzy match
        # consumer_no_line = fuzzy_find("Consumer No", text)
        # if consumer_no_line:
        #     consumer_no_match = re.search(r"Consumer No\s*[:\-]?\s*([\w\d]+)", consumer_no_line)
        #     details['Consumer Number'] = consumer_no_match.group(1) if consumer_no_match else "Not Found"
        # else:
        #     details['Consumer Number'] = "Not Found"

        # consumer_no_match = re.search(r"(Tonsumer|Consumer)\s*No\s*[:\-']?\s", text, re.IGNORECASE)
        # details['Consumer Number'] = consumer_no_match.group(1) if consumer_no_match else "Not Found"
        consumer_no_match = re.search(r"(Tonsumer|Consumer)\s*No\s*[:\-']?\s*(\d+)", text, re.IGNORECASE)
        details['Consumer Number'] = consumer_no_match.group(2) if consumer_no_match else "Not Found"


        # Extract Billing Address
        # address_match = re.search(r"Billing\s*Address\s*[:\-]?\s*(.*?)(\d{6})", text, re.DOTALL)
        # if address_match:
        #     details['Billing Address'] = f"{address_match.group(1).strip()} {address_match.group(2)}"
        # else:
        #     details['Billing Address'] = "Not Found"
        match = re.search(r"Billing\s*Address\s*[:\-]?\s*(.*?)(?=\s*Mobile/Tel No)", text, re.DOTALL)
        if match:
            details['billing_address'] = match.group(1).strip()
        else:
            details['billing_address'] ="Not Found"

        # Extract Meter Reading
        # meter_reading_line = fuzzy_find("MDI Reading", text)
        # if meter_reading_line:
        #     meter_reading_match = re.search(r"[\d\.]+", meter_reading_line)
        #     details['Meter Reading'] = meter_reading_match.group(0) if meter_reading_match else "Not Found"
        # else:
        #     details['Meter Reading'] = "Not Found"
        meter_reading_match = re.search(r"MDI\s*Reading\s*[:\-]?\s*([\d\.]+)", text, re.IGNORECASE)
        details['Meter Reading'] = meter_reading_match.group(1) if meter_reading_match else "Not Found"

        #DATABASE MEI DALO WALA
        # Send data to Firebase
        send_to_firebase(details)

        return details
    except Exception as e:
        print(f"Error in parsing text: {e}")
        return {}

#func to send to db
def send_to_firebase(details):
    try:
        ref = db.reference("/electricity_details")
        #details to json format
        #details_json = json.dumps(details)
        ref.push(details)
        #doc_ref = db.collection("electricity_details").document()  # Create a new document in the collection
        #doc_ref.set(details)  # Store details as the document data
        print("Electricity bill details successfully saved to Firebase.")
    except Exception as e:
        print(f"Error saving to Firebase: {e}")


# Step 5: Main Function
def main():
    image_path = "data/electricity_bill.png"
    extracted_text = preprocess_and_extract_text(image_path)
    if not extracted_text:
        print("Failed to extract text from the image.")
        return

    cleaned_text = clean_text(extracted_text)
    # print("Cleaned Extracted Text:")
    # print(cleaned_text)

    bill_details = parse_electricity_bill_details(cleaned_text)

    print("\nExtracted Electricity Bill Details:")
    for key, value in bill_details.items():
        print(f"{key}: {value}")

# Execute the script
if __name__ == "__main__":
    main()