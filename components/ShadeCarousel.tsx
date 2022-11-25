import * as React from 'react';
import {Dimensions, FlatList, Image, Text, View} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { colors, styles, dimensions } from '../CSS';
import { carouelShades } from '../assets/shades';
import { GoldGradient } from './Gradient';

export function CarouselCard({item}) {
  return (
    <View style={styles.carouselCard}>
      <Image source={item.image} style={styles.carouselImage}/>
      <View style={styles.carouselShade}>
        <View style={{...styles.carouselShadeRound, backgroundColor: item.color}}></View>
        <Text style={styles.InterWhite}>{item.name}</Text>
      </View>
    </View>
  )
}

const button = () => {
  return(
    <View></View>
  )
}

export function ScrollButton (){
  const len = carouelShades.length / 3;
  var buttons = []
  for(var i=0; i< len;i++){
    buttons.push(
      <GoldGradient component={button} style={styles.carouselButton} key={i}></GoldGradient>
    )
  }
  return(
    <View style={styles.carouselButtonList}>
      {buttons}
    </View>
  )
}

// const PAGE_WIDTH = Dimensions.get('window').width;
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
    <View style={{flex: 1, marginTop: 20, marginBottom: 20, marginLeft: 10, marginRight: 10,}}>
      <Carousel
        {...baseOptions}
        loop
        autoPlay={isAutoPlay}
        autoPlayInterval={isFast ? 100 : 2000}
        data={carouelShades}
        // onSnapToItem={index => console.log('current index:', index)}
        renderItem={({index}) => (
            <CarouselCard item={carouelShades[index]}/>
        )}
      />
      <ScrollButton/>
    </View>
  );
}
