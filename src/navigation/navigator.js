import { Navigation } from "react-native-navigation";

import * as Const from './const';
import * as Screen from '../screen';
import registerScreens from './register';

export default {
    // registerScreens() {
    //     Navigation.registerComponent(Const.TV_INTRO, () => Screen.IntroScreen);
    // },

    startApp() {
      // this.registerScreens()
      registerScreens()
      Navigation.events().registerAppLaunchedListener(() => {
        Navigation.setRoot({
          root: {
            component: {
              name: Const.SCREEN_INTRO
            }
          }
        });
      });
    },

    // targetScreen : The screen for root
    // passProps : props you want to pass
    // animation : animation(setRoot) type. (check Animations)
    setRootScreen(targetScreen, passProps, animation) {
      passProps = passProps ? passProps : {}
      animation = animation ? Animations[animation] : Animations.nothing

      // top bar disabled
      Navigation.setDefaultOptions({
        topBar: {
          // disable topbar
          visible: false,
          drawBehind: false,
        },
        // layout: {
        //   backgroundColor: '#4535AA',
        // }
      });

      Navigation.setRoot({
        root: {
          stack: {
            id: targetScreen,
            children: [
              {
                component: {
                  // name: Const.SCREEN_INDEX_HOME,
                  name: targetScreen,
                  passProps: passProps,
                  options:{
                    animations:{
                      setRoot:animation
                    }
                  }
                },
              },
            ],
          },
        },
      });
    },

    pushScreen(cmpId, targetScreen, passProps, animation) {
      passProps = passProps ? passProps : {}
      animation = animation ? pushPopAnimations[animation] : pushPopAnimations.nothing
      Navigation.push(cmpId, {
        component: {
          name: targetScreen,
          id: targetScreen,
          passProps: passProps, 
          options: {
            // animations: {
            //   push: Animations.leftIn,
            //   pop: Animations.leftOut
            // }
            animations: animation
          }
        }
      })
    },

    popScreen(cmpId) {
      Navigation.pop(cmpId)
    },

    showOverlay(targetScreen, targetId){
      Navigation.showOverlay({
        component: {
          name: targetScreen,
          id: targetId,
          options: {
            overlay: {
              interceptTouchOutside: true
            }
          }
        }
      });
    },

    dismissOverlay(targetId){
      Navigation.dismissOverlay(targetId);
    }
    
    // showModal(targetScreen, passProps, animation) {
    //   console.log(animation)
    //   passProps = passProps ? passProps : {};
    //   animation = animation
    //     ? modalAnimations[animation]
    //     : modalAnimations.nothing;
    //   Navigation.showModal({
    //     stack: {
    //       children: [
    //         {
    //           component: {
    //             name: targetScreen,
    //             passProps: passProps,
    //             options: {
    //               animations: animation,
    //               // topBar: {
    //               //   title: {
    //               //     text: 'Modal',
    //               //   },
    //               // },
    //             },
    //           },
    //         },
    //       ],
    //     },
    //   });
    // },

}



const Animations = {
  leftIn : {
    enabled: 'true',
    waitForRender: 'true',
    content:{
      x: {
        from: -1000,
        to: 0,
        duration: 250,
        interpolation: 'accelerate'
      }
    }
  },
  leftOut : {
    enabled: 'true',
    waitForRender: 'true',
    content:{
      x: {
        from: 0,
        to: -1000,
        duration: 250,
        interpolation: 'accelerate'
      }
    }
  },
  rightIn : {
    enabled: 'true',
    waitForRender: 'true',
    content:{
      x: {
        from: 1000,
        to: 0,
        duration: 250,
        interpolation: 'accelerate'
      }
    }
  },
  rightOut : {
    enabled: 'true',
    waitForRender: 'true',
    content:{
      x: {
        from: 0,
        to: 1000,
        duration: 250,
        interpolation: 'accelerate'
      }
    }
  },
  topIn : {
    enabled: 'true',
    waitForRender: 'true',
    content:{
      y: {
        from: 1000,
        to: 0,
        duration: 250,
        interpolation: 'accelerate'
      }
    }
  },
  topOut : {
    enabled: 'true',
    waitForRender: 'true',
    content:{
      y: {
        from: 0,
        to: 1000,
        duration: 250,
        interpolation: 'accelerate'
      }
    }
  },
  bottomIn : {
    enabled: 'true',
    waitForRender: 'true',
    content:{
      y: {
        from: -1000,
        to: 0,
        duration: 250,
        interpolation: 'accelerate'
      }
    }
  },
  bottomOut : {
    enabled: 'true',
    waitForRender: 'true',
    content:{
      y: {
        from: 0,
        to: -1000,
        duration: 250,
        interpolation: 'accelerate'
      }
    }
  },
  fadeIn : {
    enabled: 'true',
    waitForRender: 'true',
    content:{
      alpha: {
        from: 0,
        to: 1,
        duration: 1000
      }
    }
  },
  fadeOut : {
    enabled: 'true',
    waitForRender: 'true',
    content:{
      alpha: {
        from: 1,
        to: 0,
        duration: 1000
      }
    }
  },
  nothing : {
    enabled: 'false'
  }
}

const pushPopAnimations = {
  left : {
    push : Animations.leftIn,
    pop : Animations.leftOut
  },
  right : {
    push : Animations.rightIn,
    pop : Animations.rightOut
  },
  top : {
    push : Animations.topIn,
    pop : Animations.topOut
  },
  bottom : {
    push : Animations.bottomIn,
    pop : Animations.bottomOut
  },
  fade : {
    push : Animations.fadeIn,
    pop : Animations.fadeOut
  },
  nothing : {
    push : Animations.nothing,
    pop : Animations.nothing
  },
}

const modalAnimations = {
  left : {
    showModal : Animations.leftIn,
    dismissModal : Animations.leftOut
  },
  right : {
    showModal : Animations.rightIn,
    dismissModal : Animations.rightOut
  },
  top : {
    showModal : Animations.topIn,
    dismissModal : Animations.topOut
  },
  bottom : {
    showModal : Animations.bottomIn,
    dismissModal : Animations.bottomOut
  },
  fade : {
    showModal : Animations.fadeIn,
    dismissModal : Animations.fadeOut
  },
  nothing : {
    showModal : Animations.nothing,
    dismissModal : Animations.nothing
  },
}