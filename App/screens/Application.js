import React, { Component } from 'react';
import { View } from 'react-native';

import styles from '../themes/Application';

// This is a HOC that takes a screen and
// wraps it with the application styles, error
// messages, and anything else that are common to all
// the screens of the application
const wrappedScreen = WrappedComponent => {
  class ApplicationScreen extends Component {
    render() {
      return (
        <View style={styles.applicationView}>
          <WrappedComponent {...this.props} />
        </View>
      );
    }
  }
  return ApplicationScreen;
}

export default wrappedScreen;
