import * as React from "react";
import { View, Image, StyleSheet } from "react-native";

export function Header() {
  const headerIcons = [
    "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/209c01709a11e82c60f346639ce7550cdb0384ff23ea2140ee67d5746c78f7ff?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
    "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/37980ee8d13a29450098ee14e48e8f400fc84f06e83dcd8a95b5c50ac9dc9061?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
    "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/eaefa808f0c6360547567468c6ce118113b1b9819141ad3817652b64168ce718?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
    "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/ff716f2a08403ea3a4f70a53a5dbd4cc1ba1ed4a26fed5327a26a65f58b8ad19?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
  ];

  return (
    <View style={styles.headerContainer}>
      <Image
        resizeMode="contain"
        source={{
          uri: "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/358b848687af257d9afef9e80b28f819061e85c5e299a2be191bdb8591268554?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
        }}
        style={styles.logo}
      />
      <View style={styles.iconContainer}>
        {headerIcons.map((icon, index) => (
          <Image
            key={index}
            resizeMode="contain"
            source={{ uri: icon }}
            style={styles.headerIcon}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    width: "100%",
    padding: 10,
    alignItems: "center",
    gap: "40px 100px",
    justifyContent: "space-between",
  },
  logo: {
    alignSelf: "stretch",
    position: "relative",
    display: "flex",
    marginVertical: "auto",
    width: 67,
    flexShrink: "0",
    aspectRatio: "1.68",
  },
  iconContainer: {
    alignSelf: "stretch",
    display: "flex",
    marginVertical: "auto",
    alignItems: "center",
    gap: 23,
  },
  headerIcon: {
    alignSelf: "stretch",
    position: "relative",
    display: "flex",
    marginVertical: "auto",
    width: 24,
    flexShrink: "0",
    aspectRatio: 1,
  },
});
