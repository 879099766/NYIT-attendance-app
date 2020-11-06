import React, { Component, useState, useContext } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  TouchableOpacity,
} from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";

function AccScreen(props) {
  return (
    <View style={styles.container}>
      {/* <StatusBar hidden /> */}
      <View style={styles.group}>
        <View style={styles.rect}>
          <View style={styles.iconRow}>
            <FeatherIcon name="user" style={styles.icon}></FeatherIcon>
            <View style={styles.namesColumn}>
              <Text style={styles.names}>{props.fname}</Text>
              <Text style={styles.email}>Email: {props.emailer}</Text>
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <View style={styles.rect2}>
          <View style={styles.icon2Stack}>
            <FeatherIcon name="log-out" style={styles.icon2}></FeatherIcon>
            <Text style={styles.signOut}>Sign Out</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
  },
  group: {
    height: 140,
    marginTop: 60,
  },
  rect: {
    height: 140,
    backgroundColor: "rgba(255,255,255,1)",
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 60,
    width: 60,
    height: 60,
  },
  names: {
    // fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 16,
  },
  email: {
    // fontFamily: "roboto-regular",
    color: "rgba(121,121,121,1)",
    fontSize: 12,
    marginTop: 17,
  },
  namesColumn: {
    width: 164,
    marginLeft: 24,
    marginTop: 5,
    marginBottom: 5,
  },
  iconRow: {
    height: 60,
    flexDirection: "row",
    marginTop: 40,
    marginLeft: 25,
    marginRight: 87,
  },
  button: {
    height: 50,
    marginTop: 46,
  },
  rect2: {
    height: 50,
    backgroundColor: "rgba(255,255,255,1)",
  },
  icon2: {
    top: 0,
    left: -1,
    position: "absolute",
    color: "rgba(244,0,0,1)",
    fontSize: 32,
    width: 60,
    height: 32,
  },
  signOut: {
    top: 8,
    left: 58,
    position: "absolute",
    // fontFamily: "roboto-regular",
    color: "rgba(241,6,6,1)",
  },
  icon2Stack: {
    width: 111,
    height: 32,
    marginTop: 9,
    marginLeft: 21,
  },
  materialIconTextButtonsFooter: {
    height: 56,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 388,
  },
});

export default AccScreen;
