import React, { Component } from 'react';
import { View } from 'react-native';
import hoistNonReactStatics from 'hoist-non-react-statics';

import OfflineNotice from '../components/OfflineNotice';
import styles from '../themes/Application';

// This is a HOC that takes a screen and
// wraps it with the application styles, error
// messages, and anything else that are common to all
// the screens of the application
const wrappedScreen = WrappedComponent => {
  class AppScreen extends Component {
    render() {
      return (
        <View style={styles.applicationView}>
          <OfflineNotice />
          <WrappedComponent {...this.props} />
        </View>
      );
    }
  }
  hoistNonReactStatics(AppScreen, WrappedComponent);
  return AppScreen;
}

export default wrappedScreen;
