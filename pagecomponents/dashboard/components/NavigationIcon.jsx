import React from "react";
import { View, Image, StyleSheet } from "react-native";

const NavigationIcon = ({ source, size = 24 }) => {
  return (
    <View style={styles.iconContainer}>
      <Image
        resizeMode="contain"
        source={source}
        style={[styles.icon, { width: size, height: size }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  icon: {
    aspectRatio: 1,
  },
});

export default NavigationIcon;
