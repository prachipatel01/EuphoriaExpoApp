import React from "react";
import {StyleSheet, View, Image } from "react-native";
import {Video} from 'expo-av';
// import Video from 'react-native-video';
// import video from '../assets/videos/landingVideo.mp4';

export function video() {
    const _video = React.useRef(null);
    return (
        <View>
            {/* <Video 
                ref={_video}
                style={styles.video}
                source={require('../assets/videos/landingVideo.mp4')}
                useNativeControls
                isLooping
                shouldPlay
            /> */}
            <Image source={require('../assets/images/hoyRed.png')} />
        </View>
    );
}

const styles = StyleSheet.create({
    video: {
        flex: 1,
        alignSelf: 'stretch',
    },
})