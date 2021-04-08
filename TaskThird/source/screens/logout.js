import React from 'react';
import {View, Text,StyleSheet} from 'react-native';

export default function Logout({navigation}) {
  const logOut = async () => {
    try {
      await AsyncStorage.clear().then(() => console.log('cleared'));
    } catch (err) {
      console.log(err);
    }
    navigation.navigate('Home');
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
