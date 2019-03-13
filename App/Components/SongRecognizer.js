import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, View } from 'react-native';

const SongRecongizer = ({ handleStart, handleStop }) => (
  <View>
    <Button onPress={handleStart} title="Start" />
    <Button onPress={handleStop} title="Stop" />
  </View>
);

SongRecongizer.propTypes = {
  handleStart: PropTypes.func.isRequired,
  handleStop: PropTypes.func.isRequired,
};

export default SongRecongizer;
