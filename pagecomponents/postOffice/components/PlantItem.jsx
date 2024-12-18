import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

function PlantItem({ name }) {
  return (
    <View style={styles.plantItem}>
      <Text>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  plantItem: {
    marginTop: 10,
    fontFamily: "Roboto, sans-serif",
    fontSize: 13,
    color: "#353535",
    fontWeight: "500",
  },
});

export default PlantItem;
