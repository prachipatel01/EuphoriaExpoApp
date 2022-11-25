import React from "react";
import { Image, View } from "react-native";
import { colors, styles } from "../CSS";
import { GoldGradient, GoldGradientText } from "./Gradient";

function horizontalLine() {
    return <View style={styles.horizontalLine}></View>;
}

function heartIcon() {
    return <Image source={require('../assets/icons/heart.png')}/>
}

export function HomePageHeader() {
    return (
        <View style={styles.homeHeader}>
            <View style={styles.homePageHeaderElements}>
                <Image source={require('../assets/icons/decorative.png')}/>
            </View>
            <GoldGradient component={horizontalLine} style={styles.horizontalLine}></GoldGradient>
            <View style={styles.homePageHeaderElements}>
                <GoldGradientText style={styles.HeaderText}>
                    EUPHORIA LIPSTICKS
                </GoldGradientText>
            </View>
            <GoldGradient component={horizontalLine} style={styles.horizontalLine}></GoldGradient>
        </View>
    )
}

export function Header(props) {
    return (
        <View style={styles.header}>
            <View style={styles.headerContainer}>
            {props.isArrow? (
                <View style={{padding: 10}}>
                    <Image source={require('../assets/icons/leftArrow.png')}/>
                </View>
            ) : (<View/>)}
            <GoldGradientText style={{...styles.CinzelGold, padding: 10}}>
                {props.name}
            </GoldGradientText>
            </View>
            <View>
            {props.isLiked? (
                <Image source={require('../assets/icons/heart.png')} style={styles.goldIcon}/>
                // <GoldGradient component={heartIcon} style={styles.goldIcon}></GoldGradient>
            ) : (<View/>)}
            </View>
        </View>
    )
}




export function TopTabHeader(props) {
    return (
        <View></View>
    )
}