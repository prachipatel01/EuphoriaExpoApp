import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Shades} from '../assets/shades';
import {ShadeOrder} from '../components/ShadeOrder';
import { styles } from '../CSS';

export function OrdersScreen({navigation}) {
  return (
    <ScrollView style={styles.body}>
      {Shades.map((shade, key) => {
        return (
          <View key={key}>
            <ShadeOrder
              name={shade.name}
              color={shade.color}
              createdOn={shade.createdOn}
              price={shade.price}
              navigation={navigation}
              isRating={true}
            />
          </View>
        );
      })}
    </ScrollView>
  );
}

export const ShadeOrderStyle = StyleSheet.create({
  container: {
    // backgroundColor: 'black',
  },
});
