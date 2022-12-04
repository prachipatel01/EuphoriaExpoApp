import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import { dimensions, styles } from '../CSS';
import { GoldGradientText } from '../components/Gradient';

export function LogoutScreen({navigation}) {
  return (
    <View style={styles.body}>
            <View style={SignupSigninStyle.container}>
                <View>
                    <GoldGradientText 
                        style={styles.RobotolGold}
                        onPress={() => {
                            navigation.navigate('SignUp', {
                                navigation: navigation,
                            });
                        }}>
                            Sure You Want to Logout?
                    </GoldGradientText>
                </View>
                <View>
                    <Pressable style={styles.inputSubmit}>
                        <Text style={styles.CinzelBlack}>LOGOUT</Text>
                    </Pressable>
                </View>
            </View>
        </View>
  );
}

export const SignupSigninStyle = StyleSheet.create({
  container: {
      // justifyContent: 'center',
      alignItems: 'center',
      height: dimensions.fullHeight,
      paddingTop: dimensions.fullHeight/6,
  },
})