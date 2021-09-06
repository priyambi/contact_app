import React, { Component } from 'react'
import AsyncStorage from '@react-native-community/async-storage';
import {  Text, View, TextInput, StyleSheet, ScrollView } from 'react-native'

class AsyncStorageExample extends Component {
   state = {
      'name': '',
      'mobile_num': '',
      'dob': '',
   }
   componentDidMount = () => AsyncStorage.getItem('name').then((value) => this.setState({ 'name': value }))
   componentDidMount = () => AsyncStorage.getItem('mobile_num').then((value) => this.setState({ 'mobile_num': value }))
   componentDidMount = () => AsyncStorage.getItem('dob').then((value) => this.setState({ 'dob': value }))

   setName = (value) => {
      AsyncStorage.setItem('name', value);
      this.setState({ 'name': value });
   }
   setNum = (value) => {
    AsyncStorage.setItem('mobile_num', value);
    this.setState({ 'mobile_num': value });
 }
 setBirth = (value) => {
  AsyncStorage.setItem('dob', value);
  this.setState({ 'dob': value });
}
   render() {
      return (
         <View style = {styles.container}>
           <ScrollView>
           <Text style={styles.header}>USER PROFILE</Text>
           <Text style={styles.data}>Enter Your Name:</Text>
            <TextInput style = {styles.textInput} autoCapitalize = 'none'
            onChangeText = {this.setName}/>
            <Text style={styles.output}>
               {this.state.name}
            </Text>
            <Text style={styles.data}> Enter Your Mobile Number:</Text>
            <TextInput style = {styles.textInput} autoCapitalize = 'none'
            onChangeText = {this.setNum}/>
            <Text style={styles.output}>
               {this.state.mobile_num}
            </Text>
            <Text style={styles.data}>Enter Your Date of Birth:</Text>
            <TextInput style = {styles.textInput} autoCapitalize = 'none'
            onChangeText = {this.setBirth}/>
            <Text style={styles.output}>
               {this.state.dob}
            </Text>
            </ScrollView>
         </View>
      )
   }
}
export default AsyncStorageExample

const styles = StyleSheet.create ({
   container: {
      flex: 1,
      alignItems: 'center',
      marginTop: 50
   },
   header:{
     fontSize:50,
     paddingBottom:15,
     alignSelf:"center",
   },
   textInput: {
      margin: 5,
      height: 50,
      borderWidth: 1,
      width:150,
      backgroundColor: 'lightyellow',
      marginTop:15,
      alignSelf:"center",
      
   },
   data:{
     fontSize:20,
     alignSelf:"center",
   },
   output:{
     alignSelf:"center",
   },
})