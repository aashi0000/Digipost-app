// BackButton.js
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = ({ onPress, title = "Back", style = {} }) => {
  return (
    <TouchableOpacity style={[styles.backButton, style]} onPress={onPress}>
      <Text style={styles.backButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backButton: {
    backgroundColor: "#9E0E0E", // Red background
    borderRadius: 40, // Rounded corners
    paddingVertical: 30, // Top and Bottom padding
    paddingHorizontal: 30, // Left and Right padding
    alignItems: "center", // Center the text
    justifyContent: "center",
    marginHorizontal: 10, // Horizontal margin
  },
  backButtonText: {
    color: "#FFFFFF", // White text color
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Button;
