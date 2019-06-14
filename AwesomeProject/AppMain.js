import React, { Component } from 'react';
import { View } from 'react-native';
import AuthNavigator from './src/navigators/AuthNavigators/AuthNavigator';
export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <AuthNavigator />
      </View>
    );
  }
}
