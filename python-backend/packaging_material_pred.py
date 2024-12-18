import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import LabelEncoder

# Variables to store the trained model and encoders
model = None
label_encoder_item = None
label_encoder_packaging = None

def create_data():
    """
    Create a dataset for packaging material prediction.
    """
    data = {
        'item_type': ['electronics', 'electronics', 'clothing', 'clothing', 'food', 'food'],
        'packaging_option': ['cardboard', 'bubble wrap', 'recycled paper', 'biodegradable peanuts', 'compostable containers', 'plastic wrap'],
        'sustainability_score': [8, 3, 7, 9, 10, 2]
    }
    return pd.DataFrame(data)

def prepare_data(df):
    """
    Encode categorical variables and split data for training.
    """
    global label_encoder_item, label_encoder_packaging
    label_encoder_item = LabelEncoder()
    label_encoder_packaging = LabelEncoder()
    
    df['item_type_encoded'] = label_encoder_item.fit_transform(df['item_type'])
    df['packaging_option_encoded'] = label_encoder_packaging.fit_transform(df['packaging_option'])
    
    X = df[['item_type_encoded', 'sustainability_score']]
    y = df['packaging_option_encoded']
    return X, y

def train_model():
    """
    Train a RandomForestClassifier on the dataset.
    """
    global model
    df = create_data()
    X, y = prepare_data(df)
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    model = RandomForestClassifier(random_state=42)
    model.fit(X_train, y_train)
    return {"status": "Model trained successfully."}

def predict_packaging(item_type, sustainability_score):
    """
    Predict the packaging option for a given item type and sustainability score.
    """
    if model is None or label_encoder_item is None or label_encoder_packaging is None:
        raise ValueError("Model is not trained. Call train_model() first.")

    if item_type not in label_encoder_item.classes_:
        raise ValueError(f"Item type '{item_type}' is not recognized.")
    
    item_type_encoded = label_encoder_item.transform([item_type])[0]
    prediction = model.predict([[item_type_encoded, sustainability_score]])
    return label_encoder_packaging.inverse_transform(prediction)[0]
