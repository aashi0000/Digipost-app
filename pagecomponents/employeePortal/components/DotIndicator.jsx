import * as React from "react";
import { View, StyleSheet } from "react-native";

export const DotIndicator = ({ count = 6 }) => {
  return (
    <View style={styles.dotContainer}>
      {[...Array(count)].map((_, index) => (
        <View key={index} style={styles.dot} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  dotContainer: {
    display: "flex",
    alignItems: "center",
    gap: 5,
    flexDirection: "row",
  },
  dot: {
    borderRadius: 50,
    width: 8,
    height: 8,
    backgroundColor: "#000",
  },
});
