import * as React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import * as Google from 'expo-google-app-auth';
import {Ionicons} from '@expo/vector-icons';
import HomeScreen from './components/HomeScreen';
import SearchScreen from './components/SearchScreen';
import AccScreen from './components/AccScreen';
import CameraAccess from './components/CameraAccess.js';
import GoogleOauth from './components/GoogleOauth';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GoogleOauth">
      <Stack.Screen name="GoogleOauth" component={GoogleOauth} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CameraAccess" component={CameraAccess} />
      </Stack.Navigator>

    </NavigationContainer>
  );

  function Home(){
    return(
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'ios-home' : 'ios-home';
            } else if (route.name === 'Account') {
              iconName = focused ? 'ios-person' : 'ios-person';
            } else if (route.name === 'Search'){
              iconName = focused ? 'ios-search' : 'ios-search';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}

        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'gray',
        }}
      >
      
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Account" component={AccScreen} />
      </Tab.Navigator>

    )
  }

}