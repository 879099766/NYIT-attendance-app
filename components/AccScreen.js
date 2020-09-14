import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function MeScreen() {
  return (
    <View style={styles.buttonBar_itme}>
      <Text>Me!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonBar_itme: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
  },
});