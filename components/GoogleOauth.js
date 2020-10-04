import React from "react";
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from "react-native";
import * as Google from 'expo-google-app-auth';
import { useNavigation } from '@react-navigation/native';
// import * as RootNavigation from './path/to/RootNavigation.js';

export default class GoogleOauth extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      signedIn: false,
      name: "",
      photoUrl: ""
    }
  }
  
  signIn = async () => {
    try {
      const result = await Google.logInAsync({
        // androidClientId: "<YOUR GOOGLE API KEY HERE>",
        iosClientId: "<YOUR GOOGLE API KEY HERE>",
        scopes: ['profile', 'email'],
      });
  
      if (result.type === 'success') {

        this.setState({
          signedIn: true,
          name: result.user.name,
          photoUrl: result.user.photoUrl
        })

        console.log("\n\nRESULT: ", result, "\n\n")

        // return result.accessToken;
        // console.log("Successful: ", result)
      } else {
        console.log(result)
      }
    } catch (e) {
      console.log('Error due to: ', e)
    }
  }
  render(){
  return (
    <View style={styles.container}>
      {this.state.signedIn ? (
        <LoggedInPage name={this.state.name} photoUrl={this.state.photoUrl} />
      ) : (
        <LoginPage signIn={this.signIn} />
      )}
    </View>
  );
}
}

  
  const LoginPage = props => {
    return (
      <View>
        <Text style={styles.header}>Sign In With Google</Text>
        <Button title="Sign in with Google" onPress={() => props.signIn()} />
      </View>
    )
  }

  const LoggedInPage = (props) => {
    const navigation = useNavigation();
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Welcome:{props.name}</Text>
        <Image style={styles.image} source={{ uri: props.photoUrl }} />
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.button}>
        <Text style={styles.button1}>Student</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => alert('Hello, world!')} style={styles.button}>
        <Text style={styles.button2}>Professor</Text>
      </TouchableOpacity>
      </View>
    )
  }



const styles = StyleSheet.create({
  button1: {
    backgroundColor: "yellow",
    padding: 20,
    borderRadius: 5,
    width: 100,
    height: 50,
  },
  button2: {
    backgroundColor: "pink",
    padding: 20,
    borderRadius: 5,
    width: 100,
    height: 50,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    fontSize: 25
  },
  image: {
    marginTop: 15,
    width: 150,
    height: 150,
    borderColor: "rgba(0,0,0,0.2)",
    borderWidth: 3,
    borderRadius: 150
  }
});