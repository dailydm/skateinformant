import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ListenButton from '../components/ListenButton';
import wrappedScreen from './AppScreen';

class Main extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return(
      <View>
        <ListenButton />
      </View>
    );
  }
}

export default wrappedScreen(Main);
