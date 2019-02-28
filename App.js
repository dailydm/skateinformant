import React from 'react';
import { StyleSheet, View } from 'react-native';

import RootContainer from './App/Containers/RootContainer';

const App = () => (
  <View style={styles.container}>
    <RootContainer />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

export default App;
