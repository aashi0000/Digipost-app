// import * as React from "react";
// import { View, StyleSheet, ScrollView, Text, TouchableOpacity } from "react-native";
// import { Ionicons } from "@expo/vector-icons"; // Use Ionicons for the back icon

// import { Header } from "@/pagecomponents/Header";
// import { UploadSection } from "@/pagecomponents/upload data types/UploadSection";
// import { NavigationBar } from "@/pagecomponents/upload data types/NavigationBar";
// import { ActionGrid } from "@/pagecomponents/upload data types/ActionGrid";

// export default function DashboardLayout({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <ScrollView contentContainerStyle={styles.scrollContent}>
//         <Header />
//         <View style={styles.titleContainer}>
//           <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backIcon}>
//             <Ionicons name="arrow-back" size={24} color="#0D271A" />
//           </TouchableOpacity>
//           <Text style={styles.uploadTitle}>Upload Data</Text>
//         </View>
//         <ActionGrid />
//       </ScrollView>
//       <NavigationBar />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     display: "flex",
//     marginLeft: "auto",
//     marginRight: "auto",
//     maxWidth: 480,
//     width: "100%",
//     flexDirection: "column",
//     alignItems: "stretch",
//     flex: 1, // Allow container to take full height
//   },
//   scrollContent: {
//     flexGrow: 1, // Ensure content fills ScrollView even with limited items
//     alignItems: "stretch",
//     paddingHorizontal: 16, // Add padding for a consistent layout
//   },
//   titleContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginTop: 20, // Space above the heading
//     marginBottom: 20, // Space below the heading
//   },
//   backIcon: {
//     marginRight: 10, // Space between the icon and the text
//   },
//   uploadTitle: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "#0D271A", // Match your app's color scheme
//   },
// });
