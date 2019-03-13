import React from 'react';
import { Text, View } from 'react-native';

export default class ResultScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    const songs = navigation.getParam('songs', []);
    const videoParts = navigation.getParam('videoParts', []);

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Results are in!!!!</Text>
        <Text>{JSON.stringify(songs, null, 2)}</Text>
        <Text>{JSON.stringify(videoParts, null, 2)}</Text>
      </View>
    );
  }
}
