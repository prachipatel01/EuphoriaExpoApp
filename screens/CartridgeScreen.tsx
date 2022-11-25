import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../CSS';
import ShopCartridge from '../components/ShopCartridge';

export function CartridgeScreen() {
  return (
    <View style={styles.body}>
      <ShopCartridge />
    </View>
  );
}
