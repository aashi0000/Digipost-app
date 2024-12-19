
//--------------------------------------------------------------------------------------
//CODE IF POST OFFICE AI ANALYSIS ['Average_Sales', 'Growth_Rate', 'Performance'] TO BE DONE
//--------------------------------------------------------------------------------------




import React, { useState, useEffect } from "react";
import { View, Text, Image, ActivityIndicator, StyleSheet, Button } from "react-native";
import axios from "axios";

export default function AnalysisResults() {
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState(null);

  const fetchAnalysisResults = async () => {
    try {
      const response = await axios.get("http://localhost:5000/run-ai-analysis");
      setResults(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching analysis results:", error);
    }
  };

  useEffect(() => {
    fetchAnalysisResults();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading AI Analysis...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>AI Analysis Results</Text>
      <Image
        source={{ uri: `http://localhost:5000/get-output/${results.plot.split("/").pop()}` }}
        style={styles.image}
      />
      <Button
        title="Download CSV"
        onPress={() => {
          // Open CSV in a browser or download it
          window.open(`http://localhost:5000/get-output/${results.csv.split("/").pop()}`);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
    marginBottom: 20,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});





