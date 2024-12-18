import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

function FormHeader() {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Register As Citizen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
  },
  headerText: {
    color: "#9E0E0E",
    textAlign: "center",
    fontSize: 33,
    fontWeight: "700",
  },
});

export default FormHeader;
