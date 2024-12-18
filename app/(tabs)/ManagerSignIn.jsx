import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { auth, database } from '@/constants/firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { ref, set,orderByChild, query, equalTo, get } from "firebase/database";
import { useNavigation } from '@react-navigation/native';
import { usePostOffice } from '@/context/PostOfficeContext';
 // Assuming you're using React Navigation)

export function ManagerSignIn() {
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
});
