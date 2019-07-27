import React, { PureComponent } from 'react';
import { View, Text, NetInfo, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

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

const styles = StyleSheet.create({
  offlineContainer: {
    backgroundColor: '#b52424',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width,
    position: 'absolute',
    top: 30
  },
  offlineText: { color: '#fff' }
});
