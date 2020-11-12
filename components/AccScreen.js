import React, { Component } from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

export default class AccScreen extends React.Component {  
  render(){
  return (
    <View style={styles.container}>
    <View style={styles.group}>
      <View style={styles.rect}>
        <View style={styles.iconRow}>
          <EntypoIcon name="user" style={styles.icon}></EntypoIcon>
          <View style={styles.nameColumn}>
            <Text style={styles.name}>{}</Text>
            <Text style={styles.name2}>Email: example@gmail.com</Text>
          </View>
        </View>
      </View>
    </View>
    <View style={styles.group2}>
      <View style={styles.rect2}>
        <View style={styles.icon2Row}>
          <FontAwesomeIcon
            name="sign-out"
            style={styles.icon2}
          ></FontAwesomeIcon>
          <Text style={styles.signOut}>Sign Out</Text>
        </View>
      </View>
    </View>
  </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  group: {
    width: Dimensions.get('window').width,
    // alignSelf: 'flex-start',
    height: 100,
    marginTop: 66
  },
  rect: {
    width: Dimensions.get('window').width,
    // alignSelf: 'flex-start',
    height: 100,
    backgroundColor: "#E6E6E6"
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 44,
    width: 40
  },
  name: {
    // fontFamily: "roboto-regular",
    color: "#121212",
    fontWeight: 'bold',
    fontSize: 16,
  },
  name2: {
    // fontFamily: "roboto-regular",
    color: "rgba(94,94,94,1)",
    marginTop: 5,
    width: Dimensions.get('window').width,
  },
  nameColumn: {
    width: 173,
    marginLeft: 28
  },
  iconRow: {
    height: 44,
    flexDirection: "row",
    marginTop: 28,
    marginLeft: 24,
    marginRight: 95
  },
  group2: {
    width: Dimensions.get('window').width,
    height: 50,
    marginTop: 65
  },
  rect2: {
    width: Dimensions.get('window').width,
    height: 50,
    backgroundColor: "#E6E6E6",
    flexDirection: "row"
  },
  icon2: {
    color: "red",
    fontSize: 30,
    height: 30,
    width: 28
  },
  signOut: {
    // fontFamily: "roboto-regular",
    color: "red",
    marginLeft: 23,
    marginTop: 7
  },
  icon2Row: {
    height: 30,
    flexDirection: "row",
    flex: 1,
    marginRight: 238,
    marginLeft: 18,
    marginTop: 10
  }
});