import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, Button, StatusBar, TextInput, Image, TouchableOpacity, Alert} from 'react-native';
//import firebase from '@react-native-firebase/app'
import SignUpScreen from './SignUpScreen';
import LoginAuth from './LoginAuth';



//import { globalStyles } from '../styles/global';

export default function Home({ navigation }) {
  StatusBar.setHidden(false)
  const pressHandler = () => {
    //navigation.navigate('ReviewDetails');
    navigation.push('SignUpScreen');
    
  }
  const onPress = () => {
    
    navigation.push('LoginAuth');

  }

  return (
    <View style={styles.container}>
        <StatusBar style={styles.statusBar} barStyle={'dark-content'}/>
        <Text> Hello, welcome to Urspace 1.0.2</Text>
      <TouchableOpacity onPress={onPress}>
      <Text style={styles.titleText}>Already a User?</Text>
      </TouchableOpacity>
      <Text></Text>
      <Button title='Sign Up' onPress={pressHandler}/>
      
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
});