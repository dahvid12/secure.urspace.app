// SignUp.js
import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, Button, StatusBar, TextInput, Image, TouchableOpacity, Alert} from 'react-native';
//import firebase from '@react-native-firebase/app'
//import SignUpScreen from './SignUpScreen';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { Value } from 'react-native-reanimated';


var firebaseConfig = {
  apiKey: "AIzaSyC9iblodFlIVkj4mblQeFU6A7ponwCqj8o",
  authDomain: "urspace-app.firebaseapp.com",
  databaseURL: "https://urspace-app.firebaseio.com",
  projectId: "urspace-app",
  storageBucket: "urspace-app.appspot.com",
  messagingSenderId: "903849438215",
  appId: "1:903849438215:web:c6b8bb4038cb05b17dcea2",
  measurementId: "G-Y8XND4WYXB"
};
// Initialize Firebase
if (!firebase.apps.length) {
firebase.initializeApp(firebaseConfig);
}

//var email = "davmartine12@gmail.com";
//var password = "testingPassword"
// uses existing user!!!             //          //    //     //



//setEmail();
// DB check    //


export default function SignUpScreen({navigation}){

  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");

  function createUser(){
    if(email.length > 3){
      if(password.length > 5){
        function createUser(){
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                Alert.alert("Login Failed", errorMessage);
            });
            }
      }
      else{
        Alert.alert("Password too short");
      }
    }else{
      Alert.alert("Invalid email");
    }
  }


  return(
    
<View style={styles.container}>
  <Text>Sign Up</Text>
  <Text> </Text>
  <Text >Hi, what is your email?</Text>
  
  <TextInput style={styles.textInput}
    autoCapitalize="none"
    placeholder={"e.g. janedoe@gmail.com"} 
    onChangeText={email => setEmail(email)}/>
  <Text> </Text>
  <Text>Password </Text>
  <TextInput style={styles.textInput} 
    secureTextEntry
    autoCapitalize="none"
    placeholder={"use alphanumeric characters only"} 
    onChangeText={password => setPassword(password)}/>
  <Text>TESTING FEATURE ONLY - email: {email} , pw: {password}</Text>
  <Text> </Text>
  <TouchableOpacity
   onPress={createUser}>
    <Text style={styles.button}>Join</Text>
  </TouchableOpacity>
  
</View>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    marginTop: 100,
    alignItems: 'center',
    fontSize: 16,
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 2,
    marginTop: 10,
    fontSize: 20,

  },
  button: {
    height: 40,
    width: 100,
    marginTop: 15,
    borderColor: "#20232a",
    backgroundColor: "#FFA500",
    color: "#20232a",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    justifyContent:"center",
    paddingTop: 6,
    borderWidth:.1,

  },
})


