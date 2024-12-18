import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export const StatCard = ({ icon, title, value }) => (
  <View style={styles.cardContainer}>
    <View style={styles.cardContent}>
      {icon && (
        <View style={styles.iconContainer}>
          <Image resizeMode="contain" source={icon} style={styles.cardIcon} />
        </View>
      )}
      {value && (
        <View style={styles.valueContainer}>
          <Text style={styles.valueText}>{value}</Text>
        </View>
      )}
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 10,
    padding: 20,
    width: 165,
    justifyContent: "center",
  },
  cardContent: {
    alignItems: "center",
  },
  iconContainer: {
    width: 50,
    alignItems: "center",
  },
  cardIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  valueContainer: {
    marginTop: 10,
    alignItems: "center",
  },
  valueText: {
    fontSize: 33,
    fontWeight: "700",
    color: "#000",
  },
  titleContainer: {
    marginTop: 10,
    alignItems: "center",
  },
  titleText: {
    fontSize: 13,
    fontWeight: "500",
    color: "#353535",
    fontFamily: "Roboto, sans-serif",
  },
});
