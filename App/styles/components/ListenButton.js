import React from 'react';
import { StyleSheet } from 'react-native';
import Colors from '../Colors';

const styles = StyleSheet.create({
  listenButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff8181',
    color: Colors.white,
    width: 120,
    height: 120,
    overflow: 'hidden',
    borderRadius: 60,
  }
});

export default styles;
