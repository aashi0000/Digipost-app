//--------------------------------------------------------------------------------------
//CODE IF GRAPHS FOR PREDICTIVE ANALYTICS TO BE DISPLAYED
//--------------------------------------------------------------------------------------


import React, { useState, useEffect } from "react";
import { View, Image, ActivityIndicator, StyleSheet, Text } from "react-native";
import axios from "axios";

export default function Graphs() {
  const [loading, setLoading] = useState(true);
  const [plots, setPlots] = useState({});

  useEffect(() => {
    const fetchPlots = async () => {
      try {
        const response = await axios.get("http://localhost:5000/generate-forecast-plots");
        setPlots(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching plots:", error);
      }
    };

    fetchPlots();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading Forecast...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forecast Plot</Text>
      <Image source={{ uri: `http://localhost:5000/get-plot/${plots.forecast_plot.split("/").pop()}` }} style={styles.image} />
      <Text style={styles.title}>Components Plot</Text>
      <Image source={{ uri: `http://localhost:5000/get-plot/${plots.components_plot.split("/").pop()}` }} style={styles.image} />
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
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
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