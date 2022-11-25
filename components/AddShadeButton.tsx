import {Pressable, StyleSheet, TouchableHighlight, View} from 'react-native';
import React from 'react';
import {Text} from '@react-native-material/core';
// import Icon from '../Fonts/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors, styles } from '../CSS';

export default function AddShade({navigation, name, color, createdOn}) {
  const roundButtonStyle = {
    height: 50,
    width: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color,
  };
  return (
    <View style={AddShadeStyle.button}>
      <Pressable
        onPress={() => {
          console.log('pressed!');
          navigation.navigate('CreateShadeScreen', {
            name: name,
            color: color,
            createdOn: createdOn,
          });
        }}
        // underlayColor="black"
        >
        <View style={AddShadeStyle.container}>
          <View style={{...roundButtonStyle, marginBottom: 10}}>
            <Icon name="plus" size={30} color="white"/>
          </View>
          <Text style={{...styles.InterGold, color: colors.goldLight, fontWeight: 'bold'}}>{name}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export const AddShadeStyle = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 2,
  },
  button: {
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  buttonText: {
    
  },
});
