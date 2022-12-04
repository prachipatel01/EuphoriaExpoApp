import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Shades } from "../assets/shades";
import { CameraButton } from '../components/CameraButton';

export default function CameraCarousel(){
    return(
        <View style={CameraCarouselStyles.container}>
            <FlatList data={Shades} renderItem={({item}) => <CameraButton shade={item}/>} 
            horizontal 
            // showsHorizontalScrollIndicator
            pagingEnabled
            bounces={false}
            />
        </View>
    )
}

const CameraCarouselStyles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
})






// export function CameraCarousel() {
//     const [isFast, setIsFast] = React.useState(false);
//     const [isAutoPlay, setIsAutoPlay] = React.useState(false);
//     const PAGE_WIDTH = dimensions.fullWidth;
//     const COUNT = 3;
//     const baseOptions = {
//       vertical: false,
//       width: (PAGE_WIDTH - 10) / COUNT,
//       // height: PAGE_WIDTH / 2,
//       height: styles.carouselCard.height,
//       style: {
//           width: PAGE_WIDTH,
//       },
//     }
//     return(
//       <View>
//         <Carousel
//           {...baseOptions}
//           loop
//           autoPlay={isAutoPlay}
//           autoPlayInterval={isFast ? 100 : 2000}
//           data={Shades}
//           // onSnapToItem={index => console.log('current index:', index)}
//           renderItem={({index}) => (
//             <CameraButton shade={Shades[index]}/>
//           )}
//         />
//       </View>
//     )
//   }
  