import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import EntypoIcon from "react-native-vector-icons/Entypo";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.group}>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button}>
            <EntypoIcon name="camera" style={styles.icon}></EntypoIcon>
            <Text style={styles.scanRqCode}>Scan QR Code</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2}>
            <EntypoIcon name="add-to-list" style={styles.icon}></EntypoIcon>
            <Text style={styles.generateRqCode}>Generate QR Code</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button3}>
          <EntypoIcon name="add-to-list" style={styles.icon}></EntypoIcon>
          <Text style={styles.scanRqCode}>View List</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  group: {
    width: 140,
    height: 19,
    marginTop: 378,
    margin: 45,
  },

  button: {
    width: 150,
    height: 150,
    backgroundColor: "rgba(80,227,194,1)",
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
    backgroundColor: "rgba(74,144,226,1)",
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
    backgroundColor: "rgba(189,16,224,1)",
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