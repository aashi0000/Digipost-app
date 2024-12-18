import * as React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

function NavigationButtons() {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={styles.button}
        accessibilityRole="button"
        accessibilityLabel="Go back"
      >
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        accessibilityRole="button"
        accessibilityLabel="Go to next step"
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    display: "flex",
    marginTop: 20,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  button: {
    flex: 1,
    borderRadius: 100,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  buttonText: {
    color: "#666",
    fontSize: 16,
    textAlign: "center",
  },
});

export default NavigationButtons;
