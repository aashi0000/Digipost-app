import * as React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

function BlogContent() {
  return (
    <View style={styles.contentContainer}>
      <View style={styles.titleContainer}>
        <View style={styles.titleWrapper}>
          <Image
            resizeMode="contain"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/559848186a854878c6f3aa1cdca3fb2403eb46fa1ce067bf88665246d1157039?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
            }}
            style={styles.titleIcon}
          />
          <View style={styles.titleText}>
            <Text>Blogs</Text>
          </View>
        </View>
        <View style={styles.menuIconWrapper}>
          <Image
            resizeMode="contain"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/d0c4d26b2c915c38cd4b2da29cbc67a185a34d50ca136e8da6517b72a69c192b?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
            }}
            style={styles.menuIcon}
          />
        </View>
      </View>
      <View style={styles.blogText}>
        <Text>
        Sustainability is a social goal for people to co-exist on Earth over a long period of time. Definitions of this term are disputed and have varied with literature, context, and time.[2][1] Sustainability usually has three dimensions (or pillars): environmental, economic, and social.[1] Many definitions emphasize the environmental dimension.[3][4] This can include addressing key environmental problems, including climate change and biodiversity loss. The idea of sustainability can guide decisions at the global, national, organizational, and individual levels.[5] A related concept is that of sustainable development, and the terms are often used to mean the same thing.[6] UNESCO distinguishes the two like this: "Sustainability is often thought of as a long-term goal (i.e. a more sustainable world), while sustainable development refers to the many processes and pathways to achieve it.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    display: "flex",
    height: 714,
    width: "100%",
    flexDirection: "column",
    overflow: "hidden",
    alignItems: "stretch",
  },
  titleContainer: {
    display: "flex",
    width: "100%",
    paddingLeft: 10,
    paddingRight: 20,
    alignItems: "center",
    gap: "40px 100px",
    justifyContent: "space-between",
  },
  titleWrapper: {
    alignSelf: "stretch",
    display: "flex",
    marginTop: "auto",
    marginBottom: "auto",
    alignItems: "center",
    gap: 10,
    fontFamily: "Roboto, sans-serif",
    fontSize: 23,
    color: "#0D271A",
    fontWeight: "500",
  },
  titleIcon: {
    alignSelf: "stretch",
    position: "relative",
    display: "flex",
    marginTop: "auto",
    marginBottom: "auto",
    width: 50,
    flexShrink: "0",
    aspectRatio: "1",
  },
  titleText: {
    alignSelf: "stretch",
    marginTop: "auto",
    marginBottom: "auto",
  },
  menuIconWrapper: {
    alignItems: "stretch",
    alignSelf: "stretch",
    display: "flex",
    marginTop: "auto",
    marginBottom: "auto",
    paddingLeft: 2,
    paddingRight: 2,
    paddingTop: 5,
    paddingBottom: 5,
    flexDirection: "column",
    overflow: "hidden",
    justifyContent: "center",
    width: 24,
  },
  menuIcon: {
    position: "relative",
    display: "flex",
    width: 20,
    aspectRatio: "1.43",
  },
  blogText: {
    color: "#000",
    fontFamily: "Roboto, sans-serif",
    fontSize: 23,
    fontWeight: "400",
    alignSelf: "center",
    marginTop: 10,
  },
});

export default BlogContent;
