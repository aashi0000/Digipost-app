import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const OrderCard = ({ orderNo, address, date, time }) => {
  return (
    <View style={styles.orderContainer}>
      <View style={styles.orderDetails}>
        <Text style={styles.orderNumber}>Order No: {orderNo}</Text>
        <Text style={styles.orderType}>Type</Text>
        <View style={styles.addressContainer}>
          <View style={styles.addressWrapper}>
            <Image
              resizeMode="contain"
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/d8904069397e970814d608bbb69543f284ceccc8cadefaa835ccbc95f148ac91?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
              }}
              style={styles.locationIcon}
            />
            <View style={styles.addressText}>
              <Text>{address}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.arrivalInfo}>
        <View style={styles.expectedArrival}>
          <View style={styles.statusDot} />
          <View style={styles.arrivalText}>
            <Text>expected Arrival</Text>
          </View>
        </View>
        <View style={styles.dateContainer}>
          <Text>{date}</Text>
        </View>
        <View style={styles.timeContainer}>
          <Text>{time}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  orderContainer: {
    borderRadius: 10,
    display: "flex",
    width: "100%",
    padding: 20,
    alignItems: "stretch",
    gap: 11,
  },
  orderDetails: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    flex: 1,
  },
  orderNumber: {
    fontSize: 19,
    fontWeight: "500",
  },
  orderType: {
    alignSelf: "stretch",
    maxWidth: "100%",
    width: 150,
    fontSize: 16,
    fontWeight: "700",
  },
  addressContainer: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    gap: 10,
    fontSize: 13,
    fontWeight: "400",
  },
  addressWrapper: {
    alignSelf: "stretch",
    display: "flex",
    width: "100%",
    alignItems: "center",
    gap: 2,
    flex: 1,
  },
  locationIcon: {
    width: 24,
    aspectRatio: 1,
  },
  addressText: {
    flex: 1,
  },
  arrivalInfo: {
    display: "flex",
    flexDirection: "column",
    fontSize: 13,
    fontWeight: "500",
    justifyContent: "center",
    flex: 1,
  },
  expectedArrival: {
    borderRadius: 10,
    display: "flex",
    paddingVertical: 4,
    alignItems: "center",
    gap: 5,
    textAlign: "right",
    flexDirection: "row",
  },
  statusDot: {
    backgroundColor: "#353535",
    borderRadius: 50,
    width: 8,
    height: 8,
  },
  arrivalText: {
    width: 97,
  },
  dateContainer: {
    fontSize: 16,
  },
  timeContainer: {
    fontSize: 13,
  },
});

export default OrderCard;
