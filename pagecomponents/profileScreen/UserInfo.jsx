import * as React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

export function UserInfo() {
  return (
    <View style={styles.userInfoContainer}>
      <View style={styles.userProfile}>
        <Image
          resizeMode="contain"
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/69622673baa8bd44f7df9b5c4895348846bf030fc31dc3bbd6f68e27b8ad5712?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
          }}
          style={styles.profileImage}
        />
        <View style={styles.userDetails}>
          <Text style={styles.userName}>User Name</Text>
          <Text style={styles.userBio}>
            Introduce yourself
            hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
          </Text>
          <View style={styles.statsContainer}>
            <StatItem label="Points" value="5,000" />
            <StatItem label="Badges" value="20" />
          </View>
        </View>
      </View>
    </View>
  );
}

function StatItem({ label, value }) {
  return (
    <View style={styles.statItem}>
      <Text style={styles.statLabel}>{label}</Text>
      <Text style={styles.statValue}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  userInfoContainer: {
    display: "flex",
    minHeight: 293,
    width: "100%",
    paddingLeft: 15,
    paddingRight: 20,
    paddingTop: 191,
    paddingBottom: 20,
    gap: 4,
    fontFamily: "Roboto, sans-serif",
    fontWeight: "500",
  },
  userProfile: {
    display: "flex",
    minWidth: 240,
    gap: 4,
  },
  profileImage: {
    borderRadius: 101,
    position: "relative",
    display: "flex",
    width: 81,
    flexShrink: "0",
    aspectRatio: "1",
  },
  userDetails: {
    display: "flex",
    minWidth: 240,
    flexDirection: "column",
    alignItems: "stretch",
    width: 265,
  },
  userName: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
  },
  userBio: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    marginTop: 4,
  },
  statsContainer: {
    display: "flex",
    marginTop: 4,
    gap: 4,
    fontSize: 11,
  },
  statItem: {
    borderRadius: 101,
    display: "flex",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 4,
    paddingBottom: 4,
    alignItems: "center",
    gap: 10,
    color: "rgba(238, 238, 238, 1)",
  },
  statLabel: {
    alignSelf: "stretch",
    marginTop: "auto",
    marginBottom: "auto",
  },
  statValue: {
    alignSelf: "stretch",
    marginTop: "auto",
    marginBottom: "auto",
  },
});

