import * as React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export function ServiceItem({ icon, title }) {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.iconContainer}>
        <Image
          resizeMode="contain"
          source={{ uri: icon }}
          style={styles.icon}
        />
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    alignSelf: "stretch",
    display: "flex",
    marginVertical: "auto",
    flexDirection: "column",
    alignItems: "stretch",
    width: 74,
  },
  iconContainer: {
    alignSelf: "center",
    display: "flex",
    minHeight: 60,
    width: 60,
    padding: 10,
    paddingVertical: 13,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    position: "relative",
    display: "flex",
    width: "100%",
    aspectRatio: 1,
  },
  title: {
    color: "#9E0E0E",
    textAlign: "center",
    fontFamily: "Roboto, sans-serif",
    fontSize: 11,
    fontWeight: "500",
  },
});
