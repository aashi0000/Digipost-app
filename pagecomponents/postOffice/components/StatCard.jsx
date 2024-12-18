import * as React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

export const StatCard = ({ icon, value, label }) => {
  return (
    <View style={styles.container}>
      <Image resizeMode="contain" source={icon} style={styles.icon} />
      <View style={styles.textContainer}>
        <Text style={styles.value}>{value}</Text>
        <Text style={styles.label}>{label}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    width: 46,
  },
  icon: {
    borderRadius: 100,
    width: 46,
    height: 45,
  },
  textContainer: {
    marginTop: 5,
    alignItems: "center",
  },
  value: {
    fontSize: 13,
    fontWeight: "500",
    color: "#353535",
  },
  label: {
    fontSize: 8,
    color: "#353535",
  },
});
