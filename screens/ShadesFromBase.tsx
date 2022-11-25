import React from "react";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import { BaseShadeDerivative } from "../assets/shades";
import { ShadeCard } from "../components/ShadeCard";
import { dimensions, styles } from "../CSS";

export function ShadesFromBase({navigation, baseShade}) {
    return(
        <SafeAreaView style={{...styles.body, ...ShadesFromBaseStyle.container}}>
            <FlatList 
            data={BaseShadeDerivative}
            numColumns={2}
            renderItem={({item, index}) => (
                <ShadeCard shade={item}/>
            )}/>
        </SafeAreaView>
    )
}

const ShadesFromBaseStyle = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
})