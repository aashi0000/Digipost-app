import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import {DocumentItem} from "./DocumentItem";

const documents = [
  { title: "Adhaar" },
  { title: "Address Proof" },
  { title: "PAN Card" },
  { title: "Birth Certificate" },
  { title: "Driving License" },
];

export function DocumentSection() {
  return (
    <View style={styles.documentContainer}>
      <Text style={styles.sectionTitle}>Documents</Text>
      <View style={styles.documentGrid}>
        {documents.map((doc, index) => (
          <DocumentItem key={index} title={doc.title} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  documentContainer: {
    display: "flex",
    marginTop: 10,
    width: 345,
    maxWidth: "100%",
    flexDirection: "column",
    alignItems: "stretch",
  },
  sectionTitle: {
    color: "#0D271A",
    fontFamily: "Roboto, sans-serif",
    fontSize: 23,
    fontWeight: "500",
  },
  documentGrid: {
    display: "flex",
    marginTop: 10,
    minHeight: 81,
    width: "100%",
    gap: 5,
    overflow: "hidden",
    flexDirection: "row",
  },
});

