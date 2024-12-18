import * as React from "react";
import { View, Image, StyleSheet } from "react-native";

export const NavigationIcon = ({ icon }) => {
  return (
    <View style={styles.navIconContainer}>
      <Image
        resizeMode="contain"
        source={{ uri: icon }}
        style={styles.navIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  navIconContainer: {
    borderRadius: 100,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
  },
  navIcon: {
    width: 30,
    aspectRatio: 1,
  },
});
