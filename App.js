import * as React from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import FeatherIcon from "react-native-vector-icons/Feather";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import * as Google from "expo-google-app-auth";

import HomeScreen from "./components/test_HomeRoot";
import SearchScreen from "./components/SearchScreen";
import AccScreen from "./components/AccScreen";

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
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
      name: "",
      photoUrl: "",
      nyit_email: "",
    };
  }

  // set up a var called "signIn"
  // then Google API will return this var as user obj
  signIn = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId:
          "<YOUR GOOGLE API KEY>",
        // iosClientId: YOUR_CLIENT_ID_HERE,
        scopes: ["profile", "email"],
      });

      if (result.type === "success") {
        this.setState({
          signedIn: true,
          name: result.user.name,
          photoUrl: result.user.photoUrl,
          nyit_email: result.user.email,
        });

        console.log("\n\nRESULT: ", result, "\n\n");

        // return result.accessToken;
        // console.log("Successful: ", result)
      } else {
        console.log(result);
      }
    } catch (e) {
      console.log("Error due to: ", e);
    }
  };

  render() {
    if (this.state.signedIn) {
      return (
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === "Home") {
                  iconName = focused ? "home" : "home";
                  return <FeatherIcon name="home" size={size} color={color} />;
                } else if (route.name === "Account") {
                  iconName = focused ? "account-outline" : "account-outline";
                  return <MaterialCommunityIconsIcon name={iconName} size={size} color={color} />;
                } else if (route.name === "Search") {
                  iconName = focused ? "ios-search" : "ios-search";
                  return <Ionicons name={iconName} size={size} color={color} />;
                }
              },
            })}
            tabBarOptions={{
              activeTintColor: "black",
              inactiveTintColor: "gray",
            }}
          >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Search" component={SearchScreen} />
            <Tab.Screen name="Account" profile_name={this.state.name} profile_mail={this.state.nyit_email} component={AccScreen} />
          </Tab.Navigator>
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
