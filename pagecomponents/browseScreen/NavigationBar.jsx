import React from "react";
import { View, StyleSheet } from "react-native";
import { IconButton } from "./IconButton";

const navItems = [
  { id: 1, icon: require("../assets/nav1.png") },
  { id: 2, icon: require("../assets/nav2.png") },
  { id: 3, icon: require("../assets/nav3.png") },
  { id: 4, icon: require("../assets/nav4.png") },
  { id: 5, icon: require("../assets/nav5.png") },
];

export const NavigationBar = () => (
  <View style={styles.navigationContainer}>
    {navItems.map((item) => (
      <IconButton
        key={item.id}
        source={item.icon}
        size={30}
        style={styles.navButton}
      />
    ))}
  </View>
);

const styles = StyleSheet.create({
  navigationContainer: {
    flexDirection: "row",
    maxWidth: 312,
    width: "100%",
    justifyContent: "space-between",
    gap: 15,
  },
  navButton: {
    width: 50,
  },
});
