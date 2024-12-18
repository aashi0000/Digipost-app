import * as React from "react";
import { View, StyleSheet } from "react-native";
import FormHeader from "../../pagecomponents/registration/FormHeader";
import FormField from "../../pagecomponents/registration/FormField";
import NavigationButtons from "../../pagecomponents/registration/NavigationButtons";

const formFields = [
  { label: "Name", placeholder: "Full Name" },
  { label: "Phone Number", placeholder: "Registered Number" },
  { label: "Email", placeholder: "abc@gmail.com" },
];

export function RegistrationForm() {
  return (
    <View style={styles.container}>
      <View style={styles.formWrapper}>
        <FormHeader />
        <View style={styles.formContainer}>
          {formFields.map((field, index) => (
            <FormField
              key={index}
              label={field.label}
              placeholder={field.placeholder}
            />
          ))}
        </View>
        <NavigationButtons />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: 480,
    width: "100%",
    padding: 25,
    paddingTop: 245,
    paddingBottom: 245,
    flexDirection: "column",
    overflow: "hidden",
    alignItems: "stretch",
    fontFamily: "Roboto, sans-serif",
    fontWeight: "500",
    justifyContent: "center",
  },
  formWrapper: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "stretch",
  },
  formContainer: {
    borderRadius: 20,
    display: "flex",
    marginTop: 20,
    maxWidth: "100%",
    width: 340,
    padding: 20,
    paddingTop: 30,
    paddingBottom: 30,
    flexDirection: "column",
    overflow: "hidden",
    alignItems: "center",
  },
});


