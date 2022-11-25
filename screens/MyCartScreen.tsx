import React from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import { Shades } from "../assets/shades";
import { ShadeOrder } from "../components/ShadeOrder";

export function MyCartScreen({navigation}) {
    return (
        <SafeAreaView style={MyCartScreenStyle.body}>
            <FlatList 
            data={Shades}
            numColumns={1}
            renderItem={({item, index}) => (
                <ShadeOrder 
                    name={item.name} 
                    color={item.color} 
                    price={item.price} 
                    createdOn={item.createdOn} 
                    navigation={navigation}
                    isRating={false}
                />
            )}
            />
        </SafeAreaView>
    )
}

const MyCartScreenStyle = StyleSheet.create({
    body: {
        
    },
})