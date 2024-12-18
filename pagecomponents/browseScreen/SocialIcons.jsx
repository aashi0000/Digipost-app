import React from "react";
import { View, Image, StyleSheet } from "react-native";

const socialIcons = [
  { id: 1, source: require("../../assets/icons/feedback.png") },
  { id: 2, source: require("../../assets/icons/feedback.png") },
  { id: 3, source: require("../../assets/icons/feedback.png") },
  { id: 4, source: require("../../assets/icons/feedback.png") },
];

export const SocialIcons = () => (
  <View style={styles.socialIconsContainer}>
    {socialIcons.map((icon) => (
      <Image
        key={icon.id}
        source={icon.source}
        style={styles.socialIcon}
        resizeMode="contain"
      />
    ))}
  </View>
);

const styles = StyleSheet.create({
  socialIconsContainer: {
    flexDirection: "row",
    gap: 30,
    minHeight: 71,
    alignItems: "center",
  },
  socialIcon: {
    width: 25,
    aspectRatio: 1,
  },
});
