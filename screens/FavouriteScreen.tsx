import React from 'react';
import {View, Text, StyleSheet, FlatList, SafeAreaView} from 'react-native';
import {colors, styles, dimensions} from '../CSS';
import {Shades} from '../assets/shades';
import AddShade from '../components/AddShadeButton';

export function FavouriteScreen({navigation}) {
  return (
    <SafeAreaView style={FavouritesScreenStyle.container}>
      <FlatList 
      data={Shades}
      numColumns={4}
      renderItem={({item, index}) => (
        <View key={index} style={FavouritesScreenStyle.component}>
            <AddShade
              name={item.name}
              color={item.color}
              createdOn={item.createdOn}
              navigation={navigation}
            />
            <Text style={{...styles.InterGold, color: colors.goldLight}}>Created on</Text>
            <Text style={{...styles.InterGold, color: colors.goldLight}}>{item.createdOn}</Text>
          </View>
      )}/>
    </SafeAreaView>
  );
}

export const FavouritesScreenStyle = StyleSheet.create({
  component: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  container: {
    paddingTop: 25,
    padding: 10,
    // width: dimensions.fullWidth,
    height: dimensions.fullHeight,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.black,
  },
});
