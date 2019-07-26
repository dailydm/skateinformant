import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import styles from '../themes/Application';

export default class Main extends React.Component {

  render() {
    return (
      <View style={styles.applicationView}>
        <Text>Main Screen Bitch!</Text>
      </View>
    );
  }
}
