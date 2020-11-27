import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Network from 'expo-network';
import NetInfo from "@react-native-community/netinfo";
import * as Device from 'expo-device';

export default function App() {
  
  NetInfo.fetch().then(state => {
    console.log("Connection type", state.type);
    console.log("Is connected?", state.isConnected);
    if (state.type == "wifi"){

      console.log("Device is connected to WiFi!");
      let OS = Device.osName;
      console.log("OS of device: ", OS);
      let brand = Device.brand;
      let model_name = Device.modelName;
      console.log("Device brand: ", brand);
      console.log("Model name: ", model_name);
      let i_p = state.details.ipAddress;
      console.log("IP Address:", i_p);
      let s_sid= state.details.ssid;
      console.log("SSID:", s_sid);
      let mac = Network.getMacAddressAsync({});
      console.log("MAC: ", mac);
    }
    else
      console.log("Device is not connected to WiFi.");
  });

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
