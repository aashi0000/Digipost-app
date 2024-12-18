import React from "react";
import { View, Text, TouchableOpacity, Alert, StyleSheet } from "react-native";
import * as Linking from "expo-linking";

export default function Call() {
  const makeCall = (phoneNumber) => {
    const url = tel:${phoneNumber};
    Linking.canOpenURL(url)
      .then((supported) => {
        if (!supported) {
          Alert.alert("Error", "Your device does not support calling.");
        } else {
          return Linking.openURL(url);
        }
      })
      .catch((err) => console.error("Error opening dialer", err));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Call Us</Text>
      <TouchableOpacity
        style={styles.callButton}
        onPress={() => makeCall("+12184135207")}
      >
        <Text style={styles.callButtonText}>Call +1 2184135207</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  callButton: {
    padding: 15,
    backgroundColor: "#007AFF",
    borderRadius: 5,
  },
  callButtonText: {
    color: "#fff",
    fontSize: 18,
  },
});