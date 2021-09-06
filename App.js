
import React from 'react';
//import {Text,View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MyContacts from './screens/MyContacts';
import Profile from './screens/Profile';

//import CreateContact from './screens/CreateContact';

const Stack=createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='MyContacts'>
        <Stack.Screen name='MyContact' component={MyContacts}/>
        {/* <Stack.Screen name='CreateContact' component={CreateContact}/> */}
        <Stack.Screen name='Profile' component={Profile}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}