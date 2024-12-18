// import * as React from "react";
// import { View, Image, Text, StyleSheet } from "react-native";

// export function ActionGrid() {
  const actionItems = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/66eeba49fd63fd24dfec626cd507ca50ce4c8996d916a68b53c7479b6d89770e?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
      title: "Water Bill",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/06b153cb6bc38a85500ce4f1a931612c46958f3ace98352c744ca33d15f8900c?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
      title: "Electricity bill",
    },
  ];

//   return (
//     <View style={styles.gridContainer}>
//       {actionItems.map((item, index) => (
//         <View key={index} style={styles.gridItem}>
//           <View style={styles.itemContent}>
//             <View style={styles.iconWrapper}>
//               <Image
//                 resizeMode="contain"
//                 source={{ uri: item.icon }}
//                 style={styles.actionIcon}
//               />
//             </View>
//             <View style={styles.titleWrapper}>
//               <Text style={styles.titleText}>{item.title}</Text>
//             </View>
//           </View>
//         </View>
//       ))}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   gridContainer: {
//     alignSelf: "center",
//     display: "flex",
//     marginTop: 10,
//     width: 346,
//     maxWidth: "100%",
//     gap: 10,
//     justifyContent: "center",
//     flexWrap: "wrap",
//     flexDirection: "row",
//   },
//   gridItem: {
//     borderRadius: 10,
//     display: "flex",
//     padding: 20,
//     flexDirection: "column",
//     alignItems: "stretch",
//     justifyContent: "center",
//     width: 165,
//   },
//   itemContent: {
//     display: "flex",
//     width: "100%",
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   iconWrapper: {
//     display: "flex",
//     width: 50,
//     alignItems: "center",
//   },
//   actionIcon: {
//     borderRadius: 50,
//     alignSelf: "stretch",
//     position: "relative",
//     display: "flex",
//     marginVertical: "auto",
//     width: 50,
//     aspectRatio: 1,
//   },
//   titleWrapper: {
//     display: "flex",
//     marginTop: 10,
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   titleText: {
//     fontFamily: "Roboto, sans-serif",
//     fontSize: 13,
//     color: "#353535",
//     fontWeight: "500",
//   },
// });



// import * as React from "react";
// import { Platform } from "react-native";
// import { View, Image, Text, StyleSheet } from "react-native";
// import * as ImagePicker from "expo-image-picker";
// import * as FileSystem from "expo-file-system";
// import axios from "axios";
// import { Button,  Alert } from "react-native";

// export function ActionGrid() {
//   const handleFileUpload = async (action) => {
//     try {
//       // Request permissions (only relevant for mobile, ignored on web)
//       const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
//       if (permissionResult.status !== "granted") {
//         Alert.alert("Permission to access media library is required!");
//         return;
//       }

//       // Launch image picker
//       const result = await ImagePicker.launchImageLibraryAsync({
//         allowsEditing: true,
//         quality: 1,
//       });

//       if (!result.canceled) {
//         const fileUri = result.assets[0].uri;

//         // Check if we're running on web
//         if (Platform.OS === "web") {
//           const response = await fetch(fileUri);
//           const blob = await response.blob();

//           // Convert Blob to Base64
//           const reader = new FileReader();
//           reader.onloadend = async () => {
//             const base64 = reader.result.split(",")[1]; // Extract the Base64 string
//             await uploadToBackend(action, base64, "bill.png");
//           };
//           reader.readAsDataURL(blob); // Read the Blob as Base64
//         } else {
//           // Mobile: Use the Base64 file system approach
//           console.log("This function is running on a mobile environment.");
//         }
//       } else {
//         console.log("User canceled file picker");
//       }
//     } catch (error) {
//       console.error("File upload error:", error);
//     }
//   };

//   const uploadToBackend = async (action, base64, filename) => {
//     try {
//       const apiEndpoint =
//         action === "water"
//           ? "http://localhost:5000/parse-water-bill"
//           : "http://localhost:5000/parse-electricity-bill";

//       const response = await axios.post(apiEndpoint, {
//         file: base64,
//         filename: filename,
//         filetype: "image/png",
//       });
      
//       console.log("Parsed Data:", response.data);
//     } catch (error) {
//       console.error("Error uploading to backend:", error);
//     }
//   };

//   return (
//     <View>
//       <Button title="Upload Water Bill" onPress={() => handleFileUpload("water")} />
//       <Button
//         title="Upload Electricity Bill"
//         onPress={() => handleFileUpload("electricity")}
//       />
      
//     </View>
//   );
// }


// const styles = StyleSheet.create({
//   gridContainer: {
//     alignSelf: "center",
//     display: "flex",
//     marginTop: 10,
//     width: 346,
//     maxWidth: "100%",
//     gap: 10,
//     justifyContent: "center",
//     flexWrap: "wrap",
//     flexDirection: "row",
//   },
//   gridItem: {
//     borderRadius: 10,
//     display: "flex",
//     padding: 20,
//     flexDirection: "column",
//     alignItems: "stretch",
//     justifyContent: "center",
//     width: 165,
//   },
//   itemContent: {
//     display: "flex",
//     width: "100%",
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   iconWrapper: {
//     display: "flex",
//     width: 50,
//     alignItems: "center",
//   },
//   actionIcon: {
//     borderRadius: 50,
//     alignSelf: "stretch",
//     position: "relative",
//     display: "flex",
//     marginVertical: "auto",
//     width: 50,
//     aspectRatio: 1,
//   },
//   titleWrapper: {
//     display: "flex",
//     marginTop: 10,
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   titleText: {
//     fontFamily: "Roboto, sans-serif",
//     fontSize: 13,
//     color: "#353535",
//     fontWeight: "500",
//   },
// });


import * as React from "react";
import { Platform, View, Image,Button, Text, Alert, StyleSheet, ScrollView } from "react-native";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";

export function ActionGrid() {
  const [uploadResponse, setUploadResponse] = React.useState("");
  const [tableData, setTableData] = React.useState([]);

  const handleFileUpload = async (action) => {
    try {
      // Request permissions (only relevant for mobile, ignored on web)
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (permissionResult.status !== "granted") {
        Alert.alert("Permission to access media library is required!");
        return;
      }

      // Launch image picker
      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        quality: 1,
      });

      if (!result.canceled) {
        const fileUri = result.assets[0].uri;

        // Check if we're running on web
        if (Platform.OS === "web") {
          const response = await fetch(fileUri);
          const blob = await response.blob();

          // Convert Blob to Base64
          const reader = new FileReader();
          reader.onloadend = async () => {
            const base64 = reader.result.split(",")[1]; // Extract the Base64 string
            await uploadToBackend(action, base64, "bill.png");
          };
          reader.readAsDataURL(blob); // Read the Blob as Base64
        } else {
          // Mobile: Use the Base64 file system approach
          console.log("This function is running on a mobile environment.");
        }
      } else {
        console.log("User canceled file picker");
      }
    } catch (error) {
      console.error("File upload error:", error);
    }
  };

  const uploadToBackend = async (action, base64, filename) => {
    try {
      const apiEndpoint =
        action === "water"
          ? "http://localhost:5000/parse-water-bill"
          : "http://localhost:5000/parse-electricity-bill";

      const response = await axios.post(apiEndpoint, {
        file: base64,
        filename: filename,
        filetype: "image/png",
      });

      setUploadResponse(`Data uploaded: ${JSON.stringify(response.data)}`);
      setTableData(Object.entries(response.data)); // Assumes data is an object
      console.log("Parsed Data:", response.data);
    } catch (error) {
      console.error("Error uploading to backend:", error);
      setUploadResponse(`Error uploading: ${error.message}`);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Upload Water Bill" onPress={() => handleFileUpload("water")} />
        <Text></Text>
      <Button
        title="Upload Electricity Bill"
        onPress={() => handleFileUpload("electricity")}
      />
      {/* <View style={styles.gridContainer}>
        {actionItems.map((item, index) => (
        <View key={index} style={styles.gridItem}>
          <View style={styles.itemContent}>
            <View style={styles.iconWrapper}>
              <Image
                resizeMode="contain"
                source={{ uri: item.icon }}
                style={styles.actionIcon}
              />
            </View>
            <View style={styles.titleWrapper}>
              <Text style={styles.titleText}>{item.title}</Text>
            </View>
          </View>
        </View>
      ))}
    </View> */}
      {/* {uploadResponse ? <Text>{uploadResponse}</Text> : null} */}
      {tableData.length > 0 && (
        <ScrollView style={styles.tableContainer}>
          {tableData.map(([key, value], index) => (
            <View key={index} style={styles.tableRow}>
              <Text style={styles.tableCellKey}>{key}</Text>
              <Text style={styles.tableCellValue}>{value.toString()}</Text>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  tableContainer: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#cccccc",
    width: '90%',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  tableCellKey: {
    padding: 10,
    fontWeight: 'bold',
    flex: 1,
  },
  tableCellValue: {
    padding: 10,
    flex: 2,
  },
  gridContainer: {
        alignSelf: "center",
        display: "flex",
        marginTop: 10,
        width: 346,
        maxWidth: "100%",
        gap: 10,
        justifyContent: "center",
        flexWrap: "wrap",
        flexDirection: "row",
      },
      gridItem: {
        borderRadius: 10,
        display: "flex",
        padding: 20,
        flexDirection: "column",
        alignItems: "stretch",
        justifyContent: "center",
        width: 165,
      },
      itemContent: {
        display: "flex",
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
      },
      iconWrapper: {
        display: "flex",
        width: 50,
        alignItems: "center",
      },
      actionIcon: {
        borderRadius: 50,
        alignSelf: "stretch",
        position: "relative",
        display: "flex",
        marginVertical: "auto",
        width: 50,
        aspectRatio: 1,
      },
      titleWrapper: {
        display: "flex",
        marginTop: 10,
        flexDirection: "column",
        alignItems: "center",
      },
      titleText: {
        fontFamily: "Roboto, sans-serif",
        fontSize: 13,
        color: "#353535",
        fontWeight: "500",
      },
});
