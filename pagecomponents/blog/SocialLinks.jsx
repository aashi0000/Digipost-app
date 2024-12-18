import * as React from "react";
import { View, Image, StyleSheet } from "react-native";

const socialIcons = [
  {
    id: 1,
    uri: "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/5e933818c179bca8d9a90eb75fea9518f4be9454daa2ec2aa42cf815e287388a?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
  },
  {
    id: 2,
    uri: "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/e75e68aed395d6a5ee1b51737770040e38815615edd0678b73f7849835c5b162?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
  },
  {
    id: 3,
    uri: "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/1538c53ec974389edcb318403c53c4a0ca00d08ddb38aeadc5cdd8ae3151b42a?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
  },
  {
    id: 4,
    uri: "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/90ed304ab5073b89753cdae23a6986362450da401ddb1ed503d297f69a209cea?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
  },
  {
    id: 5,
    uri: "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/ae066ce6891e04e95378d2dbacad46fec9639dde9f8863654b8f96508fc3d818?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
  },
];

function SocialLinks() {
  return (
    <View style={styles.socialContainer}>
      {socialIcons.map((icon) => (
        <View key={icon.id} style={styles.socialIconWrapper}>
          <Image
            resizeMode="contain"
            source={{ uri: icon.uri }}
            style={styles.socialIcon}
          />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  socialContainer: {
    display: "flex",
    marginTop: 9,
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: "center",
    gap: 25,
    justifyContent: "space-between",
  },
  socialIconWrapper: {
    borderRadius: 100,
    alignSelf: "stretch",
    display: "flex",
    marginTop: "auto",
    marginBottom: "auto",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: "center",
    gap: 10,
    width: 50,
  },
  socialIcon: {
    alignSelf: "stretch",
    position: "relative",
    display: "flex",
    marginTop: "auto",
    marginBottom: "auto",
    width: 30,
    aspectRatio: "1",
  },
});

export default SocialLinks;
