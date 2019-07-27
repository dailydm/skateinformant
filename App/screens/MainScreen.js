import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import wrappedScreen from './AppScreen';
import styles from '../themes/Application';

class MainScreen extends Component {

  static navigationOptions = {
    header: null,
  };

  render() {
    return(
      <View>
        <Text>Main Screen Bitch!</Text>
      </View>
    );
  }
}

export default wrappedScreen(MainScreen);
