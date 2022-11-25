import {Text} from '@react-native-material/core';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, dimensions, styles} from '../CSS';
import ShadeColor from './ShadeColor';
import Icon from 'react-native-vector-icons/FontAwesome';

export function ShadeOrder({navigation, name, color, price, createdOn, isRating}) {
  return (
    <View style={ShadeOrderStyle.container}>
      <View style={ShadeOrderStyle.shadeDetail}>
        <View style={ShadeOrderStyle.leftContent}>
          <ShadeColor color={color} />
          <View style={ShadeOrderStyle.middleContent}>
            <Text style={styles.baseText}>{name}</Text>
            <Text style={styles.normalText}>On {createdOn}</Text>
          </View>
        </View>
        <View style={ShadeOrderStyle.middleContent}>
          <Text style={styles.baseText}>${price}</Text>
        </View>
      </View>
      {isRating? (
        <View style={ShadeOrderStyle.ratings}>
          <Text style={styles.normalText}>Rate Product</Text>
          <Icon name="star-o" size={15} color="black"/>
          <Icon name="star-o" size={15} color="black"/>
          <Icon name="star-o" size={15} color="black"/>
          <Icon name="star-o" size={15} color="black"/>
          <Icon name="star-o" size={15} color="black"/>
          <View />
        </View>
      ): (
        <View />
      )}
    </View>
  );
}

export const ShadeOrderStyle = StyleSheet.create({
  container: {
    margin: 5,
  },
  shadeDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 2,
    padding: 10,
    backgroundColor: colors.grey,
  },
  ratings: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 2,
    padding: 10,
    backgroundColor: colors.grey,
    justifyContent: 'space-between',
  },
  middleContent: {
    padding: 10,
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
