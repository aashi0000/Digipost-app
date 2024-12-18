import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.preprocessing import StandardScaler
from sklearn.cluster import KMeans
from sklearn.decomposition import PCA
import os

# Ensure output directories exist
OUTPUT_DIR = "./outputs"
os.makedirs(OUTPUT_DIR, exist_ok=True)

def run_analysis():
    # Step 1: Generate sample data
    np.random.seed(42)  # For reproducible results
    post_offices = [f"PostOffice_{i+1}" for i in range(10)]
    years = [f"Year_{2014 + i}" for i in range(10)]

    # Randomly generate sales data (in thousands)
    sales_data = np.random.randint(100, 1000, size=(10, 10))

    # Create a DataFrame
    df = pd.DataFrame(sales_data, index=post_offices, columns=years)

    # Step 2: Feature Engineering
    # Calculate additional features: average sales and growth rate
    df['Average_Sales'] = df.mean(axis=1)
    df['Growth_Rate'] = ((df[years[-1]] - df[years[0]]) / df[years[0]]) * 100

    # Prepare the dataset for clustering
    features = df[['Average_Sales', 'Growth_Rate']]
    scaler = StandardScaler()
    scaled_features = scaler.fit_transform(features)

    # Step 3: Apply K-Means Clustering
    # Define the number of clusters
    kmeans = KMeans(n_clusters=3, random_state=42)
    clusters = kmeans.fit_predict(scaled_features)

    # Add cluster labels to the DataFrame
    df['Cluster'] = clusters

    # Map cluster numbers to performance categories
    cluster_mapping = {
        np.argmax(kmeans.cluster_centers_[:, 0]): 'Top Performer',
        np.argmin(kmeans.cluster_centers_[:, 0]): 'Needs Improvement'
    }
    for i in range(3):
        if i not in cluster_mapping:
            cluster_mapping[i] = 'Average'

    df['Performance'] = df['Cluster'].map(cluster_mapping)

    # Step 4: Visualize Clustering Results
    # Use PCA for 2D visualization of clusters
    pca = PCA(n_components=2)
    pca_features = pca.fit_transform(scaled_features)

    plot_path = os.path.join(OUTPUT_DIR, "post_office_clusters.png")
    plt.figure(figsize=(10, 6))
    for i, label in enumerate(cluster_mapping.values()):
        plt.scatter(
            pca_features[clusters == i, 0],
            pca_features[clusters == i, 1],
            label=label
        )

    plt.title("Post Office Clustering Results")
    plt.xlabel("PCA Component 1")
    plt.ylabel("PCA Component 2")
    plt.legend()
    plt.tight_layout()
    plt.savefig(plot_path)
    plt.close()

    # Step 5: Save Results to CSV
    csv_path = os.path.join(OUTPUT_DIR, "post_office_ml_analysis.csv")
    df.to_csv(csv_path)

    return csv_path, plot_path
