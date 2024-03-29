import React, {useState,useEffect} from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [token, setToken] = useState('');
  useEffect(async () => {
    var data=await AsyncStorage.getItem('userprofile')
    console.log(data,"hbvhjjbbjbh")
    if (data){
      navigation.navigate("Home")
      console.log("user exists")
    }else{
      console.log("user not exists")
    }
  }, [])

  const loginHandler = async () => {
    try {
      await setToken('abc123');
      // await AsyncStorage.setItem('email', email);
      // await AsyncStorage.setItem('token', 'abc123');
      // await AsyncStorage.multiSet([['email',email],
      // ['token','abc123']])
      await AsyncStorage.setItem(
        'userprofile',
        JSON.stringify({email: email, token: token}),
      );
    } catch (err) {
      console.log(err);
    }

    if (!email.trim()) {
      alert('Please Enter email');
      return;
    }
    if (!pass.trim()) {
      alert('Please Enter password');
      return;
    }
    setEmail('')
    setPass('')
    navigation.navigate('Drawer')
    // navigation.replace('Login');
    alert('Success');

  };

  getData = async () => {
    try {
      // const value = await AsyncStorage.getItem('token');
      // const email = await AsyncStorage.getItem('email');
      const userprofile=await AsyncStorage.getItem('userprofile')
      const Email=JSON.parse(userprofile)
      console.log(userprofile)

      // if(email!==null){
      //   setEmail(email)
      // }
      if (userprofile !== null) {
        setUserProfile({...Email});
      }
      if (email !== null) {
        setEmail(email);
      }
    } catch (e) {
      console.log(e)
    }
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
          value={email}
          autoCapitalize="none"
        />
        <Text style={styles.label}>Enter Password</Text>
        <TextInput
          style={styles.inputfield}
          secureTextEntry={true}
          placeholder={'Password'}
          placeholderTextColor={'black'}
          value={pass}
          onChangeText={text => setPass(text)}
          autoCapitalize="none"
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
    borderColor: 'skyblue',
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
