import * as React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export const SustainabilityNotice = () => {
  return (
    <View style={styles.noticeContainer}>
      <Image
        resizeMode="contain"
        source={{
          uri: "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/251d7e02b084670755de2136f761e7b23e45b1ab24fcd3bfdde1bfc1559223a8?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
        }}
        style={styles.noticeImage}
      />
      <View style={styles.noticeContent}>
        <Text style={styles.noticeTitle}>
          Help us in achieving sustainability goals
        </Text>
        <Text style={styles.noticeText}>
          are you available at the given time to recieve the parcel? if not the
          you can notify for the same
        </Text>
        <TouchableOpacity style={styles.notifyButton}>
          <Text style={styles.notifyButtonText}>Notify</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  noticeContainer: {
    display: "flex",
    width: "100%",
    gap: 10,
    flexDirection: "row",
  },
  noticeImage: {
    borderRadius: 10,
    width: 103,
    aspectRatio: 0.77,
  },
  noticeContent: {
    flex: 1,
    gap: 8,
  },
  noticeTitle: {
    fontSize: 19,
    fontWeight: "500",
  },
  noticeText: {
    fontSize: 13,
    fontWeight: "400",
  },
  notifyButton: {
    borderRadius: 100,
    minHeight: 39,
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: "#353535",
  },
  notifyButtonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#EEE",
    textAlign: "center",
  },
});
