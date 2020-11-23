import React, { useState } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  TextInput,
  Text,
  Switch,
  TouchableOpacity,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from '@react-navigation/native';

function AddLecture(props) {
  // switch btn states
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const navigation = useNavigation();
  
  return (
    <KeyboardAwareScrollView
      enableOnAndroid
      enableAutomaticScroll
      keyboardOpeningTime={0}
      extraHeight={Platform.select({ android: 200 })}
      style={styles.container}
    >
      <StatusBar hidden />
      <View style={styles.group2}>
        <View style={styles.background_1}>
          <View style={styles.input_shadding1}>
            <TextInput
              placeholder="Course Title"
              placeholderTextColor="black"
              clearButtonMode="while-editing"
              autoCapitalize="sentences"
              clearTextOnFocus={true}
              spellCheck={true}
              autoCorrect={true}
              style={styles.input1}
            ></TextInput>
          </View>
          <View style={styles.input_shadding2}>
            <TextInput
              placeholder="Max Students"
              placeholderTextColor="black"
              clearButtonMode="while-editing"
              autoCapitalize="sentences"
              clearTextOnFocus={true}
              spellCheck={true}
              autoCorrect={true}
              keyboardType="number-pad"
              style={styles.input2}
            ></TextInput>
          </View>
        </View>
      </View>
      <View style={styles.group3}>
        <View style={styles.background_2}>
          <View style={styles.input_shadding3}>
            <TextInput
              placeholder="Date"
              placeholderTextColor="black"
              clearButtonMode="while-editing"
              autoCapitalize="none"
              clearTextOnFocus={true}
              spellCheck={true}
              autoCorrect={true}
              dataDetector="calendarEvent"
              style={styles.input3}
            ></TextInput>
          </View>
          <View style={styles.startTime1Row}>
            <Text style={styles.startTime1}>Start Time</Text>
            <Text style={styles.endTime1}>End Time</Text>
          </View>
          <View style={styles.input_shadding4Row}>
            <View style={styles.input_shadding4}>
              <TextInput
                placeholder="Time"
                placeholderTextColor="black"
                clearButtonMode="while-editing"
                autoCapitalize="sentences"
                clearTextOnFocus={true}
                spellCheck={true}
                autoCorrect={true}
                keyboardType="number-pad"
                dataDetector="calendarEvent"
                style={styles.input4}
              ></TextInput>
            </View>
            <View style={styles.inputShadding5Stack}>
              <View style={styles.inputShadding5}></View>
              <TextInput
                placeholder="Time"
                placeholderTextColor="black"
                clearButtonMode="while-editing"
                autoCapitalize="sentences"
                clearTextOnFocus={true}
                spellCheck={true}
                autoCorrect={true}
                keyboardType="number-pad"
                dataDetector="calendarEvent"
                style={styles.input5}
              ></TextInput>
            </View>
          </View>
          <View style={styles.switchRow}>
            <Switch
              style={styles.switch}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
            <Text style={styles.addAdditionTime}>Add Addition Time</Text>
          </View>
          {isEnabled ? (
            <View>
              <View style={styles.input_shadding6}>
                <TextInput
                  placeholder="Date"
                  placeholderTextColor="black"
                  clearButtonMode="while-editing"
                  autoCapitalize="none"
                  clearTextOnFocus={true}
                  spellCheck={true}
                  autoCorrect={true}
                  dataDetector="calendarEvent"
                  style={styles.input6}
                ></TextInput>
              </View>
              <View style={styles.startTime2Row}>
                <Text style={styles.startTime2}>Start Time</Text>
                <Text style={styles.endTime2}>End Time</Text>
              </View>
              <View style={styles.input_shadding7Row}>
                <View style={styles.input_shadding7}>
                  <TextInput
                    placeholder="Time"
                    placeholderTextColor="black"
                    clearButtonMode="while-editing"
                    autoCapitalize="sentences"
                    clearTextOnFocus={true}
                    spellCheck={true}
                    autoCorrect={true}
                    keyboardType="number-pad"
                    dataDetector="calendarEvent"
                    style={styles.input7}
                  ></TextInput>
                </View>
                <View style={styles.input_shadding8Stack}>
                  <View style={styles.input_shadding8}></View>
                  <TextInput
                    placeholder="Time"
                    placeholderTextColor="black"
                    clearButtonMode="while-editing"
                    autoCapitalize="sentences"
                    clearTextOnFocus={true}
                    spellCheck={true}
                    autoCorrect={true}
                    keyboardType="number-pad"
                    dataDetector="calendarEvent"
                    style={styles.input8}
                  ></TextInput>
                </View>
              </View>
            </View>
          ) : (
            <View></View>
          )}

          <TouchableOpacity style={styles.btn_submit}>
            <Text style={styles.btn_txt_submit}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(230,230,230,1)",
  },
  group2: {
    height: 171,
    marginTop: 25,
  },
  background_1: {
    height: 170,
    backgroundColor: "rgba(255,255,255,1)",
  },
  input_shadding1: {
    width: "93%",
    height: 45,
    backgroundColor: "rgba(181,181,181,1)",
    marginTop: 26,
    marginLeft: 15,
  },
  input1: {
    color: "#121212",
    height: 45,
    width: "95%",
    marginLeft: 10,
  },
  input_shadding2: {
    width: "93%",
    height: 45,
    backgroundColor: "rgba(181,181,181,1)",
    marginTop: 25,
    marginLeft: 15,
  },
  input2: {
    marginLeft: 10,
    color: "#121212",
    height: 45,
    width: "95%",
  },
  group3: {
    height: 412,
    marginTop: 27,
  },
  background_2: {
    height: 410,
    backgroundColor: "rgba(255,255,255,1)",
  },
  input_shadding3: {
    width: "93%",
    height: 45,
    backgroundColor: "rgba(181,181,181,1)",
    marginTop: 26,
    marginLeft: 15,
  },
  input3: {
    marginLeft: 10,
    color: "#121212",
    height: 45,
    width: "95%",
  },
  startTime1: {
    color: "#121212",
  },
  endTime1: {
    color: "#121212",
    marginLeft: 145,
  },
  startTime1Row: {
    height: 16,
    flexDirection: "row",
    marginTop: 19,
    marginLeft: 15,
    marginRight: 109,
  },
  input_shadding4: {
    width: 185,
    height: 45,
    backgroundColor: "rgba(181,181,181,1)",
    marginTop: 1,
  },
  input4: {
    marginLeft: 10,
    color: "#121212",
    height: 45,
    width: 165,
  },
  inputShadding5: {
    top: 1,
    left: 0,
    width: 185,
    height: 45,
    position: "absolute",
    backgroundColor: "rgba(181,181,181,1)",
  },
  input5: {
    width: 160,
    marginLeft: 10,
    top: 0,
    left: 0,
    position: "absolute",

    color: "#121212",
    height: 45,
  },
  inputShadding5Stack: {
    width: 151,
    height: 46,
    marginLeft: 27,
  },
  input_shadding4Row: {
    height: 46,
    flexDirection: "row",
    marginTop: 4,
    marginLeft: 15,
    marginRight: 17,
  },
  switch: {},
  addAdditionTime: {
    color: "#121212",
    fontSize: 15,
    marginLeft: 12,
    marginTop: 2,
  },
  switchRow: {
    height: 20,
    flexDirection: "row",
    marginTop: 18,
    marginLeft: 16,
    marginRight: 168,
  },
  input_shadding6: {
    width: "93%",
    height: 45,
    backgroundColor: "rgba(181,181,181,1)",
    marginTop: 22,
    marginLeft: 15,
  },
  input6: {
    marginLeft: 10,
    color: "#121212",
    height: 45,
    width: "95%",
  },
  startTime2: {
    color: "#121212",
  },
  endTime2: {
    color: "#121212",
    marginLeft: 145,
  },
  startTime2Row: {
    height: 16,
    flexDirection: "row",
    marginTop: 19,
    marginBottom: 5,
    marginLeft: 15,
    marginRight: 109,
  },
  input_shadding7: {
    width: 185,
    height: 45,
    backgroundColor: "rgba(181,181,181,1)",
    marginTop: 1,
  },
  input7: {
    marginLeft: 10,
    color: "#121212",
    height: 45,
    width: 165,
  },
  input_shadding8: {
    top: 1,
    left: 0,
    width: 185,
    height: 45,
    position: "absolute",
    backgroundColor: "rgba(181,181,181,1)",
  },
  input8: {
    width: 160,
    marginLeft: 10,
    top: 0,
    left: 0,
    position: "absolute",

    color: "#121212",
    height: 45,
  },
  input_shadding8Stack: {
    width: 151,
    height: 46,
    marginLeft: 27,
  },
  input_shadding7Row: {
    height: 46,
    flexDirection: "row",
    marginLeft: 15,
    marginRight: 17,
  },
  btn_submit: {
    width: "93%",
    height: 39,
    backgroundColor: "rgba(7,161,80,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.01,
    shadowRadius: 0,
    borderWidth: 1,
    borderColor: "rgba(252,252,252,1)",
    overflow: "hidden",
    marginTop: 17,
    marginLeft: 16,
  },
  btn_txt_submit: {
    width: "93%",
    color: "rgba(255,252,252,1)",
    marginTop: 10,
    marginLeft: "45%",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
});

export default AddLecture;
