import React,{
  useState,
  useEffect,
  useRef
} from 'react';
import {
  View,
  Text,
  Animated,
  PanResponder,
  StyleSheet
} from 'react-native';
import { ScreenConst, Navigator } from '../navigation'

const TestTouchScreen = (props) => {
  const position = useRef(new Animated.ValueXY());
  const [ gestureInfos, setGestureInfos ] = useState("")

  const panResponder = React.useMemo(() => PanResponder.create({
    // Ask to be the responder:
    onStartShouldSetPanResponder: (evt, gestureState) => {
      console.log(1)
      return true
    },
    onStartShouldSetPanResponderCapture: (evt, gestureState) => {
      console.log(2)
      return true
    },
    onMoveShouldSetPanResponder: (evt, gestureState) => {
      console.log(3)
      return true
    },
    onMoveShouldSetPanResponderCapture: (evt, gestureState) => {
      console.log(4)
      return true
    },

    onPanResponderGrant: (evt, gestureState) => {
      // The gesture has started. Show visual feedback so the user knows
      // what is happening!
      // gestureState.d{x,y} will be set to zero now
      console.log(5)
      // console.log(gestureState)
    },
    onPanResponderMove: (evt, gestureState) => {
      // The most recent move distance is gestureState.move{X,Y}
      // The accumulated gesture distance since becoming responder is
      // gestureState.d{x,y}
      console.log(6)
      setGestureInfos(JSON.stringify(gestureState))
      // console.log("----------------------------------------------------")
      // // console.log(gestureState.x0, gestureState.moveX)
      // // console.log(gestureState.y0, gestureState.moveY)
      // if(gestureState.moveY - gestureState.y0 > 0) {
      //   console.log("gesture down")
      // }else{
      //   console.log("gesture up")
      // }
      // console.log("----------------------------------------------------")
    },
    onPanResponderTerminationRequest: (evt, gestureState) => {
      console.log(0)
      // console.log(gestureState)
    },
    onPanResponderRelease: (evt, gestureState) => {
      // The user has released all touches while this view is the
      // responder. This typically means a gesture has succeeded
      console.log(7)
      // console.log(gestureState)
    },
    onPanResponderTerminate: (evt, gestureState) => {
      // Another component has become the responder, so this gesture
      // should be cancelled
      console.log(8)
      // console.log(gestureState)
    },
    onShouldBlockNativeResponder: (evt, gestureState) => {
      // Returns whether this component should block native components from becoming the JS
      // responder. Returns true by default. Is currently only supported on android.
      console.log(9)
      // console.log(gestureState)
      return true;
    },
  }), []);

  return (
    <View
      style={[styles.main]}
      collapsable={false} // need to get android gesture
      {...panResponder.panHandlers}
    >
      <Text>
        {gestureInfos}
      </Text>
      {/* <View
        style={[styles.innerMain]}
        {...panResponder.panHandlers}
      >

      </View> */}
    </View>
  )
};

let styles = StyleSheet.create({
  main:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  innerMain:{
    width:"100%",
    height:"100%",
    alignItems:'center',
    justifyContent:'center',
  },
  animatedView: {
    width:200,
    height:150,
    backgroundColor:'#6B70D6',
    alignItems:'center',
    justifyContent:'center',
  }
});
  
export default TestTouchScreen
