import * as React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

function FormField({ label, placeholder }) {
  const inputId = `${label.toLowerCase().replace(/\s+/g, "-")}-input`;

  return (
    <View style={styles.fieldContainer}>
      <View style={styles.fieldWrapper}>
        <Text style={styles.label} nativeID={`${inputId}-label`}>
          {label}
        </Text>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          accessibilityLabel={label}
          accessibilityLabelledBy={`${inputId}-label`}
          id={inputId}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fieldContainer: {
    display: "flex",
    marginTop: 10,
    width: "100%",
    flexDirection: "column",
    alignItems: "stretch",
  },
  fieldWrapper: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "stretch",
  },
  label: {
    color: "#787878",
    fontSize: 11,
  },
  input: {
    borderRadius: 4,
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    marginTop: 4,
    width: "100%",
    padding: 10,
    fontSize: 13,
    color: "#666",
  },
});

export default FormField;
