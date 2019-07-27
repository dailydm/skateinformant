import React from 'react';
import { Text, View } from 'react-native';

import wrappedScreen from './AppScreen';

const ResultScreen = () => (
  <View>
    <Text>Result Screen Bitch!</Text>
  </View>
);

export default wrappedScreen(ResultScreen);
