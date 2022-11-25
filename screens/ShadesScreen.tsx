import React from 'react';
import {ScrollView} from 'react-native';
import {styles} from '../CSS';
import {Shades} from '../components/Shades';

export function ShadesScreen() {
  return (
    <ScrollView style={styles.body}>
      <Shades />
    </ScrollView>
  );
}
