import React, {useState, useEffect, useCallback} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DefaultScreen from './components/BottomTabButton';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AppLoading from 'expo-app-loading';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import {
  ReadexPro_400Regular,
  Cinzel_400Regular,
  InriaSerif_400Regular,
  Inter_400Regular,
  Cinzel_700Bold,
  Roboto_500Medium,
  CinzelDecorative_700Bold
} from "@expo-google-fonts/dev";

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // const [fontsLoaded] = useFonts({
        //   ReadexPro_400Regular,
        
        // });
        await Font.loadAsync({ 
          ReadexPro_400Regular, 
          Cinzel_400Regular,
          InriaSerif_400Regular,
          Inter_400Regular,
          Cinzel_700Bold,
          Roboto_500Medium,
          CinzelDecorative_700Bold });
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <View style={styles.container} onLayout={onLayoutRootView}>
          {/* <Text>Open up App.tsx to start working on your app!</Text> */}
          <StatusBar style="auto" />
          <DefaultScreen />
        </View>
      </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
