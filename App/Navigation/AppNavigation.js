import { createStackNavigator, createAppContainer } from 'react-navigation';

import MainScreen from '../Containers/MainScreen';
import ResultScreen from '../Containers/ResultScreen';

const PrimaryNav = createStackNavigator(
  {
    Main: MainScreen,
    Result: ResultScreen,
  },
  {
    initialRouteName: 'Main',
  }
);

export default createAppContainer(PrimaryNav);
