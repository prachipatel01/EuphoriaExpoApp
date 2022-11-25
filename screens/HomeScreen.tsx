import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {styles, dimensions} from '../CSS';
import {SafeAreaView, ScrollView} from 'react-native';
import {Shades} from '../components/Shades';
import { HomePageHeader } from '../components/Header';
import { GoldGradientText, GreyGradient } from '../components/Gradient';
import { ShadeCarousel } from '../components/ShadeCarousel';

export function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={styles.body}>
      <ScrollView>
        <HomePageHeader />
        <View style={styles.CommercialContainer}>
          <GoldGradientText style={styles.CinzelGold}>Commercial</GoldGradientText>
        </View>
        <View>
          <ShadeCarousel/>
        </View>
        <View style={{marginTop: 30, marginBottom: 20}}>
          <Text style={{...styles.ReadexWhite, paddingLeft: 20,}}>Dive into our</Text>
          <Text style={{...styles.ReadexWhite, paddingLeft: 20,}}>Shade Universes</Text>
          {/* <GreyGradient component={Shades} style={styles.none}></GreyGradient> */}
          <Shades navigation={navigation}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
