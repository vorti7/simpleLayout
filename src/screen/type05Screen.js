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

const Type05Screen = (props) => {
  const position = useRef(new Animated.ValueXY());
  
  const panResponder = React.useMemo(() => PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (e, gesture) => {
      console.log(gesture)
    }
  }), []);


  return (
    <View
      style={[styles.main]}
      {...panResponder.panHandlers}
    >
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
  
  export default Type05Screen