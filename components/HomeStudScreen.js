import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  TouchableOpacity,
} from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { Center } from "@builderx/utils";
import EntypoIcon from "react-native-vector-icons/Entypo";
import { useNavigation } from '@react-navigation/native';

function HomeStudScreen() {
  const navigation = useNavigation();
  // navigation.setOptions({ title: 'Home Screen' })
  return (
    // <View style={styles.container}>
    <View style={styles.contain}>
      <View style={styles.center_container}>
        <View style={styles.left_grp}>
          <View style={styles.grp1}>
            <View style={styles.grp1_shadding}></View>
            <Center>
              <TouchableOpacity style={styles.grp1_btn} onPress={() => navigation.navigate("CameraAccess")}>
                <View style={styles.rect6}>
                  <MaterialCommunityIconsIcon
                    name="qrcode-scan"
                    style={styles.icon}
                  ></MaterialCommunityIconsIcon>
                  <Text style={styles.scanQrCode}>Scan QR Code</Text>
                </View>
              </TouchableOpacity>
            </Center>
          </View>

          {/* <View style={styles.grp3}>
            <View style={styles.grp3_shadding}></View>
            <Center>
              <TouchableOpacity style={styles.grp3_btn}>
                <View style={styles.rect9}>
                  <EntypoIcon name="list" style={styles.icon3}></EntypoIcon>
                  <Text style={styles.viewList}>View List</Text>
                </View>
              </TouchableOpacity>
            </Center>
          </View> */}
        </View>

        <View style={styles.right_grp}>
          <View style={styles.grp2}>
            <View style={styles.grp2_shadding}></View>
            <Center>
              <TouchableOpacity
                style={styles.grp2_btn}
                // onPress={() => navigation.navigate("QRGenerator")}
              >
                <View style={styles.rect8}>
                  <EntypoIcon name="list" style={styles.icon3}></EntypoIcon>
                  <Text style={styles.viewList}>View List</Text>
                </View>
              </TouchableOpacity>
            </Center>
          </View>

          {/* <View style={styles.grp4}>
            <View style={styles.grp4_shadding}></View>
            <Center>
              <TouchableOpacity
                style={styles.grp4_btn}
                onPress={() => navigation.navigate("AddLectureScreen")}
              >
                <View style={styles.rect10}>
                  <MaterialIconsIcon
                    name="add-to-photos"
                    style={styles.icon4}
                  ></MaterialIconsIcon>
                  <Text style={styles.addLecture}>Add Lecture</Text>
                </View>
              </TouchableOpacity>
            </Center>
          </View> */}
        </View>
      </View>
    </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(230, 230, 230,1)",
  },
  materialIconTextButtonsFooter1: {
    height: 56,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 684,
  },
  contain: {
    // height: 381,
    backgroundColor: "#F2F2F2",
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "center",
    // marginTop: -681
  },
  center_container: {
    width: 334,
    height: 351,
    flexDirection: "row",
    alignSelf: "center",
  },
  left_grp: {
    flex: 0.5,
    // backgroundColor: "rgba(247, 247, 247,1)",
    left: 0,
    width: 167,
    top: 0,
    height: 351,
  },
  grp1: {
    flex: 0.5,
    // backgroundColor: "rgba(255,255,255,1)"
  },
  grp1_shadding: {
    flex: 1,
    overflow: "hidden",
    // backgroundColor: "rgba(230,230,230,1)"
  },
  rect6: {
    width: 150,
    height: 150,
    // position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 15,
    shadowColor: "rgba(255,255,255,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.01,
    shadowRadius: 0,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)",
    borderStyle: "solid",
    // left: 8,
    // top: 13
  },
  icon: {
    color: "rgba(0,0,0,1)",
    fontSize: 60,
    height: 66,
    width: 60,
    marginTop: 42,
    marginLeft: 45,
  },
  scanQrCode: {
    // fontFamily: "Arial",
    color: "#121212",
    marginTop: 16,
    marginLeft: 49,
  },
  grp3: {
    flex: 0.5,
  },
  grp3_shadding: {
    flex: 1,
    // backgroundColor: "rgba(230, 230, 230,1)"
  },
  grp1_btn: {
    width: 150,
    height: 150,
    position: "absolute",
  },
  grp3_btn: {
    width: 150,
    height: 150,
    position: "absolute",
  },
  rect9: {
    width: 150,
    height: 150,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 15,
    shadowColor: "rgba(255,255,255,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.01,
    shadowRadius: 0,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)",
    borderStyle: "solid",
    marginTop: 2,
  },
  icon3: {
    color: "rgba(0,0,0,1)",
    fontSize: 60,
    height: 66,
    width: 60,
    marginTop: 40,
    marginLeft: 45,
  },
  viewList: {
    // fontFamily: "Arial",
    color: "#121212",
    marginTop: 16,
    marginLeft: 77,
  },
  right_grp: {
    flex: 0.5,
    // backgroundColor: "rgba(210, 210, 210,1)"
  },
  grp2: {
    flex: 0.5,
    // backgroundColor: "rgba(230, 230, 230,1)"
  },
  grp2_shadding: {
    flex: 1,
    // backgroundColor: "rgba(230,230,230,1)"
  },
  grp2_btn: {
    width: 150,
    height: 150,
    position: "absolute",
  },
  rect8: {
    width: 150,
    height: 150,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 15,
    shadowColor: "rgba(255,255,255,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.01,
    shadowRadius: 0,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)",
    borderStyle: "solid",
  },
  icon2: {
    color: "rgba(0,0,0,1)",
    fontSize: 60,
    height: 66,
    width: 60,
    marginTop: 42,
    marginLeft: 45,
  },
  generateQrCode: {
    // fontFamily: "Arial",
    color: "#121212",
    marginTop: 16,
    marginLeft: 22,
  },
  grp4: {
    flex: 0.5,
  },
  grp4_shadding: {
    flex: 1,
    // backgroundColor: "rgba(230, 230, 230,1)"
  },
  grp4_btn: {
    width: 150,
    height: 150,
    position: "absolute",
  },
  rect10: {
    width: 150,
    height: 150,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 15,
    shadowColor: "rgba(255,255,255,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.01,
    shadowRadius: 0,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)",
    borderStyle: "solid",
  },
  icon4: {
    color: "rgba(0,0,0,1)",
    fontSize: 60,
    height: 60,
    width: 60,
    marginTop: 45,
    marginLeft: 45,
  },
  addLecture: {
    // fontFamily: "Arial",
    color: "#121212",
    marginTop: 19,
    marginLeft: 62,
  },
});

export default HomeStudScreen;
