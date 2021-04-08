import React, {Component} from 'react';
// import {View, Input, Text, Button, TextInput} from 'react-native';
import Navigator from './source/routes/homeStack'

export default function App(){
    return(
        <Navigator/>
    )
}

// class App extends Component {
//   state = {
//     username: '',
//     password: '',
//     token: '',
//   };
//   constructor(props) {
//     super(props);
//     this.getData();
//   }
//   onLogoff = async () => {
//     try { 
//       this.setState({token:""})
//     //   await AsyncStorage.removeItem('token');
//     await AsyncStorage.clear()
//     } catch (err) {
//       console.log(err);
//     } 
//   };
//   onSubmit = async () => {
//     try {
//       this.setState({token: 'abc123'});
//       await AsyncStorage.setItem('username', this.state.username);
//       await AsyncStorage.setItem('token', 'abc123');
//     // await AsyncStorage.multiSet([['username',this.state.username],
//         // ['token','abc12rr3']])
//     } catch (err) {  
//       console.log(err);
//     }
//   }; 
//   getData = async () => {
//     try {
//       const value = await AsyncStorage.getItem('token');
//       const username = await AsyncStorage.getItem('username');
//       if (value !== null) {
//         this.setState({token: value});
//       }
//       if (username !== null) {
//         this.setState({username});
//       }
//     } catch (e) {}
//   };
//   render() {
//     return (
//       <View>
//         <Text>Neha</Text>
//         <Text>{this.state.token}</Text>
//         <Text>Username</Text>
//         <TextInput
//           style={{height: 50, backgroundColor: 'azure', fontSize: 20}}
//           placeholder="enter your name"
//           value={this.state.username}
//           onChangeText={val => this.setState({username: val})}
//         />
//         <Text>Password</Text>
//         <TextInput
//           style={{height: 50, backgroundColor: 'azure', fontSize: 20}}
//           placeholder="enter your name"
//           value={this.state.password}
//           onChangeText={val => this.setState({password: val})}
//         />
//         <Button title="submit login" onPress={this.onSubmit} />
//         <Button title="submit logoff" onPress={this.onLogoff} />

//       </View>
//     );
//   }
// }

// export default App;
