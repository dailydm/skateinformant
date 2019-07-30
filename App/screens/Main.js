import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Permissions from 'expo-permissions'

import ListenButton from '../components/ListenButton';
import SongRecognizer from '../modules/SongRecognizer';
import wrappedScreen from './AppScreen';

class Main extends Component {
  static navigationOptions = {
    header: null,
  };

  async recognizeSongAsync() {
    const { status, permissions } = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
    if ( status === "granted" ) {
      new SongRecognizer().startRecognition();
    } else {
      console.log('No Permissions Yet');
    }
  }

  render() {
    return(
      <View>
        <ListenButton handlePress={this.recognizeSongAsync} />
      </View>
    );
  }
}

export default wrappedScreen(Main);
