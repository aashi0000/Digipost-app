import * as React from "react";
import { View, Image, StyleSheet } from "react-native";

export function NavigationBar() {
  const navIcons = [
    "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/c7391fd78daa05433d21d83cf789b63f228fd67cf14d9e81531f2c0517ed842e?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
    "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/e75e68aed395d6a5ee1b51737770040e38815615edd0678b73f7849835c5b162?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
    "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/c31b35ca87ef75553756789b1814a2fbfd3808bd1bb67265af8d644ca7360338?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
    "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/90ed304ab5073b89753cdae23a6986362450da401ddb1ed503d297f69a209cea?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
    "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/ae066ce6891e04e95378d2dbacad46fec9639dde9f8863654b8f96508fc3d818?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
  ];

  return (
    <View style={styles.navContainer}>
      {navIcons.map((icon, index) => (
        <View key={index} style={styles.navItem}>
          <Image
            resizeMode="contain"
            source={{ uri: icon }}
            style={styles.navIcon}
          />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  navContainer: {
    display: "flex",
    marginTop: 9,
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
    gap: 25,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  navItem: {
    borderRadius: 100,
    alignSelf: "stretch",
    display: "flex",
    marginVertical: "auto",
    padding: 10,
    alignItems: "center",
    gap: 10,
    width: 50,
  },
  navIcon: {
    alignSelf: "stretch",
    position: "relative",
    display: "flex",
    marginVertical: "auto",
    width: 30,
    aspectRatio: 1,
  },
});
