import React from 'react';
import {View, Text, ScrollView, Pressable, SafeAreaView} from 'react-native';
import { Button } from '@react-native-material/core';
import {colors, styles} from '../CSS';
import {StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {OrdersScreen} from './OrdersScreen';
import {AddressScreen} from './AddressScreen';
import {PaymentScreen} from './PaymentScreen';
import {HelpAndSupportScreen} from './HelpAndSupportScreen';
import {DeviceTutorialScreen} from './DeviceTutorialScreen';
import {DeviceManagerScreen} from './DeviceManagerScreen';
import {CartridgeManagerScreen} from './CartridgeManagerScreen';
import {LogoutScreen} from './LogoutScreen';
import {AppVersionScreen} from './AppVersionScreen';
import {UserManualScreen} from './UserManualScreen';
import { MyCartScreen } from './MyCartScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { RoughScreen } from './Rough';
import { GoldGradient, GoldGradientText } from '../components/Gradient';

const Stack = createNativeStackNavigator();


export function AccountScreen({navigation}) {
  return (
    <SafeAreaView>
    <ScrollView style={styles.body}>
      <View style={AccountScreenStyles.userDetails}>
        <View style={AccountScreenStyles.userImage} />
        <View style={AccountScreenStyles.user}>
          <Text>Pankti Shah</Text>
          <Text>+91 9978447854</Text>
          <Text>panktishah62@gmail.com</Text>
        </View>
      </View>
      <View style={AccountScreenStyles.container}>
        <GoldGradientText style={styles.CinzelGoldBold}>
        Account
        </GoldGradientText>
        <Pressable
          onPress={() => navigation.navigate('OrdersScreen')}
          style={AccountScreenStyles.button}
        >
          <GoldGradientText style={styles.InriaGold}>Orders</GoldGradientText>
          <Icon name="chevron-right" size={10} color={colors.goldLight}/>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('AddressScreen')}
          style={AccountScreenStyles.button}
        >
          <GoldGradientText style={styles.InriaGold}>Address</GoldGradientText>
          <Icon name="chevron-right" size={10} color={colors.goldLight}/>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('PaymentScreen')}
          style={AccountScreenStyles.button}
        >
          <GoldGradientText style={styles.InriaGold}>Payment Methods</GoldGradientText>
          <Icon name="chevron-right" size={10} color={colors.goldLight}/>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('HelpAndSupportScreen')}
          style={AccountScreenStyles.button}
        >
          <GoldGradientText style={styles.InriaGold}>Help & Support</GoldGradientText>
          <Icon name="chevron-right" size={10} color={colors.goldLight}/>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('LogoutScreen')}
          style={AccountScreenStyles.button}
        >
         <GoldGradientText style={styles.InriaGold}>Logout</GoldGradientText>
         <Icon name="chevron-right" size={10} color={colors.goldLight}/>
        </Pressable>
      </View>
      <View style={AccountScreenStyles.container}>
      <GoldGradientText style={styles.CinzelGoldBold}>
        Devices
        </GoldGradientText>
        <Pressable
          onPress={() => navigation.navigate('DeviceManagerScreen')}
          style={AccountScreenStyles.button}
        >
          <GoldGradientText style={styles.InriaGold}>Manage Devices</GoldGradientText>
          <Icon name="chevron-right" size={10} color={colors.goldLight}/>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('CartridgeManagerScreen')}
          style={AccountScreenStyles.button}
        >
          <GoldGradientText style={styles.InriaGold}>Cartridge Manager</GoldGradientText>
          <Icon name="chevron-right" size={10} color={colors.goldLight}/>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('DeviceTutorialScreen')}
          style={AccountScreenStyles.button}
        >
          <GoldGradientText style={styles.InriaGold}>Device Tutorials</GoldGradientText>
          <Icon name="chevron-right" size={10} color={colors.goldLight}/>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('UserManualScreen')}
          style={AccountScreenStyles.button}
        >
          <GoldGradientText style={styles.InriaGold}>User Manual</GoldGradientText>
          <Icon name="chevron-right" size={10} color={colors.goldLight}/>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('AppVersionScreen')}
          style={AccountScreenStyles.button}
        >
          <GoldGradientText style={styles.InriaGold}>App Version</GoldGradientText>
          <Icon name="chevron-right" size={10} color={colors.goldLight}/>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('RoughScreen')}
          style={AccountScreenStyles.button}
        >
          <GoldGradientText style={styles.InriaGold}>Rough Screen</GoldGradientText>
          <Icon name="chevron-right" size={10} color={colors.goldLight}/>
        </Pressable>
      </View>
    </ScrollView>
    </SafeAreaView>
  );
}

export const AccountScreenStyles = StyleSheet.create({
  userDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 20,
    paddingTop: 20,
    backgroundColor: colors.yellowGold,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  account: {},
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.grey,
    // marginTop: 3,
    // marginBottom: 3,
    padding: 20,
    borderColor: 'black',
    // borderWidth: 2,
    borderBottomWidth: 2,
    borderBottomColor: colors.goldLight,
    borderRadius: 5,
  },
  userImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: 'white',
    marginRight: 20,
  },
  user: {},
  container: {
    padding: 20,
  },
});
