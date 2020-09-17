import * as React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import * as Google from 'expo-google-app-auth';
import {Ionicons} from '@expo/vector-icons';
import HomeScreen from './components/HomeScreen';
import SearchScreen from './components/SearchScreen';
import AccScreen from './components/AccScreen';

const Tab = createBottomTabNavigator();

export default function App() {

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     signedIn: false,
  //     name: "",
  //     photoUrl: ""
  //   }
  // }

  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );

}