import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, Button, StatusBar, TextInput, Image, TouchableOpacity, Alert} from 'react-native';
//import firebase from '@react-native-firebase/app'
import SignUpScreen from './SignUpScreen';
import LoginAuth from './LoginAuth';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
//import HomeScreen from './HomeScreen';

//firebaseAuth.signOut();

var firebaseConfig = {
    //IGNORE  //
    // KEY IS HIDDEN FOR SECURITY //
  };
  // Initialize Firebase
  if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  }
  
  var email = "davmartine12@gmail.com";
  var password = "testingPassword"
  function createUser(){
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
}
var user = firebase.auth().currentUser;

if (user) {
  console.log("signedin ig eus on home");
  console.log(firebase.auth().currentUser.email);
  
} else {
  console.log("logged out home???");
}
  //createUser();
//import { globalStyles } from '../styles/global';

export default function Home({ navigation }) {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log("signed in! h");
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      //goToHome();
      // ...
    } else {
      console.log("not logged in h");
      navigation.replace("LoginScreen");
    }
  });


  
  

  StatusBar.setHidden(false)
  const pressHandler = () => {
    //navigation.navigate('ReviewDetails');
    navigation.push('SignUpScreen');
    
  }
  const onPress = () => {
    
    navigation.push('LoginAuth');

  }
  const goToHome = () => {
    navigation.replace('HomeScreen');
  }
  

  return (
    <View style={styles.container}>
        <StatusBar style={styles.statusBar} barStyle={'dark-content'}/>
        <Text> Hello, welcome to Urspace 1.0.2</Text>
        <TouchableOpacity
        //onPress={firebaseAuth.signOut()}
        >
    <Text style={styles.button}>Sign out</Text>
  </TouchableOpacity>
      
    </View>
    
    
  );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#eaeaea"
    },
    titleText: {
        marginTop: 40,
        paddingVertical: 8,
        borderWidth: 4,
        borderColor: "#20232a",
        borderRadius: 6,
        backgroundColor: "#FFA500",
        color: "#20232a",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
  },
    statusBar: {
        width: '100%',
        backgroundColor: '#fff',
    

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
});
