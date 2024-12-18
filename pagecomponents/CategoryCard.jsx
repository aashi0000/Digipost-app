import * as React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

export function CategoryCard({ image, title, imageStyle }) {
  return (
    <View style={styles.cardContainer}>
      <Image
        resizeMode="contain"
        source={{ uri: image }}
        style={[styles.cardImage, imageStyle]}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    display: "flex",
    padding: 10,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 100,
  },
  cardImage: {
    position: "relative",
    display: "flex",
    minHeight: 80,
    width: 80,
    aspectRatio: 1,
  },
  titleContainer: {
    marginTop: 10,
  },
  title: {
    fontSize: 13,
    color: "#000100",
    fontWeight: "700",
  },
});
