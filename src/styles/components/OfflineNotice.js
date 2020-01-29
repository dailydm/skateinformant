import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';

import Colors from '../Colors';
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  offlineContainer: {
    backgroundColor: Colors.danger,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width,
    position: 'absolute',
    top: Constants.statusBarHeight,
  },
  offlineText: { color: Colors.white },
});

export default styles;
