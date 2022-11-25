import {View, Text, ScrollView, SafeAreaView} from 'react-native';
import React from 'react';
import {cartridges} from '../assets/cartridge';
import {CartridgeWheel, CartridgeDeviceWheel} from '../components/CartridgeValueWheel';
import {colors, dimensions, styles} from '../CSS';
import {StyleSheet} from 'react-native';
import { GoldGradientText } from '../components/Gradient';

export function CartridgeManagerWheel({cartridges}) {
  return (
    <View style={styles.OuterCartridgeCircle}>
      <View style={styles.cartridgesWheel_0}>
        <CartridgeDeviceWheel cartridge={cartridges[0]}/>
      </View>
      <View style={styles.cartridgesWheel_1}>
        <CartridgeDeviceWheel cartridge={cartridges[1]}/>
      </View>
      <View style={styles.cartridgesWheel_2}>
        <CartridgeDeviceWheel cartridge={cartridges[2]}/>
      </View>
      <View style={styles.cartridgesWheel_3}>
        <CartridgeDeviceWheel cartridge={cartridges[3]}/>
      </View>
      <View style={styles.cartridgesWheel_4}>
        <CartridgeDeviceWheel cartridge={cartridges[4]}/>
      </View>

    </View>
  )
}

export function CartridgeManagerScreen() {
  return (
    // <View style={CartridgeManagerScreenStyle.container}>
    //   <View style={CartridgeManagerScreenStyle.deviceCircle}>
    //     {cartridges.map((cartridge, key) => {
    //       return (
    //         <CartridgeWheel
    //           cartridge={cartridge}
    //           isShop={false}
    //           key={key}
    //         />
    //       );
    //     })}
    //   </View>
    // </View>
    <SafeAreaView style={{...styles.body, alignItems: 'center'}}>
    <ScrollView>
      <View style={{alignItems: 'center'}}>
        <CartridgeManagerWheel cartridges={cartridges}/>
      </View>
      <View style={CartridgeManagerScreenStyle.container}>
        <View>
          <View>
            <GoldGradientText style={{...styles.CinzelGold, margin: 20, marginBottom: 0}}>CARTRIDGE SET</GoldGradientText>
          </View>
          <View style={CartridgeManagerScreenStyle.cartridgeSet}>
            <View style={CartridgeManagerScreenStyle.alignRow}>
              <CartridgeWheel
                cartridge={cartridges[0]}
                isShop={true}
                isExpire={true}
              />
              <CartridgeWheel
                cartridge={cartridges[1]}
                isShop={true}
                isExpire={true}
              />
              <CartridgeWheel
                cartridge={cartridges[2]}
                isShop={true}
                isExpire={true}
              />
            </View>
            <View style={CartridgeManagerScreenStyle.alignRow}>
              <CartridgeWheel
                cartridge={cartridges[3]}
                isShop={true}
                isExpire={true}
              />
              <CartridgeWheel
                cartridge={cartridges[4]}
                isShop={true}
                isExpire={true}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
    </SafeAreaView>

  );
}

export const CartridgeManagerScreenStyle = StyleSheet.create({
  container: {
    // minHeight: dimensions.fullHeight - 200,
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: colors.grey,
    width: (dimensions.fullWidth - 70),
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
