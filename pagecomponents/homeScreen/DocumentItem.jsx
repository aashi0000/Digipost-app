import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

export function DocumentItem({ title }) {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.iconPlaceholder} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    borderRadius: 4,
    display: "flex",
    minHeight: 75,
    padding: 2,
    paddingVertical: 9,
    flexDirection: "column",
    alignItems: "stretch",
    width: 74,
    height: 75,
  },
  iconPlaceholder: {
    display: "flex",
    minHeight: 29,
    width: "100%",
    paddingVertical: 5,
  },
  title: {
    color: "#9E0E0E",
    textAlign: "center",
    fontFamily: "Roboto, sans-serif",
    fontSize: 11,
    fontWeight: "500",
  },
});

