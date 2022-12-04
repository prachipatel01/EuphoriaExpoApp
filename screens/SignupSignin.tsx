import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInput } from "react-native-gesture-handler";
import { GoldGradientText } from "../components/Gradient";
import { colors, dimensions, styles } from "../CSS";
import * as SecureStore from 'expo-secure-store';

export function SignUp({navigation}){

    const [fdata, setFdata] = useState({
        name: '',
        email: '',
        password: '',
        cpassword: '',
        mobile: '',
    })

    const [errormsg, setErrormsg] = useState(null);

    const sendToBackend = () => {
        if(fdata.name == '' ||
            fdata.email == '' ||
            fdata.mobile == '' ||
            fdata.password == '' ||
            fdata.cpassword == ''){
                setErrormsg('All fields are required *');
                return;
            }
        else{
            if(fdata.cpassword!=fdata.password){
                setErrormsg('Password and confirm password must be same *');
                return;
            }else{
                fetch('http://10.0.2.2:3000/api/v1/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(fdata)
                }).then(res => res.json()).then(
                    data => {
                        if(data.error){
                            setErrormsg(data.error);
                            return;
                        }else{
                            alert('Account Created Successfully!');
                            navigation.navigate('SignIn');
                        }
                    }
                ).catch(function(error) {
                    console.log('There has been a problem with your fetch operation: ' + error.message);
                     // ADD THIS THROW error
                      throw error;
                    })

            }
        }
    }

    return (
        <View style={styles.body}>
            <View style={SignupSigninStyle.container}>
                <View>
                    <GoldGradientText style={styles.CinzelGold}>Name</GoldGradientText>
                    <TextInput 
                        style={styles.input} 
                        placeholder="Enter your Name"
                        onPressIn={() => {setErrormsg(null);}}
                        onChangeText={(text) => setFdata({...fdata, name: text})}>    
                    </TextInput>
                </View>
                <View>
                    <GoldGradientText style={styles.CinzelGold}>Mobile No.</GoldGradientText>
                    <TextInput 
                        style={styles.input} 
                        placeholder="Enter your Mobile No"
                        onPressIn={() => {setErrormsg(null);}}
                        onChangeText={(text) => setFdata({...fdata, mobile: text})}>
                    </TextInput>
                </View>
                <View>
                    <GoldGradientText style={styles.CinzelGold}>Email</GoldGradientText>
                    <TextInput 
                        style={styles.input} 
                        placeholder="Enter your Email"
                        onPressIn={() => {setErrormsg(null);}}
                        onChangeText={(text) => setFdata({...fdata, email: text})}>
                    </TextInput>
                </View>
                <View>
                    <GoldGradientText style={styles.CinzelGold}>Password</GoldGradientText>
                    <TextInput 
                        style={styles.input} 
                        placeholder="Enter your Password"
                        secureTextEntry={true}
                        onPressIn={() => {setErrormsg(null);}}
                        onChangeText={(text) => setFdata({...fdata, password: text})}>
                    </TextInput>
                </View>
                <View>
                    <GoldGradientText style={styles.CinzelGold}>Confirm Password</GoldGradientText>
                    <TextInput 
                        style={styles.input} 
                        placeholder="Enter your Password"
                        secureTextEntry={true}
                        onPressIn={() => {setErrormsg(null);}}
                        onChangeText={(text) => setFdata({...fdata, cpassword: text})}>
                    </TextInput>
                </View>
                <View>
                    {errormsg? (<Text style={{...styles.InterWhite, paddingTop: 5}}>{errormsg}</Text>): null}
                </View>
                <View>
                    <Pressable 
                        style={styles.inputSubmit}
                        onPress={() => {
                            sendToBackend();
                        }}>
                        <Text style={styles.CinzelBlack}>SIGN UP</Text>
                    </Pressable>
                </View>
                <View>
                    <GoldGradientText 
                        style={styles.RobotolGold}
                        onPress={() => {
                            navigation.navigate('SignIn', {
                                navigation: navigation,
                            });
                        }}>
                            Already have account? Please Sign In
                    </GoldGradientText>
                </View>
            </View>
        </View>
    )
}

export function SignIn({navigation}) {
    const [fdata, setFdata] = useState({
        email: '',
        password: '',
    })

    const [errormsg, setErrormsg] = useState(null);

    const sendToBackend = () => {
        if(fdata.email == '' ||
            fdata.password == ''){
                setErrormsg('All fields are required *');
                return;
            }
        else{
            fetch('http://10.0.2.2:3000/api/v1/signin', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(fdata)
                }).then(res => res.json()).then(
                    async data => {
                        if(data.error){
                            setErrormsg(data.error);
                            return;
                        }else{
                            // await SecureStore.setItemAsync('myEuphoriaToken', data.token);
                            // const token = await SecureStore.getItemAsync('myEuphoriaToken');
                            // console.log(token);
                            await AsyncStorage.setItem('myEuphoriaToken', data.token);
                            alert('Logged In Successfully!');
                            navigation.navigate('MyTabsScreen');
                        }
                    }
                ).catch(function(error) {
                    console.log('There has been a problem with your fetch operation: ' + error.message);
                     // ADD THIS THROW error
                      throw error;
                    })
        }
    }

    return (
        <View style={styles.body}>
            <View style={SignupSigninStyle.container}>
                <View>
                    <GoldGradientText style={styles.CinzelGold}>Email</GoldGradientText>
                    <TextInput
                        style={styles.input} 
                        placeholder="Enter your Email"
                        onPressIn={() => {setErrormsg(null);}}
                        onChangeText={(text) => setFdata({...fdata, email: text})}></TextInput>
                </View>
                <View>
                    <GoldGradientText style={styles.CinzelGold}>Password</GoldGradientText>
                    <TextInput 
                        style={styles.input} 
                        placeholder="Enter your Password"
                        secureTextEntry={true}
                        onPressIn={() => {setErrormsg(null);}}
                        onChangeText={(text) => setFdata({...fdata, password: text})}></TextInput>
                </View>
                <View>
                    {errormsg? (<Text style={{...styles.InterWhite, paddingTop: 5}}>{errormsg}</Text>): null}
                </View>
                <View>
                    <Pressable 
                        style={styles.inputSubmit}
                        onPress={() => {
                            sendToBackend();
                        }}>
                        <Text style={styles.CinzelBlack}>SIGN IN</Text>
                    </Pressable>
                </View>
                <View>
                    <GoldGradientText 
                        style={styles.RobotolGold}
                        onPress={() => {
                            // navigation.navigate('SignUp', {
                            //     navigation: navigation,
                            // });
                            navigation.goBack();
                        }}>
                            Do not have account? Please Sign Up
                    </GoldGradientText>
                </View>
            </View>
        </View>
    )
}

export const SignupSigninStyle = StyleSheet.create({
    container: {
        // justifyContent: 'center',
        alignItems: 'center',
        height: dimensions.fullHeight,
        paddingTop: dimensions.fullHeight/10,
    },
})