import React from "react";
import { View, TextInput, Image, StyleSheet } from "react-native";

export const SearchBar = ({ onSearch }) => (
  <View style={styles.searchContainer}>
    <View style={styles.searchInputWrapper}>
      <Image
        source={require("../../assets/icons/searchicon.png")}
        style={styles.searchIcon}
      />
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        placeholderTextColor="#9F9FA1"
        onChangeText={onSearch}
      />
    </View>
    <View style={styles.voiceSearch}>
      <Image
        source={require("../../assets/icons/mic.png")}
        style={styles.voiceIcon}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#9F9FA1",
    minHeight: 35,
    paddingHorizontal: 10,
    paddingVertical: 8,
    flexDirection: "row",
    gap: 10,
  },
  searchInputWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
  searchInput: {
    flex: 1,
    fontFamily: "Roboto",
    fontSize: 11,
    color: "#9F9FA1",
  },
  voiceSearch: {
    width: 20,
    alignItems: "center",
  },
  voiceIcon: {
    width: 20,
    height: 20,
  },
});
