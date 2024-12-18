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
        


891 / 5,000
स्थिरता लोगों के लिए पृथ्वी पर लंबे समय तक सह-अस्तित्व का एक सामाजिक लक्ष्य है। इस शब्द की परिभाषाएं विवादित हैं और साहित्य, संदर्भ और समय के साथ बदलती रही हैं।[2][1] स्थिरता के आमतौर पर तीन आयाम (या स्तंभ) होते हैं: पर्यावरणीय, आर्थिक और सामाजिक।[1] कई परिभाषाएं पर्यावरणीय आयाम पर जोर देती हैं।[3][4] इसमें जलवायु परिवर्तन और जैव विविधता हानि सहित प्रमुख पर्यावरणीय समस्याओं को संबोधित करना शामिल हो सकता है। स्थिरता का विचार वैश्विक, राष्ट्रीय, संगठनात्मक और व्यक्तिगत स्तरों पर निर्णयों का मार्गदर्शन कर सकता है।[5] एक संबंधित अवधारणा सतत विकास की है, और इन शब्दों का अक्सर एक ही अर्थ में उपयोग किया जाता है।[6] यूनेस्को इन दोनों में इस तरह अंतर करता है: "स्थिरता को अक्सर एक दीर्घकालिक लक्ष्य (यानी एक अधिक टिकाऊ दुनिया) के रूप में माना जाता है</Text>
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
