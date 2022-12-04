import React, { useState } from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {styles, dimensions} from '../CSS';
import {SafeAreaView, ScrollView} from 'react-native';
import {Shades} from '../components/Shades';
import { HomePageHeader } from '../components/Header';
import { GoldGradientText, GreyGradient } from '../components/Gradient';
import { ShadeCarousel } from '../components/ShadeCarousel';


export function HomeScreen({navigation}) {
  const [baseShades, setBaseShades] = useState([]);
  const [token, setToken] = useState('');
  const [errormsg, setErrormsg] = useState(null);

  const getToken = () => {
    AsyncStorage.getItem('myEuphoriaToken')
    .then((_token) => [
      setToken(_token)
      // console.log(_token)
    ]).catch(err => {
      alert('Please SignIn again!');
      navigation.navigate('SignIn');
      console.log(err);
    })
  }

  // const getBaseShades = () => {
  //   fetch('http://10.0.2.2:3000/api/v1/shade/baseShades', {
  //       method: 'GET',
  //       headers: {
  //           'Content-Type': 'application/json',
  //           'Authorization': token,
  //       },
  //       // body: JSON.stringify({token})
  //   }).then(res => res.json()).then(
  //       data => {
  //           if(data.error){
  //               setErrormsg(data.error);
  //               return;
  //           }else{
  //               setBaseShades(data.baseShades);
  //           }
  //       }
  //   ).catch(function(error) {
  //       console.log('There has been a problem with your fetch operation: ' + error.message);
  //         // ADD THIS THROW error
  //         throw error;
  //       })
  // }
  // getToken();
  // getBaseShades();
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
          <Shades navigation={navigation} baseShades={baseShades}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
