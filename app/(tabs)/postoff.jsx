import React from "react";
import { View, Image, Text, StyleSheet, ScrollView } from "react-native";
import { SearchBar } from "../../pagecomponents/browseScreen/SearchBar";
import { Header } from "../../pagecomponents/Header";
export const Browse = () => {
  return (
    <ScrollView>
      <View style={styles.screenContainer}>
        <Header/>

        <View style={styles.mainContent}>
          <SearchBar onSearch={(text) => console.log(text)} />

          <View style={styles.locationCard}>
            <Text style={styles.locationTitle}>
              Find your nearest Post Office
            </Text>
            <Text style={styles.locationSubtitle}>
              Live heatmap and route suggestions
            </Text>
            <View style={styles.locationActions}>
              <Text style={styles.liveMaps}>Live maps</Text>
              <View style={styles.routeButtons}>
                <Text style={styles.actionButton}>Plan Route</Text>
                <Text style={styles.actionButton}>Open In Google Maps</Text>
              </View>
            </View>
            <View style={styles.markLocation}>
              <Text style={styles.markLocationText}>Mark this location</Text>
            </View>
          </View>

          <View style={styles.brsrSection}>
            <Text style={styles.brsrTitle}>BRSR Report</Text>
            <View style={styles.brsrActions}>
              <View style={styles.brsrButton}>
                <Text style={styles.brsrButtonText}>Download PDF file</Text>
                <Image
                  source={require("../../assets/icons/visiticon.png")}
                  style={styles.brsrIcon}
                />
              </View>
              <View style={styles.brsrButton}>
                <Text style={styles.brsrButtonText}>View Report</Text>
                <Image
                  source={require("../../assets/icons/visiticon.png")}
                  style={styles.brsrIcon}
                />
              </View>
            </View>
          </View>

          <View style={styles.rankCard}>
            <Text style={styles.rankTitle}>Your Post Office Rank</Text>
            <Text style={styles.rankNumber}>1234</Text>
          </View>

          <View style={styles.analysisCard}>
            <Text style={styles.analysisTitle}>PREDICTIVE ANALYSIS</Text>
            <View style={styles.analysisIcon}>
              <Image
                source={require("../../assets/icons/visiticon.png")}
                style={styles.analysisImage}
              />
            </View>
          </View>

          <Text style={styles.helplineText}>
            Toll Free Enquiry Helpline:{"\n"}
            98XXX-XXXXX{"\n"}
            9:00 AM - 6:00 PM{"\n"}
            (Except Sundays & Gazetted Holidays){"\n"}
            IVRS facility is available 24*7*365
          </Text>

          <SocialIcons />
        </View>

        <Header />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    maxWidth: 480,
    width: "100%",
    marginHorizontal: "auto",
    paddingBottom: 13,
  },
  header: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    width: 67,
    aspectRatio: 1.68,
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 23,
  },
  headerIcon: {
    width: 24,
    aspectRatio: 1,
  },
  mainContent: {
    padding: 19,
  },
  locationCard: {
    alignItems: "center",
    borderRadius: 4,
    borderWidth: 0.1,
    borderColor: "#EEE",
    padding: 10,
    marginTop: 10,
    maxWidth: 341,
  },
  locationTitle: {
    fontSize: 11,
    color: "#EEE",
    fontWeight: "500",
    marginTop: 5,
  },
  locationSubtitle: {
    fontSize: 8,
    color: "#EEE",
    marginTop: 5,
  },
  locationActions: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
  },
  liveMaps: {
    fontSize: 8,
    color: "#EEE",
  },
  routeButtons: {
    flexDirection: "row",
    gap: 5,
  },
  actionButton: {
    fontSize: 6,
    color: "#EEE",
    borderRadius: 100,
    padding: 4,
    paddingHorizontal: 8,
  },
  markLocation: {
    width: "100%",
    marginTop: 5,
    borderRadius: 4,
    minHeight: 62,
    padding: 5,
    paddingTop: 42,
  },
  markLocationText: {
    fontSize: 6,
    color: "#FFF",
    borderRadius: 2,
    padding: 4,
    paddingHorizontal: 8,
  },
  brsrSection: {
    marginTop: 21,
  },
  brsrTitle: {
    fontSize: 23,
    color: "#0D271A",
    fontWeight: "500",
  },
  brsrActions: {
    flexDirection: "row",
    gap: 10,
    marginTop: 10,
  },
  brsrButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderRadius: 100,
    padding: 4,
    paddingHorizontal: 10,
  },
  brsrButtonText: {
    fontSize: 11,
    color: "#FFF",
  },
  brsrIcon: {
    width: 24,
    aspectRatio: 1,
  },
  rankCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    padding: 12,
    paddingHorizontal: 20,
    marginTop: 21,
    minHeight: 62,
  },
  rankTitle: {
    fontSize: 16,
    color: "#9E0E0E",
    fontWeight: "700",
    width: 202,
  },
  rankNumber: {
    fontSize: 16,
    color: "#EEE",
    fontWeight: "500",
    borderRadius: 4,
    padding: 10,
  },
  analysisCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    padding: 14,
    paddingHorizontal: 20,
    marginTop: 21,
    minHeight: 62,
  },
  analysisTitle: {
    fontSize: 16,
    color: "#EEE",
    fontWeight: "500",
    width: 233,
  },
  analysisIcon: {
    width: 34,
    height: 34,
    borderRadius: 4,
    padding: 5,
    alignItems: "center",
  },
  analysisImage: {
    width: 24,
    aspectRatio: 1,
  },
  helplineText: {
    fontSize: 11,
    color: "#000",
    textAlign: "center",
    fontWeight: "500",
    marginTop: 21,
  },
});
