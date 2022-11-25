import React from 'react';
import {View, Text, Pressable, Image, ScrollView, FlatList, SafeAreaView} from 'react-native';
import {StyleSheet} from 'react-native';
import {cartridges} from '../assets/cartridge';
import { colors, dimensions, styles } from '../CSS';
import {GoldGradient, GoldGradientText } from './Gradient';

function Button() {
  return (
    <Pressable style={{...styles.goldButton, paddingTop: 0, paddingBottom: 0, height: 20}}>
      <Text style={{...styles.CinzelBlack, fontSize: 8, lineHeight: 11}}>ADD TO CART</Text>
    </Pressable>
  )
}

export default function ShopCartridge() {
  return (
    <SafeAreaView style={ShopCartridgeStyle.container}>
      <FlatList
      data={cartridges}
      numColumns={2}
      renderItem={({item, index}) => (
        <View style={ShopCartridgeStyle.card} key={index}>
            <Image
              source={require('../assets/images/cartridge.png')}
              style={ShopCartridgeStyle.image}
            />
            <View style={ShopCartridgeStyle.title}>
              <GoldGradientText 
                style={{...styles.CinzelGold, maxWidth: 150}}
              >
                {item.name}
              </GoldGradientText>
            </View>
            <View>
              <GoldGradientText style={{...styles.ReadexGold, fontSize: 5, lineHeight: 6}}>{item.usedValue}% Used</GoldGradientText>
              <GoldGradientText style={{...styles.ReadexGold, fontSize: 5, lineHeight: 6}}>Expires on {item.expireDate}</GoldGradientText>
              {/* <Text style={styles.ReadexGold}>{item.usedValue}% Used</Text>
              <Text style={styles.ReadexGold}>Expires on {item.expireDate}</Text> */}
            </View>
            <GoldGradient component={Button} style={{margin: 5, maxWidth: 250}}></GoldGradient>
          </View>
      )} 
      />
    </SafeAreaView>
    
  );
}

export const ShopCartridgeStyle = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.goldLight,
    margin: 10,
    width: (dimensions.fullWidth - 40) / 2,
    minHeight: 165,
    justifyContent: 'space-evenly',
    // flex: 1,
    // flexDirection: 'column',
    // margin: 10,
  },
  title: {
    position: 'absolute',
  },
  image: {
    // height: 50,
    width: (dimensions.fullWidth - 120) / 2,
    margin: 10,
  },
});
