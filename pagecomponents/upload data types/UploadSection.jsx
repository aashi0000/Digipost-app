import * as React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

export function UploadSection() {
  return (
    <View style={styles.uploadContainer}>
      <View style={styles.uploadHeader}>
        <Image
          resizeMode="contain"
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/9e8f1bbad32dfc32b166d98e1a26da3732fe3c3c37492187ddff6325e6312a27?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
          }}
          style={styles.uploadIcon}
        />
        <Text style={styles.uploadText}>upload data</Text>
      </View>
        
      </View>
    
  );
}

const styles = StyleSheet.create({
  uploadContainer: {
    display: "flex",
    minHeight: 714,
    width: "100%",
    flexDirection: "column",
    overflow: "hidden",
    alignItems: "stretch",
  },
  uploadHeader: {
    display: "flex",
    width: "100%",
    paddingLeft: 10,
    paddingRight: 20,
    alignItems: "center",
    gap: 5,
  },
  uploadIcon: {
    alignSelf: "stretch",
    position: "relative",
    display: "flex",
    marginVertical: "auto",
    width: 50,
    aspectRatio: 1,
  },
  uploadText: {
    alignSelf: "stretch",
    marginVertical: "auto",
    fontFamily: "Roboto, sans-serif",
    fontSize: 23,
    color: "#0D271A",
    fontWeight: "500",
  },
  floatingButton: {
    zIndex: 10,
    display: "flex",
    marginTop: -84,
    width: 74,
    padding: 10,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonWrapper: {
    borderRadius: 100,
    display: "flex",
    width: "100%",
    paddingHorizontal: 10,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: 55,
  },
  buttonContent: {
    display: "flex",
    minHeight: 35,
    width: "100%",
    padding: 6,
    alignItems: "center",
    gap: 10,
    overflow: "hidden",
    justifyContent: "center",
  },
  buttonIcon: {
    alignSelf: "stretch",
    position: "relative",
    display: "flex",
    marginVertical: "auto",
    width: 24,
    aspectRatio: 1,
  },
});
