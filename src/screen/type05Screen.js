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
  // const [position, setPosition] = useState([0,0])
  const [ gestureInfos, setGestureInfos ] = useState("")

  useEffect(() =>{
    console.log(position.current)
  }, [position.current])

  const panResponder = React.useMemo(() => PanResponder.create({
    onStartShouldSetPanResponderCapture: (evt, gestureState) => {
      return true
    },
    onPanResponderGrant: (evt, gestureState) => {
      console.log("gesture started")
      console.log(position.current.getLayout())
      // console.log(5)
      // console.log(gestureState)
    },
    onPanResponderMove: Animated.event([null, {
      dx  : position.current.x,
      dy  : position.current.y
    }]),
    onPanResponderRelease: (evt, gestureState) => {
      console.log("gesture done")
      // console.log(7)
      // console.log(gestureState)
      // console.log(position.current.getLayout())
      // setPosition(new Animated.ValueXY({ x: position.current.getLayout().left, y: position.current.getLayout().top }))
      Animated.spring(
        position.current,
        {toValue:{x:0,y:0}}
      ).start();
    },
    // onShouldBlockNativeResponder: (evt, gestureState) => {
    //   console.log(9)
    //   // console.log(gestureState)
    //   return true;
    // },
  }), []);

  return (
    <View
      style={[styles.main]}
    >
      <Animated.View
        style={[position.current.getLayout(), styles.testView]}
        collapsable={false} // need to get android gesture
        {...panResponder.panHandlers}
      >

      </Animated.View>
    </View>
  )
};

let styles = StyleSheet.create({
  main:{
    flex:1
  },
  testView:{
    width:200,
    height:150,
    backgroundColor:'green'
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
  }
});
  
export default Type05Screen