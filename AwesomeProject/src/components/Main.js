
// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View} from 'react-native';
// // thu vien form
// import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

// //type Props = {};
// export default class Main extends Component<Props> {
//   render() {
//     const {user_name} = this.state
//     const {password} = this.state

//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to React Native!</Text>
//         <Text style={styles.instructions}>To get started, edit App.js</Text>
//         <Text style={styles.instructions}>{instructions}</Text>
//       </View>


//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

import React, { Component, useState, useEffect } from 'react';
import { Platform, StyleSheet, Text, View, AppRegistry, Image, Alert, Navigator } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

export default class Home extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            passWord: "",
            status: ""
        };
    }

    render() {
        return (
            <TextInput>heheh</TextInput>
        );
    }

}
