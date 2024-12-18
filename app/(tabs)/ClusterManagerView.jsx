import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet,ScrollView } from 'react-native';
//import firebase from '@react-native-firebase/database';
import { database } from "@/constants/firebase";
import { ref, get } from "firebase/database";
import {usePostOffice} from '@/context/PostOfficeContext.js';
import { Header } from "@/pagecomponents/Header";

export default function PostOfficeDataComponent () {
    const {postOfficeId,postOfficeData}=usePostOffice();
    const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (!postOfficeId) {
        console.log('No postOfficeId provided from context.');
        return;
      }

      try {
        console.log(`Fetching data for postOfficeId: ${postOfficeId}`);

        const headTableRef = ref(database, "head_table");
        const postOfficesDataRef = ref(database, "postofficesdata");
       
        const headSnapshot = await get(headTableRef)
        const headData = headSnapshot.val() || {};
        console.log('Head Table Data:', headData);

        const matchingEntries = Object.values(headData).filter(entry => entry.h_id === Number(postOfficeId.trim()));

        if (matchingEntries.length === 0) {
          console.log('No matching entries found in head_table.');
          setData([]);
          return;
        }

        console.log('Matching Entries:', matchingEntries);

        // Extract all matching p_ids
        const pIds = matchingEntries.map(entry => entry.p_id);

        // Fetch postofficesdata
        const postOfficesSnapshot = await get(postOfficesDataRef);
        //const postOfficesSnapshot = await postOfficesDataRef.once('value');
        const postOfficesData = postOfficesSnapshot.val() || {};

        console.log('Post Offices Data:', postOfficesData);

        const matchedData = Object.values(postOfficesData)
        .filter(postOffice => pIds.includes(postOffice.Post_Office_ID)) // Match p_id with Post_Office_ID
        .map(postOffice => ({
        ...postOffice,
        p_id: postOffice.Post_Office_ID, // Add p_id for clarity in results
        }))
        .filter(item => item.Score !== undefined); // Ensure Score exists for sorting


        // Sort by Score in descending order
        matchedData.sort((a, b) => b.Score - a.Score);

        console.log('Matched Data:', matchedData);
        setData(matchedData);
        console.log("done with this");
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [postOfficeId]);
  
    const renderItem = ({ item, index }) => (
      <View style={styles.box}>
        {/* Cluster Ranking */}
        <Text style={styles.boxHeading}>Cluster Ranking</Text>
        <Text style={styles.clusterValue}>{index + 1}</Text>
    
        {/* Post Office ID */}
        <Text style={styles.boxHeading}>Post Office ID</Text>
        <Text style={styles.boxValue}>{item.p_id}</Text>
    
        {/* Post Office Type */}
        <Text style={styles.boxHeading}>Post Office Type</Text>
        <Text style={styles.boxValue}>{item.Type_of_Post_Office}</Text>
      </View>
    );
    
    if (!postOfficeId) {
      return (
        <>
        <Header/>
        <View style={styles.loginPromptContainer}>
          <Text style={styles.loginPromptText}>
            Please log in to view this page for your cluster.
          </Text>
        </View>
        </>
      );
    }
  return (
    <ScrollView >
      <Header/>
    <View style={styles.container}>
      <Text style={styles.header}>View your Cluster Data (for Post Office ID: {postOfficeId || 'N/A'})</Text>
      
      {data.length > 0 ? (
        <FlatList
          data={data}
          keyExtractor={(item) => item.p_id.toString()}
          renderItem={renderItem}
        />
      ) : (
        <Text style={styles.noData}>No data available or matching records found.</Text>
      )}
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    backgroundColor: '#ffffff',
    marginBottom: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  cell: {
    flex: 1,
    fontSize: 14,
    textAlign: 'center',
  },
  noData: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginTop: 20,
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#f9f9f9',
  },
  tableCell: {
    flex: 1,
    textAlign: 'center',
    fontSize: 14,
    paddingHorizontal: 8,
  },
  rankColumn: {
    flex: 0.5, // Smaller width for the ranking column
    fontWeight: 'bold',
  },
  idColumn: {
    flex: 1.5, // Slightly larger width for Post Office ID
  },
  typeColumn: {
    flex: 2, // Larger width for Post Office Type
  },
  scoreColumn: {
    flex: 1, // Default size for Score
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
  box: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    borderWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center', // Center the content in the box
  },
  boxHeading: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 4,
    textAlign: 'center',
  },
  boxValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 12,
    textAlign: 'center',
  },
  clusterValue: {
    fontSize: 35, // Larger font size for Cluster Ranking
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 12,
    textAlign: 'center',
  },
  
  
});


