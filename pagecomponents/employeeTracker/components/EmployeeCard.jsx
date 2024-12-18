import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const EmployeeCard = ({ name, rank, badges, points, imageUrl }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.profileSection}>
        <Image
          resizeMode="contain"
          source={{ uri: imageUrl }}
          style={styles.profileImage}
        />
        <View style={styles.nameSection}>
          <View style={styles.nameContainer}>
            <Text style={styles.nameText}>{name}</Text>
          </View>
          <View style={styles.rankContainer}>
            <Text style={styles.rankText}>#{rank}</Text>
          </View>
        </View>
      </View>
      <View style={styles.statsSection}>
        <View style={styles.badgesContainer}>
          <Text style={styles.badgesText}>Earned {badges} Badges</Text>
        </View>
        <View style={styles.pointsContainer}>
          <Text style={styles.pointsText}>{points} points</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 10,
    display: "flex",
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  profileSection: {
    alignSelf: "stretch",
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  profileImage: {
    borderRadius: 50,
    width: 50,
    aspectRatio: 1,
  },
  nameSection: {
    alignSelf: "stretch",
    flexDirection: "column",
  },
  nameContainer: {
    gap: 10,
  },
  nameText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#353535",
  },
  rankContainer: {},
  rankText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#353535",
  },
  statsSection: {
    alignSelf: "stretch",
    flexDirection: "column",
  },
  badgesContainer: {
    gap: 10,
  },
  badgesText: {
    fontSize: 11,
    fontWeight: "400",
    color: "#353535",
  },
  pointsContainer: {},
  pointsText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#353535",
  },
});

export default EmployeeCard;
