import React from 'react';
import {View, Text, StyleSheet, Pressable, SafeAreaView} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {styles, dimensions, colors} from '../CSS';
import { Camera } from 'expo-camera';
import { CameraButton } from '../components/CameraButton';
import { Shades } from '../assets/shades';
import CameraCarousel from '../components/CameraCarousel';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export function CameraContainer({navigation, screenType=null}) {
  return (
    <View style={CameraStyles.CameraContainer}>
      <View style={CameraStyles.cameraContainer}>
        {/* <Camera style={CameraStyles.camRatio} type={type} ratio={'1:1'} ref={(ref) => setCamera(ref)}/> */}
      </View>
      <View style={CameraStyles.buttonContainer}>
          <CameraCarousel />
      </View>
    </View>
  )
}

export function CameraMenu({navigation}) {
  return (
    <View style={CameraStyles.menu}>
      <Pressable style={CameraStyles.menuButtons}
        onPress={() => {
          navigation.navigate('CameraContainer', navigation={navigation}, {screenType:"Recents"});
        }}>
        <Text style={{color: colors.goldLight}}>Recents</Text>
      </Pressable>
      <Pressable style={CameraStyles.menuButtons}
      onPress={() => {
        navigation.navigate('CameraContainer', navigation={navigation}, {screenType:"Favourites"});
      }}>
        <Text style={{color: colors.goldLight}}>Favourites</Text>
      </Pressable>
      <Pressable style={CameraStyles.menuButtons}
      onPress={() => {
        navigation.navigate('CameraContainer', navigation={navigation}, {screenType:"New Shades"});
      }}>
        <Text style={{color: colors.goldLight}}>New Shades</Text>
      </Pressable>
    </View>
  )
}

export function CameraScreen({navigation}) {
  return (
    <CameraMenu navigation={navigation}/>
  );
}

const CameraStyles = StyleSheet.create({
  CameraContainer: {
    flex:1,
    backgroundColor: colors.black,
  },
  cameraContainer: {
    // position: 'absolute',
    // backgroundColor: 'pink',
    flex: 1,
  },
  camRatio: {},
  menuButtons: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: colors.goldLight,
    borderWidth: 1,
    margin: 30,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 50,
    // flex: 0.2,
  },
  menu: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.black,
    flex:1,
  },
})
