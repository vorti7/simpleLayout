import { Navigation } from 'react-native-navigation';

import * as Const from './const';
import * as Screens from '../screen';

export default function registerScreens() {
  Navigation.registerComponent(Const.SCREEN_INTRO, () =>
    Screens.IntroScreen
  );
  Navigation.registerComponent(Const.SCREEN_MAIN, () =>
    Screens.MainScreen
  );
  Navigation.registerComponent(Const.SCREEN_TEST, () =>
    Screens.TestScreen
  );
  Navigation.registerComponent(Const.SCREEN_TEST_TOUCH, () => 
    Screens.testTouchScreen
  );
  Navigation.registerComponent(Const.SCREEN_TYPE_01, () =>
    Screens.TypeScreen01
  );
  Navigation.registerComponent(Const.SCREEN_TYPE_02, () =>
    Screens.TypeScreen02
  );
  Navigation.registerComponent(Const.SCREEN_TYPE_03, () =>
    Screens.TypeScreen03
  );
  Navigation.registerComponent(Const.SCREEN_TYPE_04, () =>
    Screens.TypeScreen04
  );
  Navigation.registerComponent(Const.SCREEN_TYPE_05, () =>
    Screens.TypeScreen05
  );
  Navigation.registerComponent(Const.SCREEN_TYPE_06, () =>
    Screens.TypeScreen06
  );


  Navigation.registerComponent(Const.SCREEN_LOADING, () =>
    Screens.LoadingScreen
  );
}
