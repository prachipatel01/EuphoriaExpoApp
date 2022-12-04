import React, { useState } from 'react';
import {View, Text, Image, FlatList, SafeAreaView, ImageBackground, Pressable} from 'react-native';
import {styles, dimensions, padding, margin} from '../CSS';
import {BaseShades} from '../assets/shades';
import {StyleSheet} from 'react-native';
import { GoldGradientText } from './Gradient';

export function Shades({navigation, baseShades}) {
  return (
    <View style={styles.shadesContainer}>
      {BaseShades.map((item, index) => {
        return(
          <ImageBackground source={item.url} style={styles.shadeUniverseImage} imageStyle={styles.shadeUniverseImageStyle} key={index}>
            <ImageBackground source={require('../assets/images/baseShades/gradient.png')} style={styles.shadeUniverseImageGradient} imageStyle={styles.shadeUniverseImageStyle}>
              <Pressable 
                style={styles.shadeUniverseShades}
                onPress = {() => navigation.navigate('ShadeFromBase', baseShades={item})}>
                <GoldGradientText style={[styles.CinzelGoldBold, styles.shadeUniverseText]}>{item.name}</GoldGradientText>
                <Image source={require('../assets/icons/rightArrow2.png')}/>
              </Pressable>
            </ImageBackground>
          </ImageBackground>
        )
      })}
    </View>
  )
}
