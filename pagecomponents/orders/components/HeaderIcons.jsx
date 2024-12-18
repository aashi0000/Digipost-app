import * as React from "react";
import { View, StyleSheet } from "react-native";
import { IconButton } from "./IconButton";

const headerIcons = [
  "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/209c01709a11e82c60f346639ce7550cdb0384ff23ea2140ee67d5746c78f7ff?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
  "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/37980ee8d13a29450098ee14e48e8f400fc84f06e83dcd8a95b5c50ac9dc9061?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
  "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/eaefa808f0c6360547567468c6ce118113b1b9819141ad3817652b64168ce718?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
  "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/ff716f2a08403ea3a4f70a53a5dbd4cc1ba1ed4a26fed5327a26a65f58b8ad19?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
];

export const HeaderIcons = () => {
  return (
    <View style={styles.headerIconsContainer}>
      {headerIcons.map((icon, index) => (
        <IconButton key={index} icon={icon} size={24} onPress={() => {}} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  headerIconsContainer: {
    alignSelf: "stretch",
    display: "flex",
    alignItems: "center",
    gap: 23,
  },
});
