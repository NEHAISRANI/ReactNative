import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {View, Text,StyleSheet,Button} from 'react-native';

export default function Logout({navigation}) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [token, setToken] = useState('');

  const logOut = async () => {
    try {
      //setToken("")
      // await AsyncStorage.removeItem('token') //want to remove one item
      await AsyncStorage.clear();
      console.log("done") //whole data will be clear
    } catch (err) {
      console.log(err);
    }
    navigation.navigate('Login');
    setEmail('')
    setPass('')
  };

  return (
    <View>
      <View>
        <Text style={styles.heading}>logout</Text>
        <Button title="logout" onPress={logOut} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    alignSelf: 'center',
    marginTop: 25,
    fontSize: 35,
  },
  img: {
    height: 200,
    width: 200,
    alignSelf: 'center',
    marginTop: 20,
  },
});

// onLogoff = async () => {
//     try {
//       this.setState({token:""})
//     //   await AsyncStorage.removeItem('token');
//     await AsyncStorage.clear()
//     } catch (err) {
//       console.log(err);
//     }
//   };
