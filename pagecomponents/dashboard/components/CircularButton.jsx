import React from "react";
import { View, Image, StyleSheet } from "react-native";

const CircularButton = ({ source, size = 50 }) => {
  return (
    <View style={[styles.circularButton, { width: size, height: size }]}>
      <Image resizeMode="contain" source={source} style={styles.buttonIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  circularButton: {
    borderRadius: 100,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonIcon: {
    width: 30,
    height: 30,
    aspectRatio: 1,
  },
});

export default CircularButton;
