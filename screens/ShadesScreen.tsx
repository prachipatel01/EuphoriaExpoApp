import React from 'react';
import {ScrollView} from 'react-native';
import {styles} from '../CSS';
import {Shades} from '../components/Shades';
import { BaseShades } from '../assets/shades';

export function ShadesScreen({navigation}) {
  return (
    <ScrollView style={styles.body}>
      <Shades navigation={navigation} baseShades={BaseShades}/>
    </ScrollView>
  );
}
