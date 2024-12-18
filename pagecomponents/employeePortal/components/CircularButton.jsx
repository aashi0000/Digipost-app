import * as React from "react";
import { View, Image, StyleSheet } from "react-native";

export const CircularButton = ({ imageSource, size = 50 }) => {
  return (
    <View style={[styles.circularButton, { width: size, height: size }]}>
      <Image
        resizeMode="contain"
        source={imageSource}
        style={styles.buttonIcon}
      />
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
    aspectRatio: 1,
    alignSelf: "stretch",
  },
});
