import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import QR_generate from "../functions/QR_generate";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.group}>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button}>
            <Icon name="qrcode-scan" style={styles.icon}></Icon>
            <Text style={styles.scanRqCode}>Scan QR Code</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2}>
            <Icon name="qrcode-edit" style={styles.icon}></Icon>
            <Text style={styles.generateRqCode}>Generate QR Code</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button3} onPress={QR_generate}>
          <Icon name="view-list" style={styles.icon}></Icon>
          <Text style={styles.scanRqCode}>View List</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    // flex: 1,
    width: Dimensions.get('window').width,
    // backgroundColor: 'red',
    // alignContent: 'flex-start',
    // justifyContent: 'space-evenly',
    // alignItems: 'center',
  },

  group: {
    width: Dimensions.get('window').width,
    height: 19,
    marginTop: 378,
    margin: 45,
    // alignItems: 'flex-start',
    // backgroundColor: 'blue',
  },

  button: {
    width: 150,
    height: 150,
    // backgroundColor: "rgba(80,227,194,1)",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "rgba(246,246,246,1)",
    borderStyle: "solid",
    borderRadius: 13,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    shadowColor: "rgba(245,245,245,1)",
    shadowOffset: {
      width: 5,
      height: 3
    },
    elevation: 9,
    shadowOpacity: 1,
    shadowRadius: 3,
    overflow: "visible"
  },

  icon: {
    color: "rgba(0,0,0,1)",
    fontSize: 40,
    height: 44,
    width: 40,
    marginTop: 53,
    marginLeft: 55
  },

  scanRqCode: {
    // fontFamily: "roboto-700",
    color: "rgba(0,0,0,1)",
    width: 120,
    fontSize: 16,
    textAlign: "right",
    height: 19,
    marginTop: 20,
    marginLeft: 15,
    fontWeight: 'bold'
  },

  button2: {
    width: 150,
    height: 150,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "rgba(246,246,246,1)",
    borderStyle: "solid",
    borderRadius: 13,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    shadowColor: "rgba(245,245,245,1)",
    shadowOffset: {
      width: 5,
      height: 3
    },
    elevation: 9,
    shadowOpacity: 1,
    shadowRadius: 3,
    overflow: "visible",
    marginLeft: 26
  },

  generateRqCode: {
    // fontFamily: "roboto-700",
    color: "rgba(0,0,0,1)",
    width: 140,
    fontSize: 16,
    textAlign: "right",
    height: 19,
    marginTop: 20,
    marginLeft: 0,
    fontWeight: 'bold'
  },

  buttonRow: {
    height: 150,
    flexDirection: "row",
    marginTop: -297,
    marginLeft: -5,
    marginRight: -181
  },

  button3: {
    width: 150,
    height: 150,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "rgba(246,246,246,1)",
    borderStyle: "solid",
    borderRadius: 13,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    shadowColor: "rgba(245,245,245,1)",
    shadowOffset: {
      width: 5,
      height: 3
    },
    elevation: 9,
    shadowOpacity: 1,
    shadowRadius: 3,
    overflow: "visible",
    marginTop: 26,
    marginLeft: -5
  },
  
});