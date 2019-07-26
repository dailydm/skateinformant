import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import wrappedScreen from './Application';
import styles from '../themes/Application';

const Main = () => (
  <View>
    <Text>Main Screen Bitch!</Text>
  </View>
);

export default wrappedScreen(Main);
