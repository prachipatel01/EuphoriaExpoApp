import {Text} from '@react-native-material/core';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, dimensions, styles} from '../CSS';
import ShadeColor from './ShadeColor';
import Icon from 'react-native-vector-icons/FontAwesome';
import {LinearGradient} from 'expo-linear-gradient';
import { GoldGradientText } from './Gradient';

export function ShadeOrder({navigation, name, color, price, createdOn, isRating}) {
  return (
    <View style={ShadeOrderStyle.container}>
      <LinearGradient style={ShadeOrderStyle.shadeDetail}
      colors={[colors.grey, colors.darkGrey]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}>
        <View style={ShadeOrderStyle.leftContent}>
          <ShadeColor color={color} />
          <View style={ShadeOrderStyle.middleContent}>
            <GoldGradientText style={styles.CinzelGoldBold}>{name}</GoldGradientText>
            {/* <Text style={styles.CinzelGoldBold}>{name}</Text> */}
            <GoldGradientText tyle={styles.CinzelGoldBold}>On {createdOn}</GoldGradientText>
            {/* <Text style={styles.CinzelGoldBold}>On {createdOn}</Text> */}
          </View>
        </View>
        <View style={ShadeOrderStyle.middleContent}>
          <GoldGradientText style={styles.CinzelGoldBold}>${price}</GoldGradientText>
          {/* <Text style={styles.baseText}>${price}</Text> */}
        </View>
      </LinearGradient>
      {isRating? (
        <LinearGradient style={ShadeOrderStyle.ratings}
        colors={[colors.grey, colors.darkGrey]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}>
          <GoldGradientText style={[styles.CinzelGoldBold, {fontSize: 14}]}>Rate Product</GoldGradientText>
          {/* <Text style={styles.normalText}>Rate Product</Text> */}
          <Icon name="star-o" size={15} color={colors.goldLight}/>
          <Icon name="star-o" size={15} color={colors.goldLight}/>
          <Icon name="star-o" size={15} color={colors.goldLight}/>
          <Icon name="star-o" size={15} color={colors.goldLight}/>
          <Icon name="star-o" size={15} color={colors.goldLight}/>
          <View />
        </LinearGradient>
      ): (
        <View />
      )}
    </View>
  );
}

export const ShadeOrderStyle = StyleSheet.create({
  container: {
    margin: 10,
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
