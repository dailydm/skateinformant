import React from 'react';
import { Text, View } from 'react-native';
import { Permissions } from 'expo';

import Acrcloud from '../Lib/NativeModules';
import AudioComponent from '../Components/SongRecognizer';
import Api from '../Lib/Api';
// import styles from './src/themes/ApplicationStyles';

export default class MainScreen extends React.Component {
  constructor() {
    super();
    this.handleStart = this.handleStart.bind(this);
    this.handleEnd = this.handleEnd.bind(this);
    this.handleCancel = this.handleCancel.bind(this);

    Acrcloud.initACRCloud(
      {
        host: 'identify-us-west-2.acrcloud.com',
        accessKey: 'e0d894343af60d9072c00a7da7488e09',
        accessSecret: 'NRCM0LZhBM9P9BRpDrCBsLOOGDam6RsDRDq7wMIK',
      },
      error => {
        console.log(`Error: ${error}`);
      }
    );

    this.state = {
      haveRecordingPermissions: false,
      songs: [],
    };
  }

  async requestPermissions() {
    const response = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
    this.setState({
      haveRecordingPermissions: response.status === 'granted',
    });
  }

  async recognizeSong() {
    const { navigation } = this.props;
    console.log('Starting recognition');

    let response = await Acrcloud.startRecognition();
    response = response[0];

    if (response.status.code === 0) {
      this.setState({ songs: response.metadata.music });

      let song = response.metadata.music[0];
      let params = {
        song: {
          acrid: song.acrid,
          artist: song.artists[0].name,
          title: song.title,
        },
      };

      Api.post('/video_parts/search', params)
        .then(resp => {
          console.log(resp);
          navigation.navigate('Result', {
            songs: this.state.songs,
            videoParts: resp,
          });
        })
        .catch(ex => {
          console.log(ex);
        });
    } else {
      console.log('big problems');
    }

    // navigation.navigate('Result', { songs });
    //console.log('Results are in! ', song);
  }

  handleStart() {
    const { haveRecordingPermissions } = this.state;
    if (haveRecordingPermissions) {
      this.recognizeSong();
    } else {
      this.requestPermissions();
    }
  }

  handleEnd() {
    console.log('Stopping recognition...');
    Acrcloud.stopRecognition();
  }

  handleCancel() {
    Acrcloud.cancelRecognition();
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <AudioComponent
          handleStart={this.handleStart}
          handleStop={this.handleEnd}
        />
      </View>
    );
  }
}
