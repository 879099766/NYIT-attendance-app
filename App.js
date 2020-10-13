import * as React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import * as Google from 'expo-google-app-auth';
import {Ionicons} from '@expo/vector-icons';
// import HomeScreen from './components/HomeScreen';
// import SearchScreen from './components/SearchScreen';
// import AccScreen from './components/AccScreen';

import AddUserScreen from "./components/AddUserScreen";
import UserScreen from "./components/UserScreen";
import UserDetailScreen from "./components/UserDetailScreen";


const Tab = createBottomTabNavigator();
// disable yellow message
console.disableYellowBox = true;

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#621FF7",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      
      <Stack.Screen
        name="AddUserScreen"
        component={AddUserScreen}
        options={{ title: "Add User" }}
      />

      <Stack.Screen
        name="UserScreen"
        component={UserScreen}
        options={{ title: "Users List" }}
      />
      
      <Stack.Screen
        name="UserDetailScreen"
        component={UserDetailScreen}
        options={{ title: "User Detail" }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}