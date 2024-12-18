import * as React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import {ServiceItem} from "./ServiceItem";

const services = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/7b0623f268f8e511bd51c9ea2d13670e93ef51c4204390d0fbe32d06883f7fef?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
    title: "Posting",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/9a3c563b14ad5a95330ddd3be5b8b1efb017b4492a021749f05994b2af351d5e?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
    title: "Track Order",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/2299d2557c5418b5ef954dff8217b269b55382b3ea1b20aad690d3999b0afee7?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
    title: "Banking",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/7328f273c6e197a6bd02c2f6d9d4e3327eefd5979621bd03db0dcbeb6efefbf4?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
    title: "Insurance",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/065a086f0ea8a0bbbe5c0834fb16daaeaba0799b0a2c96793d7a98302ebe7f75?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
    title: "Government scheme's",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/96e472b603a09098d50836dab111f96b63a521d4628d0588e0d513aef027d183?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
    title: "Mentor-Mentee",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/eebda125e844bdd82800a2015729fa5d1daf74cb3da8ebc41561e46a9666721c?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
    title: "Adhaar Card",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/4fb3faca62e3d595d7cfb5940cb03da2777ea6dfb3b20966bfb6c97876854727?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
    title: "Passport",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/7be1e422174b22f8a87c9cc94cb05ab56433dacafa633b2d60071777f9ea4b82?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
    title: "Insurance",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/2ef7e4a1579d1abd702be48a72825f09aec3b2778e83d562247e6895c14805f0?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
    title: "Online NPS",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/7e9c7c0a33b6e29f85b3ff7740fabeadb642c0de222831d123ee0aa7f0b46df7?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
    title: "Online NPS",
  },
];

export function ServiceGrid() {
  return (
    <View style={styles.serviceContainer}>
      <Text style={styles.sectionTitle}>Our Services</Text>
      <View style={styles.gridContainer}>
        {services.map((service, index) => (
          <ServiceItem key={index} icon={service.icon} title={service.title} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  serviceContainer: {
    display: "flex",
    marginTop: 10,
    width: 345,
    maxWidth: "100%",
    flexDirection: "column",
    alignItems: "stretch",
  },
  sectionTitle: {
    color: "#0D271A",
    fontFamily: "Roboto, sans-serif",
    fontSize: 23,
    fontWeight: "500",
  },
  gridContainer: {
  flexDirection: "row", // Set row direction for grid-like layout
  flexWrap: "wrap", // Allow wrapping to create rows
  justifyContent: "space-between", // Space items evenly
  gap: 10, // Add spacing between items (if not supported, use margin in ServiceItem)
  alignItems: "center", // Align items vertically in the center
},

});

