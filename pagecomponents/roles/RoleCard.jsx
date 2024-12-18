import * as React from "react";
import { View, StyleSheet, Text, ImageBackground, TouchableOpacity } from "react-native";

export const RoleCard = ({ title, description, imageUrl, onPress }) => {
  
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <ImageBackground
        resizeMode="cover"
        source={{ uri: imageUrl }}
        style={styles.roleCardContainer}
      >
        <View style={styles.overlay}>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  roleCardContainer: {
    borderRadius: 20,
    position: "relative",
    display: "flex",
    aspectRatio: "1",
    minHeight: 150,
    width: 150,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 85,
    paddingBottom: 20,
    flexDirection: "column",
    alignItems: "stretch",
  },
  roleTitle: {
    fontSize: 16,
    fontWeight: "700",
    position: "relative",
  },
  roleDescription: {
    textOverflow: "ellipsis",
    fontSize: 8,
    fontWeight: "400",
    position: "relative",
    marginTop: 4,
  },
});
