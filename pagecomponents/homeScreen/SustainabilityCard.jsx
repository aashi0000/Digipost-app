import * as React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export function SustainabilityCard() {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardText}>Sustainability Goals Achieved</Text>
      <View style={styles.iconContainer}>
        <Image
          resizeMode="contain"
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/01a012a304fb588aedfc60d1f91d3e82b4b58e2b0d992970f2b522826d1cc897?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
          }}
          style={styles.icon}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 10,
    display: "flex",
    marginTop: 10,
    minHeight: 62,
    width: 348,
    maxWidth: "100%",
    padding: 20,
    paddingVertical: 12,
    alignItems: "center",
    gap: "40px 100px",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  cardText: {
    color: "#EEE",
    fontFamily: "Roboto, sans-serif",
    fontSize: 16,
    fontWeight: "500",
    marginVertical: "auto",
    width: 143,
  },
  iconContainer: {
    borderRadius: 4,
    alignSelf: "stretch",
    display: "flex",
    marginVertical: "auto",
    padding: 5,
    alignItems: "center",
    gap: 10,
    width: 34,
    height: 34,
  },
  icon: {
    alignSelf: "stretch",
    position: "relative",
    display: "flex",
    marginVertical: "auto",
    width: 24,
    aspectRatio: 1,
  },
});

