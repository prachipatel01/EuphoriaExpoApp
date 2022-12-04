import {View, Text, Pressable, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {Addresses} from '../assets/addresses';
import { colors, dimensions, styles } from '../CSS';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import { GoldGradientText } from '../components/Gradient';

function ActionButtons({defaultAddress}) {
  if (defaultAddress) {
    return (
        <View style={AddressScreenStyle.alignRowButtons}>
          <LinearGradient
          colors={[colors.goldLight, colors.goldDark]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}>
          <Pressable style={AddressScreenStyle.rowButtons}>
            <Text style={AddressScreenStyle.buttonText}>EDIT</Text>
          </Pressable>
          </LinearGradient>
          <LinearGradient
          colors={[colors.goldLight, colors.goldDark]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}>
          <Pressable style={AddressScreenStyle.rowButtons}>
            <Text style={AddressScreenStyle.buttonText}>REMOVE</Text>
          </Pressable>
          </LinearGradient>
        </View>
    );
  } else {
    return <View />;
  }
}

function Address({name, address, type, mobile, defaultAddress}) {
  return (
    <View>
      <LinearGradient style={AddressScreenStyle.innerContainer}
      colors={[colors.grey, colors.darkGrey]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}>
        <View style={AddressScreenStyle.alignRow}>
          <GoldGradientText style={styles.CinzelGold}>{name}</GoldGradientText>
          {/* <Text>{name}</Text> */}
          {/* <GoldGradientText style={[AddressScreenStyle.type]}>{type}</GoldGradientText> */}
          <Text style={AddressScreenStyle.type}>{type}</Text>
        </View>
        <View>
          <GoldGradientText style={[styles.CinzelGold, {fontSize: 12, lineHeight: 15, padding: 5}]}>{address}</GoldGradientText>
          {/* <Text>{address}</Text> */}
        </View>
        <View>
          <GoldGradientText style={[styles.CinzelGold, {fontSize: 12, lineHeight: 15, padding: 5}]}>Mobile: {mobile}</GoldGradientText>
          {/* <Text>Mobile: {mobile}</Text> */}
        </View>
        <ActionButtons defaultAddress={defaultAddress} />
      </LinearGradient>
      {/* <ActionButtons defaultAddress={defaultAddress} /> */}
    </View>
  );
}

export function AddressScreen() {
  return (
    <ScrollView style={styles.body}>
      <LinearGradient
      colors={[colors.goldLight, colors.goldDark]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}>
      <Pressable style={AddressScreenStyle.button}>
          <Icon name="map-marker" size={20} color="black" style={AddressScreenStyle.buttonText}/>
          <Text style={AddressScreenStyle.buttonText}>ADD NEW ADDRESS</Text>
        </Pressable>
      </LinearGradient>
      <View>
        <View style={AddressScreenStyle.innerContainer}>
          <Text style={AddressScreenStyle.buttonText}>DEFAULT ADDRESS</Text>
        </View>
        {Addresses.map((address, key) => {
          if (address.default) {
            return (
                <Address
                  name={address.name}
                  address={address.address}
                  type={address.type}
                  mobile={address.mobile}
                  defaultAddress={address.default}
                  key={key}
                />
            );
          }
        })}
      </View>
      <View>
        <View style={AddressScreenStyle.innerContainer}>
          <Text style={AddressScreenStyle.buttonText}>OTHER ADDRESSES</Text>
        </View>
        {Addresses.map((address, key) => {
          if (!address.default) {
            return (
                <Address
                  name={address.name}
                  address={address.address}
                  type={address.type}
                  mobile={address.mobile}
                  defaultAddress={address.default}
                  key={key}
                />
            );
          }
        })}
      </View>
    </ScrollView>
  );
}

export const AddressScreenStyle = StyleSheet.create({
  innerContainer: {
    padding: 15,
    margin: 5,
    // backgroundColor: 'white',
  },
  alignRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  alignRowButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
    justifyContent: 'space-evenly',
  },
  rowButtons: {
    padding: 10,
    maxWidth: dimensions.fullWidth,
    paddingLeft: 50,
    paddingRight: 50,
    // backgroundColor: 'lightgrey',
    // marginTop: 0,
    // marginBottom: 0,
  },
  button: {
    padding: 10,
    maxWidth: dimensions.fullWidth,
    margin: 10,
    // backgroundColor: 'lightgrey',
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingRight: 10,
  },
  type: {
    // backgroundColor: 'lightgrey',
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 15,
    borderColor: colors.goldLight,
    borderWidth: 1,
    color: colors.goldLight
  },
});
