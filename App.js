import React, { Component } from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Google from "expo-google-app-auth";
import { Ionicons } from "@expo/vector-icons";
import FeatherIcon from "react-native-vector-icons/Feather";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import firebase from "./db/firebaseDB";

import SearchScreen from "./components/SearchScreen";
import AccScreen from "./components/AccScreen";
import HomeHostScreen from "./components/HomeHostScreen";
import HomeStudScreen from "./components/HomeStudScreen";
import QRGenerator from "./components/GenerateQR_func";
import AddLectureScreen from "./components/AddLectureScreen";

// disable yellow box mesg
// console.disableYellowBox = true;

function LoginPage(props) {
  // init landing page for the Google Signin
  return (
    <View>
      <Text style={styles.header}>Sign In With NYIT Credentials</Text>
      <Button title="Sign in" onPress={() => props.signIn()} />
    </View>
  );
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// make it global across the screen
global.HomePanel = HomeHostScreen;

function TabScreen({ usr_info }) {
  // console.log("The props val: " + usr_info)
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home";
            return <FeatherIcon name="home" size={size} color={color} />;
          } else if (route.name === "Account") {
            iconName = focused ? "account-outline" : "account-outline";
            return (
              <MaterialCommunityIconsIcon
                name={iconName}
                size={size}
                color={color}
              />
            );
          } else if (route.name === "Search") {
            iconName = focused ? "ios-search" : "ios-search";
            return <Ionicons name={iconName} size={size} color={color} />;
          }
        },
      })}
    >
      <Tab.Screen name="Home" options={{ title: "Home Screen" }}>
        {() => <HomePanel usr_obj={usr_info} />}
      </Tab.Screen>
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{ title: "Search Screen" }}
      />
      <Tab.Screen name="Account" options={{ title: "Account Screen" }}>
        {() => <AccScreen usr_obj={usr_info} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usr_obj: {
        signedIn: false,
        full_name: "",
        last_name: "",
        first_name: "",
        email: "",
        photoUrl: "",
      },
      profArr: [],
    };
    this.firestoreRef = firebase
      .firestore()
      .collection("hosts")
      .where("email", "==", this.state.usr_obj.email);
  }

  componentDidMount() {
    // this.unsubscribe = this.firestoreRef.onSnapshot(this.getDoc);
    this.unsubscribe = this.firestoreRef.onSnapshot(this.getDoc);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  getDoc = (querySnapshot) => {
    if (querySnapshot.empty) {
      // console.log("No matched email");
      global.HomePanel = HomeStudScreen;
    }
    querySnapshot.forEach((res) => {
      const email = res.data();
      this.state.profArr.push(email);
    });
    // const email = querySnapshot.data();
    // this.state.profArr.push(email);
  };

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
          usr_obj: {
            signedIn: true,
            full_name: result.user.name,
            last_name: result.user.familyName,
            first_name: result.user.givenName,
            photoUrl: result.user.photoUrl,
            email: result.user.email,
          },
        });
      } else {
        console.log("\nLog failed due to: \n", result);
      }
    } catch (e) {
      console.log("\nError due to: \n", e);
      // console.log(type(value));
    }
  };

  render() {
    if (this.state.usr_obj.signedIn) {
      // console.log(this.state.profArr);
      return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="TabScreen" options={{ title: "Home Screen" }}>
              {() => <TabScreen usr_info={this.state.usr_obj} />}
            </Stack.Screen>
            <Stack.Screen
              name="QRGenerator"
              component={QRGenerator}
              options={{ title: "Generate QR" }}
            />
            <Stack.Screen
              name="AddLectureScreen"
              component={AddLectureScreen}
              options={{ title: "Add Lecture" }}
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
