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
  Navigation.registerComponent(Const.SCREEN_TYPE_07, () =>
    Screens.TypeScreen07
  );


  Navigation.registerComponent(Const.SCREEN_NOTUSE_MAIN, () =>
    Screens.NotUsedMainScreen
  );
  Navigation.registerComponent(Const.SCREEN_NOTUSE_TYPE_01, () =>
    Screens.NotUsedTypeScreen01
  );
  Navigation.registerComponent(Const.SCREEN_NOTUSE_TYPE_02, () =>
    Screens.NotUsedTypeScreen02
  );


  Navigation.registerComponent(Const.SCREEN_CASE_MAIN, () =>
    Screens.CaseMainScreen
  );
  Navigation.registerComponent(Const.SCREEN_CASE_TYPE_01, () =>
    Screens.CaseScreen01
  );
  Navigation.registerComponent(Const.SCREEN_CASE_TYPE_02, () =>
    Screens.CaseScreen02
  );
  Navigation.registerComponent(Const.SCREEN_CASE_TYPE_03, () =>
    Screens.CaseScreen03
  );
  Navigation.registerComponent(Const.SCREEN_CASE_TYPE_04, () =>
    Screens.CaseScreen04
  );
  Navigation.registerComponent(Const.SCREEN_CASE_TYPE_05, () =>
    Screens.CaseScreen05
  );
  Navigation.registerComponent(Const.SCREEN_CASE_TYPE_06, () =>
    Screens.CaseScreen06
  );
  Navigation.registerComponent(Const.SCREEN_CASE_TYPE_07, () =>
    Screens.CaseScreen07
  );
  Navigation.registerComponent(Const.SCREEN_CASE_TYPE_08, () =>
    Screens.CaseScreen08
  );



  Navigation.registerComponent(Const.SCREEN_LOADING, () =>
    Screens.LoadingScreen
  );

  Navigation.registerComponent(Const.SCREEN_REQUEST_DETAIL, () =>
    Screens.RequestDetailScreen
  )

  Navigation.registerComponent(Const.SCREEN_DETAIL_LOCATION, () =>
    Screens.GetLocationScreen
  )
}
