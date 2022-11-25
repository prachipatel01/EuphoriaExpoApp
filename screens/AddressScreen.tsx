import {View, Text, Pressable, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {Addresses} from '../assets/addresses';
import { dimensions } from '../CSS';
import Icon from 'react-native-vector-icons/FontAwesome';

function ActionButtons({defaultAddress}) {
  if (defaultAddress) {
    return (
        <View style={AddressScreenStyle.alignRowButtons}>
          <Pressable style={AddressScreenStyle.rowButtons}>
            <Text style={AddressScreenStyle.buttonText}>EDIT</Text>
          </Pressable>
          <Pressable style={AddressScreenStyle.rowButtons}>
            <Text style={AddressScreenStyle.buttonText}>REMOVE</Text>
          </Pressable>
        </View>
    );
  } else {
    return <View />;
  }
}

function Address({name, address, type, mobile, defaultAddress}) {
  return (
    <View>
      <View style={AddressScreenStyle.innerContainer}>
        <View style={AddressScreenStyle.alignRow}>
          <Text>{name}</Text>
          <Text style={AddressScreenStyle.type}>{type}</Text>
        </View>
        <View>
          <Text>{address}</Text>
        </View>
        <View>
          <Text>Mobile: {mobile}</Text>
        </View>
        <ActionButtons defaultAddress={defaultAddress} />
      </View>
      {/* <ActionButtons defaultAddress={defaultAddress} /> */}
    </View>
  );
}

export function AddressScreen() {
  return (
    <ScrollView>
      <Pressable style={AddressScreenStyle.button}>
          <Icon name="map-marker" size={20} color="black" style={AddressScreenStyle.buttonText}/>
          <Text style={AddressScreenStyle.buttonText}>ADD NEW ADDRESS</Text>
        </Pressable>
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
    backgroundColor: 'white',
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
    backgroundColor: 'lightgrey',
    marginTop: 10,
    marginBottom: 10,
  },
  button: {
    padding: 10,
    maxWidth: dimensions.fullWidth,
    margin: 10,
    backgroundColor: 'lightgrey',
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
    backgroundColor: 'lightgrey',
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 15,
  },
});
