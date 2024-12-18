import * as React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

export function OrderHistory() {
  const historyItems = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/889227ae2faddf758efe75056e7c906a22f6d7952e90905cd26eb411aa12da4e?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
      title: "Saved Address",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/0056a5b9a1b3076b2b8143d789347409fe5626faa8f40836707e6f9195af403a?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
      title: "Bills and Receipts",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/48e66ab2a1a31c3a75ffbf30cb0c2a3f52f9bb6cb7fd2b1bfd0c5f701702572e?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
      title: "Payment",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/6e89f492caf814dbe90775d6ce15ff2bcecf9cee3064e87075b0febe45dead25?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
      title: "Return History",
    },
  ];

  return (
    <View style={styles.historyContainer}>
      <Text style={styles.sectionTitle}>Order History</Text>
      <View style={styles.historyList}>
        {historyItems.map((item, index) => (
          <HistoryItem key={index} icon={item.icon} title={item.title} />
        ))}
      </View>
    </View>
  );
}

function HistoryItem({ icon, title }) {
  return (
    <View style={styles.historyItem}>
      <View style={styles.itemContent}>
        <Image
          resizeMode="contain"
          source={{ uri: icon }}
          style={styles.itemIcon}
        />
        <Text style={styles.itemTitle}>{title}</Text>
      </View>
      <Image
        resizeMode="contain"
        source={{
          uri: "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/0cbe62c4b471e860142ec0e9c372180dd76c0c28e4ce7abf7c8487f133ae4d0f?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
        }}
        style={styles.arrowIcon}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  historyContainer: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "stretch",
    fontWeight: "500",
  },
  sectionTitle: {
    color: "#787878",
    fontSize: 11,
  },
  historyList: {
    display: "flex",
    marginTop: 4,
    width: "100%",
    flexDirection: "column",
    alignItems: "stretch",
    fontSize: 13,
    color: "#000",
  },
  historyItem: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 10,
  },
  itemContent: {
    display: "flex",
    alignItems: "center",
    gap: 4,
    flexDirection: "row",
  },
  itemIcon: {
    width: 24,
    aspectRatio: 1,
  },
  itemTitle: {
    fontSize: 13,
    fontWeight: "500",
  },
  arrowIcon: {
    width: 24,
    aspectRatio: 1,
  },
});

