import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //As January is 0.
var yyyy = today.getFullYear();
  
if(mm>=1 && mm<=5)
{
  return (
    <View style={styles.container}>
      <Text>It is the Spring Semester.</Text>
      <StatusBar style="auto" />
    </View>
  );
}
else if(mm>=9 && mm<=12)
{
  return (
    <View style={styles.container}>
  <Text>It is the Fall Semester.</Text>
  <StatusBar style="auto" />
</View>
  )
}
else
{
return(
  <View style={styles.container}>
  <Text>It is the summer.</Text>
  <StatusBar style="auto" />
</View>
)
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



