import { createStackNavigator, createAppContainer } from 'react-navigation';

import MainScreen from './screens/MainScreen';
import ResultScreen from './screens/ResultScreen';

const AppNavigation = createStackNavigator(
  {
    MainScreen,
    ResultScreen,
  },
  {
    initialRouteName: 'MainScreen',
  },
);

export default createAppContainer(AppNavigation);
