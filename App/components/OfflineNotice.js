import React, { PureComponent } from 'react';
import { View, Text, NetInfo } from 'react-native';
import styles from '../styles/components/OfflineNotice';

const OfflineBanner = () => (
  <View style={styles.offlineContainer}>
    <Text style={styles.offlineText}>No Internet Connection</Text>
  </View>
);

export default class OfflineNotice extends PureComponent {

  state = {
    isConnected: true,
  }

  componentDidMount() {
    NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
  }

  handleConnectivityChange = isConnected => {
     this.setState({ isConnected });
  }

  render() {
    const { isConnected } = this.state;
    if (!isConnected) {
      return <OfflineBanner />;
    }
    return null;
  }
}
