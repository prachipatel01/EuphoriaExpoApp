import { Text, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import {StyleSheet, View, Image, SafeAreaView, ScrollView} from 'react-native';
import ShadeColor from '../components/ShadeColor';
import {styles, dimensions, padding, colors} from '../CSS';
import { EmptyCartridge } from '../components/EmptyCartridge';
import { GoldGradient, GoldGradientText, GreyGradient } from '../components/Gradient';

function Button (props) {
  return (
    <Pressable style={styles.goldButton}>
      <Text style={styles.CinzelBlack}>{props.props.text}</Text>
    </Pressable>
  )
}

function CreateShadeContainer(props){
  return (
    <View style={CreateShadeScreenStyle.createShadeContainer}>
      <View style={CreateShadeScreenStyle.innerContainer}>
        <ShadeColor color={props.color} />
        <View>
          <GoldGradientText style={styles.CinzelGold}>{props.name}</GoldGradientText>
          <Text style={styles.CinzelWhite}>Last Created on {props.createdOn}</Text>
        </View>
      </View>
      <View>
        <Text style={[styles.ReadexWhiteSmall, CreateShadeScreenStyle.description]}>Red is a very hot color. It's associated with fire, violence, and warfare. It's also associated with love and passion. In history, it's been associated with both the Devil and Cupid.</Text>
      </View>
      <View style={CreateShadeScreenStyle.buttonContainer}>
      <GoldGradient component={Button} props={{text:'CREATE AGAIN'}} style={{margin: 10, maxWidth: 250}}></GoldGradient>
      </View>
      {/* <GoldGradient component={Button} props={{text:'TRY IT ON'}} style={{margin: 10}}></GoldGradient> */}
    </View>
  )
}

export function CreateShadeScreen({route, navigation}) {
  const {name, color, createdOn} = route.params;
  console.log('name',name)
  return (
    <SafeAreaView style={styles.body}>
      <ScrollView contentContainerStyle={CreateShadeScreenStyle.outerContainer}>
        <View style={CreateShadeScreenStyle.image}>
          <Image
              source={require('../assets/images/models/image9.png')}
              style={CreateShadeScreenStyle.image}
          />
          <View style={styles.scrollIcons}>
            <Image
                source={require('../assets/icons/scrollEnable.png')}
                style={styles.enabledIcon}
            />
            <Image
                source={require('../assets/icons/scrollEnable.png')}
                style={styles.disabledIcon}
            />
            <Image
                source={require('../assets/icons/scrollEnable.png')}
                style={styles.disabledIcon}
            />
          </View>
        </View>
        <CreateShadeContainer name={name} color={color} createdOn={createdOn}/>
        <Pressable style={styles.tryItOnButton}>
          <GoldGradientText style={styles.CinzelGold}>TRY IT ON</GoldGradientText>
          {/* <Text style={styles.CinzelGold}>TRY IT ON</Text> */}
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

export const CreateShadeScreenStyle = StyleSheet.create({
  image: {
    width: dimensions.fullWidth,
    paddingBottom: 20,
  },
  outerContainer: {
    alignItems: 'center',
  },
  createShadeContainer: {
    // alignItems: 'center',
    padding: 20,
    backgroundColor: colors.grey,
    width: dimensions.fullWidth - 25,
    margin: 10,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  description: {
    padding: 20,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tryAgainButton: {},
  tryOnButton: {},
});
