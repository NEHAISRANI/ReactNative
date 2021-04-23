import React from 'react'
import { View, Text, StyleSheet,Button } from 'react-native'



export default function Checkout({navigation}) {

  const logOut =()=> {
    navigation.navigate('Login');
  };
    return (
        <View>
            <Text style={styles.heading}>Checkout</Text>
            <Button title="logout" onPress={logOut} />
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        alignSelf: 'center',
        marginTop: 10,
        fontSize: 20
    }

})

