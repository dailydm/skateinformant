import React from 'react';
import { Text, View } from 'react-native';

import wrappedScreen from './AppScreen';
import styles from '../themes/Application';

const ResultScreen = () => (
  <View>
    <Text>Result Screen Bitch!</Text>
  </View>
);

export default wrappedScreen(ResultScreen);
