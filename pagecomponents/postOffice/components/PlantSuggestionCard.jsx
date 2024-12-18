import * as React from "react";
import { useState } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import PlantItem from "./PlantItem";

function PlantSuggestionCard({ pdata, pname }) {
  // Split the pdata string into an array of words, assuming words are separated by commas
  const plantsFromData = pdata ? pdata.split(",") : [];

  // State to toggle visibility of the plant list
  const [isPlantListVisible, setIsPlantListVisible] = useState(false);

  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity style={styles.headerSection}
      onPress={() => setIsPlantListVisible(!isPlantListVisible)}>
        <View style={styles.contentWrapper}>
          <View style={styles.avatarContainer}>
            <Image
              resizeMode="contain"
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/813ffa5ce1fe3b15fbbdab05e34daf272c7e029ae9e7f2997fa5b6728f7cac9b?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
              }}
              style={styles.avatarImage}
            />
          </View>
          <View
            
            style={styles.titleContainer}
          >
            <View style={styles.titleWrapper}>
              <Text>{pname}</Text>
            </View>
            <Image
              resizeMode="contain"
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/26280258f5ebe7933a3d256f526b653c2a13d00715cc014dd5ec54d2470a7204?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
              }}
              style={styles.iconImage}
            />
          </View>
        </View>
      </TouchableOpacity>
      {isPlantListVisible && (
        <View style={styles.plantListContainer}>
          {/* Map over the plantsFromData to dynamically render PlantItem components */}
          {plantsFromData.map((plantName, index) => (
            <PlantItem key={index} name={plantName} />
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    display: "flex",
    maxWidth: 346,
    flexDirection: "column",
    alignItems: "stretch",
  },
  headerSection: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    display: "flex",
    width: "100%",
    padding: 20,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4CAF50", // This is where the color is applied
  },
  contentWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatarContainer: {
    display: "flex",
    width: 50,
    alignItems: "center",
    gap: 10,
  },
  avatarImage: {
    borderRadius: 50,
    alignSelf: "stretch",
    position: "relative",
    display: "flex",
    marginVertical: "auto",
    width: 50,
    aspectRatio: 1,
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  titleWrapper: {
    alignSelf: "stretch",
    marginVertical: "auto",
  },
  iconImage: {
    alignSelf: "stretch",
    position: "relative",
    display: "flex",
    marginVertical: "auto",
    width: 12,
    flexShrink: 0,
    aspectRatio: 1,
  },
  plantListContainer: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    display: "flex",
    width: "100%",
    padding: 10,
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "Roboto, sans-serif",
    fontSize: 13,
    color: "#353535",
    fontWeight: "500",
    justifyContent: "center",
  },
});

export default PlantSuggestionCard;
