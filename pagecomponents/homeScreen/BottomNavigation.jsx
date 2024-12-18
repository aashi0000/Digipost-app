import * as React from "react";
import { View, Image, StyleSheet } from "react-native";

const navigationItems = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/c7391fd78daa05433d21d83cf789b63f228fd67cf14d9e81531f2c0517ed842e?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/10473768f550df78cfa54a3a89a901ae27980614ac2a96a77112443f1702f902?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
  },
  {  
    icon: "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/c31b35ca87ef75553756789b1814a2fbfd3808bd1bb67265af8d644ca7360338?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/3cdb7e4df4446bfd77c485d4d301f7bea5d885aca2b0811f4a063e2610e16a4f?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/ae066ce6891e04e95378d2dbacad46fec9639dde9f8863654b8f96508fc3d818?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
  },
];

export function BottomNavigation() {
  return (
    <View style={styles.navigationContainer}>
      {navigationItems.map((item, index) => (
        <View key={index} style={styles.navItem}>
          <Image
            resizeMode="contain"
            source={{ uri: item.icon }}
            style={styles.icon}
          />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  navigationContainer: {
    alignSelf: "center",
    display: "flex",
    marginTop: 16,
    width: "100%",
    maxWidth: 312,
    gap: 15,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  navItem: {
    borderRadius: 100,
    display: "flex",
    padding: 10,
    alignItems: "center",
    gap: 10,
    width: 50,
  },
  icon: {
    alignSelf: "stretch",
    position: "relative",
    display: "flex",
    marginVertical: "auto",
    width: 30,
    aspectRatio: 1,
  },
});
