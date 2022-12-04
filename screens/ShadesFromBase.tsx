import React, { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import { BaseShadeDerivative } from "../assets/shades";
import { ShadeCard } from "../components/ShadeCard";
import { dimensions, styles } from "../CSS";

export function ShadesFromBase({navigation, baseShade=null}) {
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

//   const getBaseShades = () => {
//     fetch('http://10.0.2.2:3000/api/v1/shade/baseShades', {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': token,
//         },
//         // body: JSON.stringify({token})
//     }).then(res => res.json()).then(
//         data => {
//             if(data.error){
//                 setErrormsg(data.error);
//                 return;
//             }else{
//                 setBaseShades(data.baseShades);
//             }
//         }
//     ).catch(function(error) {
//         console.log('There has been a problem with your fetch operation: ' + error.message);
//           // ADD THIS THROW error
//           throw error;
//         })
//   }

    return(
        <SafeAreaView style={{...styles.body, ...ShadesFromBaseStyle.container}}>
            <FlatList 
            data={BaseShadeDerivative}
            numColumns={2}
            renderItem={({item, index}) => (
                <ShadeCard shade={item} key={index}/>
            )}/>
        </SafeAreaView>
    )
}

const ShadesFromBaseStyle = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
})