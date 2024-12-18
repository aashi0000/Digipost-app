import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";

export const IconButton = ({ source, size = 24, onPress, style }) => (
  <TouchableOpacity style={[styles.iconButton, style]} onPress={onPress}>
    <Image
      resizeMode="contain"
      source={source}
      style={[styles.icon, { width: size, height: size }]}
    />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  iconButton: {
    padding: 10,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    aspectRatio: 1,
  },
});
