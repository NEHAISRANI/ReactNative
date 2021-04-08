import React, {useState} from 'react';
import {View, Text, Button, TextInput, StyleSheet, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [token, setToken] = useState('');
  const loginHandler = async () => {
    // try {
    //   setToken('abc123');
    //   await AsyncStorage.setItem('email', email);
    //   await AsyncStorage.setItem('token', 'abc123');
    //   // await AsyncStorage.multiSet([['username',email],
    //   // ['token','abc12rr3']])
    // } catch (err) {
    //   console.log(err);
    // }

    if (!email.trim()) {
      alert('Please Enter email');
      return;
    }
    if (!pass.trim()) {
      alert('Please Enter password');
      return;
    }
    navigation.navigate('Drawer');
    alert('Success');
  };
  

  const registerHandler = function () {
    navigation.navigate('Register');
  };

  return (
    <View>
      <View style={styles.form}>
        <Text>{token}</Text>
        <Text style={styles.heading}>Login Form</Text>
        <Text style={styles.label}>Enter Email</Text>
        <TextInput
          style={styles.inputfield}
          placeholder={'Email'}
          placeholderTextColor={'black'}
          onChangeText={text => setEmail(text)}
        />
        <Text style={styles.label}>Enter Password</Text>
        <TextInput
          style={styles.inputfield}
          secureTextEntry={true}
          placeholder={'Password'}
          placeholderTextColor={'black'}
          onChangeText={text => setPass(text)}
        />
      </View>

      <View>
        <Button onPress={loginHandler} title={'Login'}></Button>
        <Text style={styles.or}>OR</Text>
        <Button onPress={registerHandler} title={'Register'}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputfield: {
    // justifyContent:"center",
    alignSelf: 'center',
    height: 43,
    borderWidth: 1,
    borderColor: 'orange',
    width: 320,
    borderRadius: 5,
  },
  or: {
    fontSize: 20,
    alignSelf: 'center',
  },
  form: {
    marginBottom: 50,
    alignItems: 'center',
    width: 310,
    alignSelf: 'center',
    marginTop: 10,
  },
  label: {
    fontSize: 20,
    alignSelf: 'flex-start',
    marginVertical: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 20,
  },
});
