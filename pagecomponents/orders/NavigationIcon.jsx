import React from "react";
import { View, Image, StyleSheet } from "react-native";

const NavigationIcon = ({ iconSource }) => {
  return (
    <View style={styles.iconContainer}>
      <Image resizeMode="contain" source={iconSource} style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    borderRadius: 100,
    alignSelf: "stretch",
    display: "flex",
    marginVertical: "auto",
    padding: 10,
    alignItems: "center",
    gap: 10,
    width: 50,
  },
  icon: {
    alignSelf: "stretch",
    width: 30,
    aspectRatio: 1,
  },
});

export default NavigationIcon;
