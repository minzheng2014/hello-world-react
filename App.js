import React, { Component } from 'react';
import { StyleSheet, View, AppRegistry, Text} from 'react-native';
import Home from './components/Home';
import { StackNavigator } from 'react-navigation';

const Application = StackNavigator({
  Home: { screen: Home },
  }, {
      navigationOptions: {
          header: false,
      }
});

export default class App extends Component {
  render() {
    return (
      <Application />
    );
  }
}

AppRegistry.registerComponent('ReactNativeProject', () => App);
