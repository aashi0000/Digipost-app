import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

export const FeatureCard = ({ title, children }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{title}</Text>
        <View style={styles.cardBody}>{children}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    display: "flex",
    width: "100%",
    paddingHorizontal: 20,
    flexDirection: "column",
  },
  cardContent: {
    borderRadius: 10,
    minHeight: 120,
    width: "100%",
    alignItems: "center",
    gap: 13,
    overflow: "hidden",
    justifyContent: "space-between",
  },
  cardTitle: {
    alignSelf: "stretch",
    marginVertical: "auto",
    paddingHorizontal: 20,
    fontFamily: "Roboto, sans-serif",
    fontSize: 23,
    color: "#0D271A",
    fontWeight: "500",
  },
  cardBody: {
    alignSelf: "stretch",
    marginVertical: "auto",
    minHeight: 120,
    flexDirection: "column",
    alignItems: "stretch",
    width: 171,
  },
});
