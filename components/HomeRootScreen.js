import * as React from "react";
import { Button, View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import firebase from "../db/firebaseDB";

import HostScreen from "./HomeHostScreen";
import StudScreen from "./HomeStudScreen";
import QRGenerator from "./GenerateQR_func";
import AddLectureScreen from "./AddLectureScreen";

const Stack = createStackNavigator();

export default function root_screen(props) {
  console.log(props.email);
  return (
    <Stack.Navigator
      screenOptions={{tabBarVisible: false,}}
    >
      <Stack.Screen
        name="HostScreen"
        component={HostScreen}
        options={{ title: "Home Screen" }}
      />
      <Stack.Screen
        name="QRGenerator"
        component={QRGenerator}
        options={{ 
          title: "Generate QR",
          tabBarVisible: false,
        }}
      />
      <Stack.Screen
        name="AddLectureScreen"
        component={AddLectureScreen}
        options={{
          title: "Add Lecture",
          tabBarVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}
