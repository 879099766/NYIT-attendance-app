import * as React from "react";
import { Button, View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import PanelScreen from "./HomeHostScreen";
import QRGenerator from "./GenerateQR_func";
import AddLectureScreen from "./AddLectureScreen";

const Stack = createStackNavigator();

export default function root_screen(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeRootScreen" component={PanelScreen} />
      <Stack.Screen
        name="QRGenerator"
        component={QRGenerator}
        options={{ title: "Generate QR" }}
      />
      <Stack.Screen
        name="AddLectureScreen"
        component={AddLectureScreen}
        options={{
          title: "Add Lecture",
        }}
      />
    </Stack.Navigator>
  );
}
