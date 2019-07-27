import React, { PureComponent } from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/components/ListenButton';

class ListenButton extends PureComponent {
  render(){
    return(
      <TouchableOpacity style={styles.listenButton}>
        <Text>Start Listening!</Text>
      </TouchableOpacity>

    );
  }
}

export default ListenButton;
