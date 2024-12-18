import * as React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

export function BadgeSection() {
  const badges = [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/3fa0ec307b89a9ffbb746dceebbd13837d748c1afc2977d8ee5747324e6e9c16?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
      title: "First Order",
      points: "50,000",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/9a40e9b9dd45dbdf2d8a832000edcbd5bd320e84c4fe609abffd230644ac82b9?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
      title: "Give Feedback",
      points: "50,000",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/9a40e9b9dd45dbdf2d8a832000edcbd5bd320e84c4fe609abffd230644ac82b9?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
      title: "Verify",
      points: "50,000",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/9a40e9b9dd45dbdf2d8a832000edcbd5bd320e84c4fe609abffd230644ac82b9?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
      title: "Buy Stamp",
      points: "50,000",
    },
  ];

  return (
    <View style={styles.badgeSectionContainer}>
      <Text style={styles.sectionTitle}>Your Badges</Text>
      <View style={styles.badgesContainer}>
        {badges.map((badge, index) => (
          <BadgeItem
            key={index}
            image={badge.image}
            title={badge.title}
            points={badge.points}
          />
        ))}
      </View>
    </View>
  );
}

export function BadgeItem({ image, title, points }) {
  return (
    <View style={styles.badgeItem}>
      <Image
        resizeMode="contain"
        source={{ uri: image }}
        style={styles.badgeImage}
      />
      <Text style={styles.badgeTitle}>{title}</Text>
      <Text style={styles.badgePoints}>{points}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badgeSectionContainer: {
    display: "flex",
    height: 410,
    paddingLeft: 10,
    paddingRight: 8,
    paddingTop: 10,
    flexDirection: "column",
    overflow: "hidden",
    alignItems: "center",
    fontFamily: "Roboto, sans-serif",
  },
  sectionTitle: {
    color: "#0D271A",
    fontSize: 23,
    fontWeight: "500",
  },
  badgesContainer: {
    display: "flex",
    marginTop: 14,
    width: 330,
    maxWidth: "100%",
    gap: 10,
    color: "#344E41",
    textAlign: "center",
    justifyContent: "space-between",
  },
  badgeItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    width: 75,
  },
  badgeImage: {
    alignSelf: "center",
    position: "relative",
    display: "flex",
    width: 75,
    aspectRatio: "0.99",
  },
  badgeTitle: {
    fontSize: 11,
    fontWeight: "400",
    marginTop: 5,
  },
  badgePoints: {
    fontSize: 8,
    fontWeight: "500",
    marginTop: 5,
  },
});
