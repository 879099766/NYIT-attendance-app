import * as React from "react";
import { Button, View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./components/home_host";
import SearchScreen from "./components/SearchScreen";
import AccScreen from "./components/AccScreen";

const Stack = createStackNavigator();

export default function root_screen(props) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home";
            return <FeatherIcon name="home" size={size} color={color} />;
          } else if (route.name === "Account") {
            iconName = focused ? "account-outline" : "account-outline";
            return (
              <MaterialCommunityIconsIcon
                name={iconName}
                size={size}
                color={color}
              />
            );
          } else if (route.name === "Search") {
            iconName = focused ? "ios-search" : "ios-search";
            return <Ionicons name={iconName} size={size} color={color} />;
          }
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Account">
        {() => (
          <AccScreen emailer={state.email} fname={this.state.first_name} />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
