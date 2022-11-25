import {View, Text, StyleSheet} from 'react-native';
import {dimensions, styles} from '../CSS';
import React from 'react';

export function HelpAndSupportScreen() {
  return (
    <View style={HelpAndSupportScreenStyle.container}>
      <Text style={HelpAndSupportScreenStyle.text}>
        If you need help with your device, you may find an answerbin the User
        Manual or Troubleshooting section.
      </Text>
      <Text style={HelpAndSupportScreenStyle.boldText}>Need additional Support ?</Text>
      <Text style={HelpAndSupportScreenStyle.boldText}>Call : 0097686547807</Text>
    </View>
  );
}

export const HelpAndSupportScreenStyle = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: 'white',
    padding: 20,
    // height: dimensions.fullHeight,
  },
  text: {
    padding: 5,
  },
  boldText: {
    fontWeight: 'bold',
    padding: 5,
  },
})
