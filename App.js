import React from 'react';
import { NativeModules, Text, View } from 'react-native';
import { Acrcloud } from './src/libs/native_modules';
//let Acrcloud = NativeModules.Acrcloud;

import styles from './src/themes/ApplicationStyles';

export default class App extends React.Component {
  componentDidMount() {
    Acrcloud.initACRCloud(
      {
        host: 'xxx',
        accessKey: 'xxx',
        accessSecret: 'xxx',
      },
      error => {
        console.log(`Error: ${error}`);
      }
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}
