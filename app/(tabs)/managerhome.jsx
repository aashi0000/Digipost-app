import React, {useEffect,useState} from "react";
import { View, Image, Text, StyleSheet, ScrollView } from "react-native";
import { StatCard } from "../../pagecomponents/postOffice/components/StatCard";
import { TouchableOpacity, Alert } from "react-native";
import * as Linking from "expo-linking";

import { Header } from "@/pagecomponents/Header";
import { usePostOffice } from "@/context/PostOfficeContext";
import { database } from "@/constants/firebase";
import { ref, query, orderByChild, equalTo, get } from "firebase/database";
import {HeroSection} from "@/pagecomponents/homeScreen/HeroSection";
import PlantSuggestionCard from "../../pagecomponents/postOffice/components/PlantSuggestionCard";

import {NavigationBar} from "@/pagecomponents/upload data types/NavigationBar";



const getrecordforsolutions = async (regionvalue, typevalue) => {
  try {
    console.log(regionvalue);
    console.log(typevalue);
    const dbRef = ref(database, "solutiontable");
    
    // Fetch all records in the solutiontable
    const allRecordsSnapshot = await get(dbRef);
    if (allRecordsSnapshot.exists()) {
      const allRecords = allRecordsSnapshot.val();
      console.log("All records in solutiontable:", allRecords);

      // Filter records by region and type of post office
      const filteredRecords = Object.values(allRecords).filter(record => 
        record.Region === regionvalue && record.Office_Type=== typevalue
      );

      if (filteredRecords.length > 0) {
        console.log("Matching records:", filteredRecords);
        console.log("Suggested Solutions:", filteredRecords[0]);
        return filteredRecords[0];

      } else {
        console.log("No matching records found");
        return null;
      }
    } else {
      console.log("No records found in solutiontable");
      return null;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};


    // const postOfficeRef = query(
    //   ref(database, 'postofficesdata'),
    //   orderByChild('Post_Office_ID'),
    //   equalTo(Number(postOfficeId.trim()))
    // );
    // const snapshot = await get(postOfficeRef);
    
    // const w = query(
    //   ref(database, 'solutiontable'),
    //   orderByChild('aqi_range'),
    //   equalTo(Number(aqiValue))
    // );
    // const snapshot = await get(w);
    // if (snapshot.exists()) {
    //   const data = snapshot.val();
    //   const [key, record] = Object.entries(data)[0];
    //   console.log("Record found:", record);
    //   return record.plants;
    // } else {
    //   console.log("No record found for the specified AQI");
    //   return null;
    // }



const getRecordByAQI = async (aqiValue) => {
  try {
    console.log(aqiValue)
    const dbRef = ref(database, "aqiplanttable");
    const allRecordsSnapshot = await get(dbRef);
    if (allRecordsSnapshot.exists()) {
      console.log("All records in aqiplanttable:", allRecordsSnapshot.val());
    } else {
      console.log("No records found in aqiplanttable");
    }


    // const postOfficeRef = query(
    //   ref(database, 'postofficesdata'),
    //   orderByChild('Post_Office_ID'),
    //   equalTo(Number(postOfficeId.trim()))
    // );
    // const snapshot = await get(postOfficeRef);
    const q = query(dbRef, orderByChild("aqi_range"), equalTo(aqiValue));
    
    const w = query(
      ref(database, 'aqiplanttable'),
      orderByChild('aqi_range'),
      equalTo(Number(aqiValue))
    );
    const snapshot = await get(w);
    if (snapshot.exists()) {
      const data = snapshot.val();
      const [key, record] = Object.entries(data)[0];
      console.log("Record found:", record);
      return record.plants;
    } else {
      console.log("No record found for the specified AQI");
      return null;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};


export default function DashboardScreen() {
  const { postOfficeId, postOfficeData } = usePostOffice();
  const [rankValue, setRankValue] = useState(null);
  const [score, setscore]=useState(null);
  const [AQI, setAQI]=useState(null);
  const [suggestedplants, setsuggestedplants]=useState(null);
  const [region, setregion]=useState(null);
  const [type, settype]=useState(null);
  const [suggestedsolutions, setsuggestedsolutions]=useState(null);


  useEffect(() => {
    if (postOfficeData) {
      console.log('Post Office Data:', JSON.stringify(postOfficeData, null, 2));
      console.log('Post Office ID:', postOfficeId);

      // Extract the dynamic key
      const dynamicKey = Object.keys(postOfficeData)[0];
      const nestedData = postOfficeData[dynamicKey];

      // Access the Rank value
      const rank = nestedData['Rank'];
      console.log('Rank:', rank);
      setRankValue(rank);

      const score = nestedData['Score'];
      setscore(score);


      const region = nestedData['Region'];
      setregion(region);
      console.log(region)

      const type = nestedData['Type_of_Post_Office'];
      settype(type);
      console.log(type)


      const AQI = nestedData['Typical_AQI_Range'];
      setAQI(AQI);


      // const suggestedplants = nestedData['Suggested_Plants_for_Plantation'];
      // setsuggestedplants(suggestedplants);


      console.log(AQI)
      const extractedFields = Object.entries(nestedData).reduce((acc, [key, value]) => {
        acc[key] = value;
        console.log(`${key}: ${value}`);
        return acc;
      }, {});

      // You can now use extractedFields as needed
      console.log('Extracted Fields:', extractedFields);
      console.log((typeof AQI))
    } else {
      console.log('No post office data found');
    }
  }, [postOfficeData]);


  useEffect(() => {
    const fetchSuggestedPlants = async () => {
      console.log(AQI);
      const plants = await getRecordByAQI(AQI);
      if (plants) {
        setsuggestedplants(plants);
      }
    };
  
    if (AQI) {
      fetchSuggestedPlants();
    }
  }, [AQI]);
  

  useEffect(() => {
    const fetchsolutions = async () => {
      console.log(region);
      const solutions = await getrecordforsolutions(region,type);
      if (solutions) {
        setsuggestedsolutions(solutions);
      }
    };
  
    if (region && type) {
      fetchsolutions();
    }
  }, [region,type]);



const makeCall = (phoneNumber) => {
  const url = `tel:${phoneNumber}`; // Proper string interpolation
  Linking.canOpenURL(url)
    .then((supported) => {
      if (!supported) {
        console.log(`Can't handle phone call for URL: ${url}`);
      } else {
        return Linking.openURL(url);
      }
    })
    .catch((err) => console.error('Error making call:', err));
};
  
if (!postOfficeId) {
  return (
    <>
    <Header/>
    <View style={styles.loginPromptContainer}>
      <Text style={styles.loginPromptText}>
        Please log in to view this page for your post office.
      </Text>
    </View>
    </>
  );
}
return (
  <View style={{ flex: 1 }}>
    <ScrollView style={styles.container}>
      <Header />
      <HeroSection />
      <View style={styles.mainContent}>
        <View style={styles.statsContainer}>
          <StatCard
            icon={require("../../assets/images/trophy.png")}
            value={rankValue}
            label={"Rank"}
          />
          <StatCard
            icon={require("../../assets/images/coin.png")}
            value={Math.floor(score)}
            label={"Score"}
          />
          <StatCard
            icon={require("../../assets/images/aqi.png")}
            value={AQI}
            label={"AQI"}
          />
        </View>
        <View style={styles.suggestionsContainer}>
          <PlantSuggestionCard
            pdata={suggestedplants}
            pname={"Suggested Plants"}
          />
          <PlantSuggestionCard
            pdata={suggestedsolutions?.Community_Engagement}
            pname={"Community Engagement"}
          />
          <PlantSuggestionCard
            pdata={suggestedsolutions?.Water_Usage_Solutions}
            pname={"water usage"}
          />
          <PlantSuggestionCard
            pdata={suggestedsolutions?.Energy_Usage_Solutions}
            pname={"energy usage"}
          />
        </View>
      </View>
    </ScrollView>
    <TouchableOpacity
      style={styles.callButton}
      onPress={() => makeCall("+12184135207")}
    >
      <Text style={styles.callButtonText}>Call</Text>
    </TouchableOpacity>
  </View>
);

  
  }
  
  
  const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: 480,
    width: "100%",
  },
  header: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    width: 67,
    height: 40,
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 23,
  },
  mainContent: {
    height: 714,
    alignItems: "center",
  },
  titleSection: {
    width: "100%",
    alignItems: "center",
  },
  titleText: {
    padding: 24,
    paddingTop: 71,
    paddingBottom: 32,
    fontFamily: "Roboto",
    fontSize: 19,
    color: "#250000",
    fontWeight: "700",
  },
  dotIndicators: {
    flexDirection: "row",
    gap: 5,
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#D9D9D9",
  },
  statsContainer: {
    flexDirection: "row",
    gap: 30,
    padding: 20,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: "#F5F5F5",
  },
  suggestionsContainer: {
    width: "100%",
    padding: 10,
    gap: 10

  },
  fabContainer: {
    position: "absolute",
    bottom: 84,
    alignSelf: "center",
  },
  fab: {
    backgroundColor: "#FFFFFF",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  bottomNav: {
    flexDirection: "row",
    padding: 20,
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: "space-between",
  },
  bottomNavIcon: {
    width: 50,
  },
  callButton: {
  position: "absolute",
  bottom: 20, // Distance from the bottom
  right: 20,  // Distance from the right
  backgroundColor: "#9E0E0E",
  padding: 20  ,
  borderRadius: 50,
  elevation: 5, // Adds shadow on Android
  shadowColor: "#000", // Adds shadow on iOS
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.3,
  shadowRadius: 3.84,
},
callButtonText: {
  color: "#fff",
  fontSize: 16,
  fontWeight: "bold",
  textAlign: "center",
},
loginPromptContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#f8f8f8',
},
loginPromptText: {
  fontSize: 18,
  fontWeight: 'bold',
  color: '#333',
  textAlign: 'center',
  padding: 16,
},

  });