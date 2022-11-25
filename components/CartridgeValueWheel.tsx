import React from 'react';
import {Text, View, Pressable} from 'react-native';
import {StyleSheet} from 'react-native';
import { styles } from '../CSS';
import { GoldGradient, GoldGradientText } from './Gradient';

const InnerWheelStyle = (color: string) => {
  return {...styles.cartridgeWheelInner,  backgroundColor: color}
}
const OuterWheelStyle = (color: string) => {
  return {...styles.cartridgeWheelOuter,  borderColor: color}
}
const DeviceInnerWheelStyle = (color: string) => {
  return {...styles.cartridgeDeviceInnerWheel,  backgroundColor: color}
}
function Button() {
  return (
    <Pressable style={{...styles.goldButton, paddingTop: 0, paddingBottom: 0, height: 20, width: 40}}>
      <Text style={{...styles.CinzelBlack, fontSize: 8, lineHeight: 20, minWidth: 30}}>SHOP</Text>
    </Pressable>
  )
}

export function CartridgeWheel({
  cartridge,
  isShop,
  isExpire
}) {
  return (
    <View style={CartridgeWheelStyle.container}>
      <View style={OuterWheelStyle(cartridge.cartridgeColorCode)}>
        <View style={InnerWheelStyle(cartridge.cartridgeColorCode)}>
          <Text style={styles.InterWhite}>{cartridge.usedValue}%</Text>
        </View>
      </View>
      {isExpire ? (
        <View style={{alignItems: 'center'}}>
          <GoldGradientText style={styles.InterGold}>{cartridge.cartridgeNo}</GoldGradientText>
          <GoldGradientText style={styles.InterGold}>EXP {cartridge.expireDate}</GoldGradientText>
        </View>
      ):(
        <View />
      )}
      {isShop ? <GoldGradient component={Button} style={{margin: 5, maxWidth: 100}}></GoldGradient> : <View />}
    </View>
  );
}

export function CartridgeDeviceWheel({
  cartridge,
}) {
  return (
    <View>
      <View style={styles.cartridgeDeviceOuterWheel}>
        <View style={DeviceInnerWheelStyle(cartridge.cartridgeColorCode)}>
          <Text>{cartridge.cartridgeNo}</Text>
        </View>
      </View>
    </View>
  );
}

const CartridgeWheelStyle = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  }
})
