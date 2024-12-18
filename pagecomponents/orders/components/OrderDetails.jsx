import * as React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export const OrderDetails = ({
  orderNo,
  address,
  expectedDate,
  expectedTime,
}) => {
  return (
    <View style={styles.orderDetailsContainer}>
      <View style={styles.orderInfoSection}>
        <Text style={styles.orderNumber}>Order No: {orderNo}</Text>
        <Text style={styles.typeLabel}>Type</Text>
        <View style={styles.addressContainer}>
          <Image
            resizeMode="contain"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/d8904069397e970814d608bbb69543f284ceccc8cadefaa835ccbc95f148ac91?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
            }}
            style={styles.locationIcon}
          />
          <Text style={styles.addressText}>{address}</Text>
        </View>
      </View>
      <View style={styles.arrivalSection}>
        <View style={styles.expectedArrivalHeader}>
          <View style={styles.dotIndicator} />
          <Text style={styles.arrivalLabel}>expected Arrival</Text>
        </View>
        <Text style={styles.dateText}>{expectedDate}</Text>
        <Text style={styles.timeText}>{expectedTime}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  orderDetailsContainer: {
    borderRadius: 10,
    width: "100%",
    padding: 20,
    gap: 11,
  },
  orderInfoSection: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  orderNumber: {
    fontSize: 19,
    fontWeight: "500",
  },
  typeLabel: {
    fontSize: 16,
    fontWeight: "700",
    maxWidth: 150,
  },
  addressContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  locationIcon: {
    width: 24,
    aspectRatio: 1,
  },
  addressText: {
    fontSize: 13,
    flex: 1,
  },
  arrivalSection: {
    flexDirection: "column",
    fontSize: 13,
    fontWeight: "500",
  },
  expectedArrivalHeader: {
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingVertical: 4,
  },
  dotIndicator: {
    backgroundColor: "#353535",
    borderRadius: 50,
    width: 8,
    height: 8,
  },
  arrivalLabel: {
    width: 97,
  },
  dateText: {
    fontSize: 16,
  },
  timeText: {
    fontSize: 13,
  },
});
