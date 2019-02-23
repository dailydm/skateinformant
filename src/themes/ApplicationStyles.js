import { StyleSheet } from 'react-native';
import { Constants } from 'expo';

import Colors from './Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: Colors.lightGrey,
  },
});
