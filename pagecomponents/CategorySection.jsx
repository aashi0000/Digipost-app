import * as React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { CategoryCard } from "./CategoryCard";

export function CategorySection({ title, data, imageStyle }) {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.cardsContainer}>
          {data.map((item) => (
            <CategoryCard
              key={item.id}
              image={item.image}
              title={item.title}
              imageStyle={imageStyle}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    display: "flex",
    marginTop: 10,
    width: 345,
    maxWidth: "100%",
    flexDirection: "column",
    alignItems: "stretch",
  },
  sectionTitle: {
    fontSize: 23,
    color: "#0D271A",
    fontWeight: "500",
    fontFamily: "Roboto, sans-serif",
  },
  cardsContainer: {
    display: "flex",
    marginTop: 10,
    width: "100%",
    gap: 5,
    flexDirection: "row",
  },
});
