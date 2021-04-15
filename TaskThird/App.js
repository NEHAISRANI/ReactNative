import React, {Component} from 'react';
// import {View, Input, Text, Button, TextInput} from 'react-native';
import Navigator from './source/routes/homeStack';
export default function App(){
    return(
        <Navigator/>
    )
}
// import React,{Component}from 'react';
// import {createStackNavigator} from 'react-navigation-stack';
// import {createAppContainer} from 'react-navigation';
// import Login from './source/screens/Login';
// import Checkout from './source/screens/checkOut'
// import {ActivityIndicator} from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { createSwitchNavigator} from "react-navigation";
// import {View,StatsBar} from 'react-native';
// const screens = {
// //   Login: {
// //     screen: Login,
// //   },
//   Checkout:{
//     screen:Checkout
//   }
// };

// const AuthStack=createStackNavigator({Login:Login});
// class AuthLoadingScreen extends React{
//     constructor(props){
//         super(props);
//         this._loadData();
//     }
//     render(){
//         return(
//             <View>
//                 <ActivityIndicator/>
//                 <StatsBar barStyle="default"/>
//              </View>
//         );
//     }
//     _loadData=async()=>{
//         const isLoggedIn=await AsyncStorage.getItem('isLOggedIn');
//         this.props.navigation.navigate(isLoggedIn !== '1'?Auth:'App')
//     }
// }

// const RootStack = createStackNavigator(screens);
// export default createAppContainer(createSwitchNavigator(
//     {
//         AuthLoading:AuthLoadingScreen,
//         App:RootStack,
//         Auth:AuthStack,
//     },{
//         initialRouteName:'AuthLoading',
//     }
// ));
// export default createAppContainer(HomeStack)
 