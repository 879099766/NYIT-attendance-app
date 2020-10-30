/**
 * A simple RN fetch 1 to 1 relation RESTful API
 * Server: pythonanywhere.com with Flask
 * */ 

import * as React from "react";
// import { TouchableHighlight } from "react-native-gesture-handler";
import { StyleSheet, TouchableHighlight, View, Text } from "react-native";

// disable yellow message
// console.disableYellowBox = true;

export default function App() {
  let [author, setAuthor] = React.useState("");

  const fectAPI = () => {
    fetch("https://879099766.pythonanywhere.com/api/v1/resources/books?id=2", {
      method: "GET",
      // header info, not necessary in this case. But good to have it
      "headder": {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      // format to json
      .then((response) => response.json())
      // success fetch
      .then((data) => {
        // for single set val, must use data[0] as server returns an array
        console.log("Response: " + data[0].author);
        setAuthor(data[0].author);
      })
      // fail fetch
      .catch((error) => {
        console.log("ERROR: ", error);
      });
  };

  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={fectAPI}>
        <View sytle={styles.button}>
          <Text style={styles.buttonText}>Use Fetch API</Text>
        </View>
      </TouchableHighlight>
      <View>
        <Text>{author}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#AAA",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  },
  button: {
    padding: 10,
    marginVertical: 15,
    backgroundColor: "#0645AD",
  },
  buttonText: {
    color: "#fff",
  },
});