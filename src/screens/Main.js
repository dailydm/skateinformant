import React, { PureComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Permissions from 'expo-permissions'

import ListenButton from '../components/ListenButton';
import SongRecognizer from '../modules/SongRecognizer';
import wrappedScreen from './AppScreen';

class Main extends PureComponent {
  static navigationOptions = {
    header: null,
  };

  async recognizeSongAsync() {
    const { status, permissions } = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
    if ( status === "granted" ) {

      let song = await SongRecognizer.startRecognitionAsync();

      console.log(song);

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
