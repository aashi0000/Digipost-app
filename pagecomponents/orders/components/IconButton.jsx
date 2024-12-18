import * as React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";

export const IconButton = ({ icon, onPress, size = 30, containerStyle }) => {
  return (
    <TouchableOpacity
      style={[styles.iconContainer, containerStyle]}
      onPress={onPress}
    >
      <Image
        resizeMode="contain"
        source={{ uri: icon }}
        style={[styles.icon, { width: size, height: size }]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    borderRadius: 100,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
  },
  icon: {
    aspectRatio: 1,
  },
});
