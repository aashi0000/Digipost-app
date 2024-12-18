import * as React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

export function RewardsFooter() {
  const rewardIcons = [
    "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/c7391fd78daa05433d21d83cf789b63f228fd67cf14d9e81531f2c0517ed842e?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
    "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/10473768f550df78cfa54a3a89a901ae27980614ac2a96a77112443f1702f902?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
    "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/657013327f62f04dd468dbc64284e66fbe238b8a7045cf21df5b8886169cf00c?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
    "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/3cdb7e4df4446bfd77c485d4d301f7bea5d885aca2b0811f4a063e2610e16a4f?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
    "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/8c71114a61c0815ee333ca34f5b2bab22c49c03bb7fa7d966678448185ebcbaa?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
  ];

  return (
    <View style={styles.footerContainer}>
      <View style={styles.rewardsHeader}>
        <Image
          resizeMode="contain"
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/2db29ce77b2ec6f35521a672b1a09f4840364fcc91c33af95bc17178d5e9c33a?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
          }}
          style={styles.rewardsIcon}
        />
        <Text style={styles.rewardsText}>Rewards Earned</Text>
      </View>
      <View style={styles.iconContainer}>
        {rewardIcons.map((icon, index) => (
          <View key={index} style={styles.iconWrapper}>
            <Image
              resizeMode="contain"
              source={{ uri: icon }}
              style={styles.footerIcon}
            />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    width: "100%",
    alignItems: "center",
  },
  rewardsHeader: {
    display: "flex",
    marginLeft: 35,
    alignItems: "center",
    gap: 4,
    flexDirection: "row",
  },
  rewardsIcon: {
    width: 24,
    aspectRatio: "4.81",
  },
  rewardsText: {
    fontSize: 13,
    fontWeight: "500",
  },
  iconContainer: {
    alignSelf: "center",
    display: "flex",
    marginTop: 16,
    width: "100%",
    maxWidth: 312,
    gap: 15,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  iconWrapper: {
    borderRadius: 100,
    padding: 10,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  footerIcon: {
    width: 30,
    aspectRatio: 1,
  },
});

