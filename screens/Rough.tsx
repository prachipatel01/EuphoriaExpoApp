import React from "react";
import { View , Text, Pressable, ScrollView, SafeAreaView} from "react-native";
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import { cartridges } from "../assets/cartridge";
import { Shades } from "../assets/shades";
import { StyleSheet } from "react-native";
import { styles , colors, dimensions} from "../CSS";
import { GoldGradient, GoldGradientText, GreyGradient, GreyGradientText, GoldButton } from "../components/Gradient";
import { CartridgeDeviceWheel } from "../components/CartridgeValueWheel";
import { Header } from "../components/Header";
import Icon from 'react-native-vector-icons/FontAwesome';
import Carousel from 'react-native-reanimated-carousel';

export default function Button({color}) {
  const roundButtonStyle = {
    height: 50,
    width: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: colors.goldLight,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color,
  };
  return (
      <Pressable
        onPress={() => {
          console.log('pressed!');
        }}
        >
          <View style={{...roundButtonStyle, marginBottom: 10}}>
            <Icon name="plus" size={15} color={colors.goldLight}/>
          </View>
      </Pressable>
  );
}

const PAGE_WIDTH = dimensions.fullWidth;
const COUNT = 3;


export function ShadeCarousel() {

  const [isVertical, setIsVertical] = React.useState(false);
  const [isFast, setIsFast] = React.useState(false);
  const [isAutoPlay, setIsAutoPlay] = React.useState(false);

  const baseOptions = isVertical
        ? ({
              vertical: true,
              width: PAGE_WIDTH,
              height: styles.carouselCard.height,
              style: {
                  height: PAGE_WIDTH / 2,
              },
          } as const)
        : ({
              vertical: false,
              width: (PAGE_WIDTH - 10) / COUNT,
              // height: PAGE_WIDTH / 2,
              height: styles.carouselCard.height,
              style: {
                  width: PAGE_WIDTH,
              },
          } as const);

  return (
      <Carousel
        {...baseOptions}
        loop
        autoPlay={isAutoPlay}
        autoPlayInterval={isFast ? 100 : 2000}
        style={{
          width: PAGE_WIDTH,
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: '#0071fa',
        }}
        data={Shades}
        // onSnapToItem={index => console.log('current index:', index)}
        renderItem={({index}) => (
            <Button color={Shades[index].color}/>
        )}
      />
  );
}


// function GoldButton (props) {
//   return (
//     <Pressable style={styles.goldButton}>
//       <Text style={styles.CinzelBlack}>{props.props.text}</Text>
//     </Pressable>
//   )
// }



export function RoughScreen() {
    
    return (
      <View style={styles.body}>
        {/* <ShadeCarousel/> */}
        <GoldButton 
          text='ADD TO CART' 
          textStyle={RoughScreenStyle.textStyle}
          buttonStyle={RoughScreenStyle.buttonStyle}
          />
        {/* <GoldGradient component={GoldButton} props={{text:'ADD TO CART'}} componentStyle={RoughScreenStyle.goldButton}></GoldGradient> */}

      </View>
    )
}

export const RoughScreenStyle = StyleSheet.create({
  buttonStyle: {
    width: 106,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    ...styles.CinzelBlack,
    fontSize: 9,
    lineHeight: 12,
    letterSpacing: 0.5,
  },
})


