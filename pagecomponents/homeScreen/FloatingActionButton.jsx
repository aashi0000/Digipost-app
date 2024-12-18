import * as React from "react";
import { View, Image, StyleSheet } from "react-native";

export function FloatingActionButton() {
  return (
    <View style={styles.fabContainer}>
      <View style={styles.fabButton}>
        <View style={styles.iconContainer}>
          <Image
            resizeMode="contain"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/9876eab1605c8015c58d234775625f6064ce58b505996a4480689fbdf47876a2?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
            }}
            style={styles.icon}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fabContainer: {
    zIndex: 10,
    display: "flex",
    marginTop: -86,
    width: 74,
    padding: 10,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  fabButton: {
    borderRadius: 100,
    display: "flex",
    width: "100%",
    paddingHorizontal: 10,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: 55,
  },
  iconContainer: {
    display: "flex",
    minHeight: 35,
    width: "100%",
    padding: 4,
    paddingVertical: 6,
    alignItems: "center",
    gap: 10,
    overflow: "hidden",
    justifyContent: "center",
  },
  icon: {
    alignSelf: "stretch",
    position: "relative",
    display: "flex",
    marginVertical: "auto",
    width: 24,
    aspectRatio: 1,
  },
});

