import React from 'react';
import { Text, View } from 'react-native';
import Acrcloud from './src/libs/native_modules';

import styles from './src/themes/ApplicationStyles';

export default class App extends React.Component {
  componentDidMount() {
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
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}
