import React from "react";
import { StyleSheet, View } from "react-native";
import { dimensions, styles } from "../CSS";

export function CameraButton({shade}){
    const width = dimensions.fullWidth;
    return(
        <View style={[CameraButtonStyle.container, {width: width}]}>
            <View style={{...styles.onClickCamera, backgroundColor: shade.color}}></View>
        </View>
    )
}

const CameraButtonStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})