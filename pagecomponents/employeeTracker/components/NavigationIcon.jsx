import React from "react";
import { View, Image, StyleSheet } from "react-native";

const NavigationIcon = ({ imageUrl }) => {
  return (
    <View style={styles.iconWrapper}>
      <View style={styles.iconContainer}>
        <Image
          resizeMode="contain"
          source={{ uri: imageUrl }}
          style={styles.iconImage}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconWrapper: {
    borderRadius: 100,
    alignSelf: "stretch",
    display: "flex",
    marginVertical: "auto",
    padding: 10,
    alignItems: "center",
    gap: 10,
    width: 50,
    height: 50,
  },
  iconContainer: {
    alignSelf: "stretch",
    position: "relative",
    display: "flex",
    marginVertical: "auto",
  },
  iconImage: {
    width: 30,
    aspectRatio: 1,
  },
});

export default NavigationIcon;
