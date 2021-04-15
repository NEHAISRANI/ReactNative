import AsyncStorage from '@react-native-async-storage/async-storage'
import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default function Cart() {
    console.log(AsyncStorage.getItem('userprofile'),"=========userdata ==========")    
    return (
        <View>
            <View>
                <Text style={styles.heading}>Cart</Text> 
                <Image style={styles.img} source={require('../images/cart.png')} />
            </View> 
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        alignSelf: 'center',
        marginTop: 25,
        fontSize: 35
    }, 
    img: {
        height: 200,
        width: 200,
        alignSelf: 'center',
        marginTop: 20
    }

})