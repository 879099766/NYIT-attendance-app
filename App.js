import * as React from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import FeatherIcon from "react-native-vector-icons/Feather";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import * as Google from "expo-google-app-auth";
// import firestore from "@react-native-firebase/firestore";

import HomeScreen from "./components/home_host";
import SearchScreen from "./components/SearchScreen";
import AccScreen from "./components/AccScreen";
// import QRGenerator from "./components/QR_generate";
import QRGenerator2 from "./components/GenerateQR_func";
import AddLectureScreen from "./components/AddLectureScreen";

function LoginPage(props) {
  // init landing page for the Google Signin
  return (
    <View>
      <Text style={styles.header}>Sign In With NYIT Credentials</Text>
      <Button title="Sign in" onPress={() => props.signIn()} />
    </View>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const config = {
  // api_key
  apiKey: "AIzaSyDCYPgLjlChuJbC-FMGyNOYkaao8ULyYWE",

  // storage_bucket ID
  authDomain: "reactnativefirebase-ec822.appspot.com",

  // firebase_url
  databaseURL: "https://reactnativefirebase-ec822.firebaseio.com",

  // project_id
  projectId: "reactnativefirebase-ec822",

  // storage_bucket
  storageBucket: "reactnativefirebase-ec822.appspot.com",

  // project_number
  messagingSenderId: "154770876179",

  // mobilesdk_app_id
  appId: "1:154770876179:android:10714512d67f9f26a8dce6",
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
      full_name: "",
      last_name: "",
      first_name: "",
      email: "",
      photoUrl: "",
    };
  }

  signIn = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId:
          "117030962609-9mblopptuccmm9fqhi2uv7eeea9bk1vh.apps.googleusercontent.com",
        // iosClientId: YOUR_CLIENT_ID_HERE,
        scopes: ["profile", "email"],
      });

      if (result.type === "success") {
        this.setState({
          signedIn: true,
          full_name: result.user.name,
          last_name: result.user.familyName,
          first_name: result.user.givenName,
          photoUrl: result.user.photoUrl,
          email: result.user.email,
        });

        // firestore.initializeApp(config);
        // const usersCollection = firestore().collection("Users");
        // console.log(usersCollection);
      } else {
        console.log("\nLog failed due to: \n", result);
      }
    } catch (e) {
      console.log("\nError due to: \n", e);
      // console.log(type(value));
    }
  };

  render() {
    if (this.state.signedIn) {
      return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="root_screen" component={root_screen} />
            <Stack.Screen
              name="QRGenerator2"
              component={QRGenerator2}
              options={{ title: "Generate QR" }}
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
        </NavigationContainer>
      );
    } else {
      return (
        <View style={styles.container}>
          <LoginPage signIn={this.signIn} />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 20,
  },
});
