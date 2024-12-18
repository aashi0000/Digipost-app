// import * as React from "react";
// import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
// import { RoleCard } from "../../pagecomponents/roles/RoleCard";
// import { useNavigation } from "@react-navigation/native";
// import { Button } from "react-native-web";


// const roles = [
//   {
//     title: "Employee",
//     description: "Employee role description here.",
//     imageUrl:
//       "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/c23117089612b9c8fbd7733cfc323791b2d1e30fb56ba27a72b17743eb204bd1?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
//     screen: "EmployeeScreen", // Screen to navigate to
//   },
//   {
//     title: "Manager",
//     description: "Manager role description here.",
//     imageUrl:
//       "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/dea0914420463d927c61d07d737ae358d5db914e79f30422089b45c6f067523c?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
//     screen: "ManagerSignIn", // Screen to navigate to
//   },
//   {
//     title: "Citizen",
//     description: "Citizen role description here.",
//     imageUrl:
//       "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/e5057d2a39205abdac6634e3067691b6976c2acd7515b0e29a85caf9e9a552d9?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
//     screen: "CitizenAuth", // Screen to navigate to
//   },
//   {
//     title: "Go to Website",
//     description: "Website role description here.",
//     imageUrl:
//       "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/510c0e4001711f8650334f6982921f6ae26616049fda30cc8803dde026f0af73?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
//     screen: "WebsiteScreen", // Screen to navigate to
//   },
// ];

// //export const RoleSelector = () => {
//  export default function RoleSelector() {
  
//   const navigation = useNavigation();

//   const handleRoleClick = (screen) => {
//     navigation.navigate(screen);
//   };
//   return (
//     <View style={styles.container}>
//       <View style={styles.contentWrapper}>
//         <View style={styles.mainContent}>
//           <View style={styles.headerText}>
//             <Text>Your Role</Text>
//           </View>
          
//           <View style={styles.rolesGrid}>
          
//             {roles.map((role, index) => (
//               <RoleCard
//                 key={index}
//                 title={role.title}
//                 description={role.description}
//                 imageUrl={role.imageUrl}
//                 onPress={() => handleRoleClick(role.screen)}
//               />
//             ))}
//           </View>
//           {/* <View style={styles.navigationContainer}>
//               <TouchableOpacity style={styles.backButton}>
//                   <Text style={styles.backButtonText}>Back</Text>
//               </TouchableOpacity>

//           </View> */}
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     display: "flex",
//     marginLeft: "auto",
//     marginRight: "auto",
//     maxWidth: 480,
//     width: "100%",
//     paddingTop: 204,
//     paddingBottom: 204,
//     flexDirection: "column",
//     overflow: "hidden",
//     alignItems: "stretch",
//     fontFamily: "Roboto, sans-serif",
//     justifyContent: "center",
//   },
//   contentWrapper: {
//     display: "flex",
//     width: "100%",
//     paddingLeft: 10,
//     paddingRight: 10,
//     paddingTop: 10,
//     paddingBottom: 10,
//     flexDirection: "column",
//     overflow: "hidden",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   mainContent: {
//     display: "flex",
//     width: "100%",
//     maxWidth: 352,
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   headerText: {
//     color: "#FF0000", // Red color for the text
//     textAlign: "center",
//     fontSize: 33,
//     fontWeight: "700",
//   },
//   rolesGrid: {
//     display: "flex",
//     marginTop: 14,
//     width: "100%",
//     flexDirection: "row",
//     flexWrap: "wrap",
//     gap: 10,
//     justifyContent: "space-between", // Space between cards
//   },
//   roleCard: {
//     width: "48%", // Each card takes approximately half the row
//   },
//   navigationContainer: {
//     display: "flex",
//     marginTop: 14,
//     width: 310,
//     maxWidth: "100%",
//     flexDirection: "column",
//     alignItems: "stretch",
//     fontSize: 16,
//     color: "#EEE",
//     fontWeight: "500",
//   },
//   backButton: {
//     alignSelf: "center",
//     backgroundColor: "#9E0E0E", // Red background
//     borderRadius: 40, // Rounded corners
//     height: 40,
//     width:410,
//     // Padding of 20px
//     width: "100%",
//     alignItems: "center", // Center the text inside the button
//     justifyContent: "center"
//   },
//   backButtonText: {
//     color: "#FFFFFF", // White text color
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });






import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { auth, database } from '@/constants/firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { ref, set,orderByChild, query, equalTo, get } from "firebase/database";
import { useNavigation } from '@react-navigation/native';
import { usePostOffice } from '@/context/PostOfficeContext';
import { Header } from "@/pagecomponents/Header";
 // Assuming you're using React Navigation)

export default function ManagerSignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [postOfficeId, setPostOfficeId] = useState('');
  const { setPostOfficeId: setGlobalPostOfficeId, setPostOfficeData } = usePostOffice();
  const navigation = useNavigation();
  const handleSignIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      const postOfficeRef = query(
        ref(database, 'postofficesdata'),
        orderByChild('Post_Office_ID'),
        equalTo(Number(postOfficeId.trim()))
      );
      const snapshot = await get(postOfficeRef);
  
    //   console.log('Complete postofficesdata record:', JSON.stringify(snapshot.val(), null, 2));
  
      if (snapshot.exists()) {
        const postOfficeData = snapshot.val();
        console.log('postOfficeData:', JSON.stringify(postOfficeData, null, 2));

        const userRef = ref(database, `users/${user.uid}`);
        await set(userRef, {
          email,
          userType: "manager",
          postOfficeId,
        });
        setGlobalPostOfficeId(postOfficeId);
        setPostOfficeData(postOfficeData);
        alert('Manager signed in successfully!');
        navigation.navigate('managerhome');
      } else {
        console.log('Post Office ID not found, but here is the full record fetched:');
        const allDataSnapshot = await get(ref(database, 'postofficesdata'));
        console.log('All postofficesdata:', JSON.stringify(allDataSnapshot.val(), null, 2));
        alert('Post Office ID not found, please verify.');
      }
    } catch (error) {
      console.error('Error during sign in:', error.message);
      alert(error.message);
    }
  };
  
  
  return (
    <>
    <Header/>
    <View style={styles.container}>
      
      <Text style={styles.title}>Manager Sign In</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Post Office ID"
        value={postOfficeId}
        onChangeText={setPostOfficeId}
      />
      <Button title="Sign In" onPress={handleSignIn} />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  tableContainer: {
  marginTop: 20,
  borderWidth: 1,
  borderColor: "#ddd",
  borderRadius: 8,
  overflow: "hidden",
},
tableRow: {
  flexDirection: "row",
  borderBottomWidth: 1,
  borderBottomColor: "#ddd",
  paddingVertical: 10,
  paddingHorizontal: 8,
  backgroundColor: "#f9f9f9",
},
tableCell: {
  flex: 1,
  fontSize: 16,
  paddingHorizontal: 8,
  textAlign: "center",
},
});
