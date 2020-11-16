import React, { useState } from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import { QRCode } from "react-native-custom-qr-codes";
import CountDown from "react-native-countdown-component";

export default function GenerateQR_func({navigation}) {

  // state Hook for ID and random string
  const [state, setState] = useState({ 
    ID : "0",
    newString : Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
    }
    );

  // When time hit 0, this funcdtion will be triggered
  const generateQR = () => {
      setState({
      ID : (parseInt(state.ID) + 1).toString(),
      newString : Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), 
       });
       if (state.ID == 2) {
         navigation.navigate('Home');
      }

    }
  
  return (
    <View style={styles.buttonBar_itme}>
      {/* // QRCode container can accesss randome string from the hook */}
      <QRCode style={styles.buttonBsar_itme} content={state.newString}/>
      <CountDown
        style={styles.botton_timer}
        size={30}
        id={state.ID}
        until={2}
        onFinish={generateQR}
        digitStyle={{
          backgroundColor: "#FFF",
          borderWidth: 2,
          borderColor: "#1CC625",
        }}
        digitTxtStyle={{ color: "#1CC625" }}
        timeLabelStyle={{ color: "red", fontWeight: "bold" }}
        separatorStyle={{ color: "#1CC625" }}
        timeToShow={["M", "S"]}
        timeLabels={{ m: null, s: null }}
        showSeparator
      />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonBar_itme: {
    justifyContent: "center",
    fontWeight: "bold",
    alignItems: "center",
    flex: 1,
  },

  botton_timer: {
    top: 5,
  },

  button1: {
    textAlign: "center",
    textAlignVertical: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
    padding: 20,
    fontSize: 20,
    borderRadius: 5,
    width: 300,
    height: 50,
    top: 25,
  },
});