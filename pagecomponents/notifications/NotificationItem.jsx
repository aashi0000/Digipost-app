import * as React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

export const NotificationItem = ({ icon, title, message, time }) => {
  return (
    <View style={styles.notificationContainer}>
      <Image
        resizeMode="contain"
        source={{ uri: icon }}
        style={styles.notificationIcon}
      />
      <View style={styles.notificationContent}>
        <Text style={styles.notificationTitle}>{title}</Text>
        <Text style={styles.notificationMessage}>{message}</Text>
        <Text style={styles.notificationTime}>{time}</Text>
      </View>
      <Image
        resizeMode="contain"
        source={{
          uri: "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/23f17552bc96e581fed47321508933005752366adf7ba29bc1c5987185f49f2a?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
        }}
        style={styles.menuIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  notificationContainer: {
    borderRadius: 10,
    display: "flex",
    marginTop: 10,
    maxWidth: "100%",
    width: 348,
    paddingHorizontal: 20,
    paddingVertical: 4,
    alignItems: "center",
    gap: 23,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  notificationIcon: {
    alignSelf: "stretch",
    width: 24,
    aspectRatio: 1,
  },
  notificationContent: {
    alignSelf: "stretch",
    flex: 1,
    justifyContent: "center",
    width: 214,
  },
  notificationTitle: {
    color: "#000",
    fontSize: 13,
    fontWeight: "500",
  },
  notificationMessage: {
    color: "rgba(158, 14, 14, 1)",
    fontSize: 10,
  },
  notificationTime: {
    color: "#787878",
    fontSize: 8,
  },
  menuIcon: {
    width: 24,
    aspectRatio: 1,
  },
});
