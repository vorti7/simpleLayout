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
  // const position = useRef(new Animated.ValueXY());
  const [position, setPosition] = useState(new Animated.ValueXY());
  // const [position, setPosition] = useState([0,0])
  const [ gestureInfos, setGestureInfos ] = useState("")

  useEffect(() =>{
    console.log(position)
  }, [position])

  const panResponder = React.useMemo(() => PanResponder.create({
    onStartShouldSetPanResponderCapture: (evt, gestureState) => {
      return true
    },
    onPanResponderGrant: (evt, gestureState) => {
      console.log("gesture started")
      position.setOffset(position.__getValue());
      // console.log(position.__getValue())
      position.setValue({x: 0, y: 0})
    },
    onPanResponderMove: Animated.event([null, {
      dx  : position.x,
      dy  : position.y
    }]),
    onPanResponderRelease: (evt, gestureState) => {
      console.log("gesture done")
    },
  }), []);

  return (
    <View
      style={[styles.main]}
    >
      <Animated.View
        style={[position.getLayout(), styles.testView]}
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