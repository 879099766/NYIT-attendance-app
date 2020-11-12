import * as React from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./home_host";
// import DetailsScreen from "./test_DetailScreen";
import QRGenerator from "./QR_generate";
import AddLectureScreen from "./AddLectureScreen";

const Stack = createStackNavigator();

export default function Root() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="QRGenerator"
        component={QRGenerator}
        options={{ title: "Generate QR" }}
      />
      <Stack.Screen
        name="AddLectureScreen"
        component={AddLectureScreen}
        options={{ title: "Add Lecture" }}
      />
    </Stack.Navigator>
  );
}
