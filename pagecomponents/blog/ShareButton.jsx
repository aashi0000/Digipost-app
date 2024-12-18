import * as React from "react";
import { View, Image, StyleSheet } from "react-native";

function ShareButton() {
  return (
    <View style={styles.shareContainer}>
      <View style={styles.shareWrapper}>
        <View style={styles.shareIconWrapper}>
          <Image
            resizeMode="contain"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/9876eab1605c8015c58d234775625f6064ce58b505996a4480689fbdf47876a2?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
            }}
            style={styles.shareIcon}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  shareContainer: {
    zIndex: "10",
    display: "flex",
    marginTop: -84,
    width: 74,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  shareWrapper: {
    borderRadius: 100,
    display: "flex",
    width: "100%",
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: 55,
  },
  shareIconWrapper: {
    display: "flex",
    minHeight: 35,
    width: "100%",
    paddingLeft: 4,
    paddingRight: 4,
    paddingTop: 6,
    paddingBottom: 6,
    alignItems: "center",
    gap: 10,
    overflow: "hidden",
    justifyContent: "center",
  },
  shareIcon: {
    alignSelf: "stretch",
    position: "relative",
    display: "flex",
    marginTop: "auto",
    marginBottom: "auto",
    width: 24,
    aspectRatio: "1",
  },
});

export default ShareButton;
