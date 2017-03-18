import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Hotels from './src/Hotels';


class App extends React.Component {
  render() {
    return (
      <Hotels />
    );
  }
}

Expo.registerRootComponent(App);
