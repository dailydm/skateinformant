import { createStackNavigator, createAppContainer } from 'react-navigation';

import Main from './screens/Main';
import Result from './screens/Result';

const AppNavigation = createStackNavigator(
  {
    Main,
    Result,
  },
  {
    initialRouteName: 'Main',
  },
);

export default createAppContainer(AppNavigation);
