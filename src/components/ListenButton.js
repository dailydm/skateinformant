import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/components/ListenButton';

class ListenButton extends PureComponent {
  render() {
    const { handlePress } = this.props;
    return(
      <TouchableOpacity onPress={handlePress} style={styles.listenButton}>
        <Text>Start Listening!</Text>
      </TouchableOpacity>

    );
  }
}

ListenButton.propTypes = {
  handlePress: PropTypes.func.isRequired,
}

export default ListenButton;
