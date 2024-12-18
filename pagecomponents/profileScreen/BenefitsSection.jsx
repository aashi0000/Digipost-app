import * as React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

export function BenefitsSection() {
  return (
    <View style={styles.benefitsContainer}>
      <Text style={styles.sectionTitle}>Benefits</Text>
      <View style={styles.benefitItem}>
        <Image
          resizeMode="contain"
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/809f6e9472d551b720bd693ee943d4b0cbcf0e36e6cc2c33f91459272ca5e157?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
          }}
          style={styles.benefitIcon}
        />
        <Text style={styles.benefitText}>Create your Avatar</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  benefitsContainer: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "stretch",
    padding: 10,
  },
  sectionTitle: {
    color: "#787878",
    fontSize: 11,
    fontWeight: "500",
  },
  benefitItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: 4,
  },
  benefitIcon: {
    width: 24,
    aspectRatio: 1,
  },
  benefitText: {
    fontSize: 13,
    fontWeight: "500",
  },
});

