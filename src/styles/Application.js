import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import Colors from './Colors';

export default StyleSheet.create({
  applicationView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: Colors.lightGrey,
  },
});
