import React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { colors, margin, styles } from "../CSS";
import { GoldGradientText, GoldGradient, GoldButton } from "./Gradient";

function Price({shade}) {
    if(shade.isFree) {
        return (
            <View style={ShadeCardStyle.inRow}>
                <GoldGradientText 
                style={{...styles.CinzelGold,...styles.originalPrice, ...ShadeCardStyle.text}}>
                    {shade.price}
                </GoldGradientText>
                <GoldGradientText style={{...styles.CinzelGold, ...ShadeCardStyle.text}}>Free</GoldGradientText>
            </View> 
        )
    }else {
        if(shade.discountedPrice == shade.price) {
            return (
                <GoldGradientText 
                    style={{...styles.CinzelGold, ...ShadeCardStyle.text}}>
                        {shade.price}
                </GoldGradientText>
            )
        }else {
            return (
                <View style={ShadeCardStyle.inRow}>
                    <GoldGradientText 
                    style={{...styles.CinzelGold,...styles.originalPrice, ...ShadeCardStyle.text}}>
                        {shade.price}
                    </GoldGradientText>
                    <GoldGradientText style={{...styles.CinzelGold, ...ShadeCardStyle.text}}>{shade.discountedPrice}</GoldGradientText>
                </View> 
            )
        }
    }
}

function Ratings ({shade}) {
    const stars = [...Array(shade.ratings)]
    const emptyStars = [...Array(5-shade.ratings)]
    return(
        <View style={ShadeCardStyle.stars}>
        {stars.map((item, index) => {
            return(
                <Image source={require('../assets/icons/star.png')}/>
            )
        })}
        {emptyStars.map((item, index) => {
            return(
                <Image source={require('../assets/icons/disabledStar.png')}/>
            )
        })}
        </View>
    )
    
}

function Button (props) {
    return (
      <Pressable style={styles.goldButton}>
        <Text style={styles.CinzelBlack}>{props.props.text}</Text>
      </Pressable>
    )
  }


export function ShadeCard({shade}) {
    const backgroundColor = {
        backgroundColor: shade.color
    }
    return(
        <View style={ShadeCardStyle.card}>
            <View style={{...ShadeCardStyle.shade, ...backgroundColor}}></View>
            <View style={ShadeCardStyle.description}>
                <View>
                    <GoldGradientText style={{...styles.CinzelGold, ...ShadeCardStyle.text}}>{shade.name}</GoldGradientText>
                    <Price shade={shade}/>
                </View>
                <View>
                    <Ratings shade={shade}/>
                </View>
            </View>
            <View style={ShadeCardStyle.buttons}>
                <Image source={require('../assets/icons/disabledLike.png')}/>
                <GoldButton 
                text='ADD TO CART' 
                textStyle={ShadeCardStyle.textStyle}
                buttonStyle={ShadeCardStyle.buttonStyle}
                onPress = {() => {
                    console.log('Pressed')
                }}
                />
            </View>
        </View>
    )
}

const ShadeCardStyle = StyleSheet.create({
    card: {
        width: 166,
        height: 188,
        borderColor: colors.goldLight,
        borderWidth: 1,
        alignItems: 'center',
        margin: 10,
    },
    shade: {
        width: 145,
        height: 100,
        marginTop: 10,
        
    },
    text: {
        fontSize: 11,
        lineHeight: 13,
    },
    description: {
        marginBottom: 5,
        marginTop: 5,
        width: 145,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    inRow: {
        flexDirection: 'row',
    },
    stars: {
        flexDirection: 'row',
    },
    disabledStars: {
        tintColor: colors.black,
        borderColor: colors.goldLight,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 145,
    },
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