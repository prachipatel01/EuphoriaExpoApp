import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import {cartridges} from '../assets/cartridge';
import {CartridgeWheel} from '../components/CartridgeValueWheel';
import {colors, dimensions, styles} from '../CSS';
import {StyleSheet} from 'react-native';
import { GoldGradientText } from '../components/Gradient';
import { LinearGradient } from 'expo-linear-gradient';

export function DeviceManagerScreen({navigation}) {
  return (
    <View style={{...styles.body, height: dimensions.fullHeight}}>
      <LinearGradient style={DeviceManagerScreenStyle.container}
      colors={[colors.grey, colors.darkGrey]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}>
      <View style={{margin: 20}}>
        <View style={DeviceManagerScreenStyle.spaceBetween}>
          <GoldGradientText style={styles.CinzelGold}>Your Device</GoldGradientText>
          <GoldGradientText style={styles.InterGold}>100%</GoldGradientText>
        </View>
        <View>
          <GoldGradientText style={styles.InriaGold}>Disconnected</GoldGradientText>
        </View>
      </View>
      <View>
        <View>
          <GoldGradientText style={{...styles.CinzelGold, margin: 20}}>CARTRIDGE SET</GoldGradientText>
        </View>
        <View style={DeviceManagerScreenStyle.cartridgeSet}>
          <View style={DeviceManagerScreenStyle.alignRow}>
            <CartridgeWheel
              cartridge={cartridges[0]}
              isShop={false}
            />
            <CartridgeWheel
              cartridge={cartridges[1]}
              isShop={false}
            />
            <CartridgeWheel
              cartridge={cartridges[2]}
              isShop={false}
            />
          </View>
          <View style={DeviceManagerScreenStyle.alignRow}>
            <CartridgeWheel
              cartridge={cartridges[3]}
              isShop={false}
            />
            <CartridgeWheel
              cartridge={cartridges[4]}
              isShop={false}
            />
          </View>
        </View>
      </View>
      <View style={DeviceManagerScreenStyle.optionButtons}>
        <Pressable style={DeviceManagerScreenStyle.optionButton}
        onPress={() => {
          navigation.navigate('CartridgeManagerScreen')
        }}>
          <Image source={require('../assets/icons/threeDots.png')} style={{...styles.goldIcon, margin: 10}}/>
          <GoldGradientText style={styles.InterGold}>Cartridge Manager</GoldGradientText>
        </Pressable>
        <Pressable style={DeviceManagerScreenStyle.optionButton}>
          <Image source={require('../assets/icons/lock.png')} style={{...styles.goldIcon, margin: 10}}/>
          <GoldGradientText style={styles.InterGold}>Travel Mode</GoldGradientText>
        </Pressable>
        <Pressable style={DeviceManagerScreenStyle.optionButton}>
          <Image source={require('../assets/icons/questionMark.png')} style={{...styles.goldIcon, margin: 10}}/>
          <GoldGradientText style={styles.InterGold}>Help & Support</GoldGradientText>
        </Pressable>
      </View>
      </LinearGradient>
    </View>
  );
}

export const DeviceManagerScreenStyle = StyleSheet.create({
  container: {
    height: dimensions.fullHeight - 200,
    justifyContent: 'space-between',
    margin: 20,
    backgroundColor: colors.grey,
  },
  alignRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spaceBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  optionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  optionButton: {
    borderColor: colors.goldLight,
    borderWidth: 2,
    width: (dimensions.fullWidth - 40)/3,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  cartridgeSet: {
    alignItems: 'center',
    margin: 20,
    marginBottom: 0,
  },
});
