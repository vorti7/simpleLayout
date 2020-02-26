import React,{
  useState,
  useEffect
} from 'react';
import {
  View,
  Animated
} from 'react-native';
  
  
const ExtraViewLayout = (props) => {

  const extraViewSize = props.extraViewSize ? props.extraViewSize : "50%"
  const mainViewSize = (100 - extraViewSize.substring(0, extraViewSize.length-1)) + "%"
  const animationSpeed = props.animationSpeed ? props.animationSpeed : 1000
  const extraViewTrigger = props.extraViewTrigger ? props.extraViewTrigger : false;
  const extraViewDirection = props.extraViewDirection ? props.extraViewDirection : "bottom";
  const ONLY100 = "100%"
  const ONLY0 = "0%"

  const [ animHeightValue, setAnimHeightValue] = useState(new Animated.Value(0))
  const [ animWidthValue, setAnimWidthValue] = useState(new Animated.Value(0))
  
  useEffect(()=>{
    if(extraViewTrigger){
      if(extraViewDirection=="top"){
        topViewOut()
      }else if(extraViewDirection=="bottom"){
        bottomViewOut()
      }else if(extraViewDirection=="left"){
        leftViewOut()
      }else if(extraViewDirection=="right"){
        rightViewOut()
      }else {
      }
    } else {
      defaultShow()
    }
  },[animWidthValue, animHeightValue, props.extraViewTrigger])

  const topViewHeight = animHeightValue.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [ONLY0, ONLY0, extraViewSize]
  })
  const bottomViewHeight = animHeightValue.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [extraViewSize, ONLY0, ONLY0]
  })
  const leftViewWidth = animWidthValue.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [ONLY0, ONLY0, extraViewSize]
  })
  const rightViewWidth = animWidthValue.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [extraViewSize, ONLY0, ONLY0]
  })

  const mainViewWidth = animWidthValue.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [mainViewSize, ONLY100, mainViewSize]
  })
  const mainViewHeight = animHeightValue.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [mainViewSize, ONLY100, mainViewSize]
  })

  const topViewOut = () => {
    Animated.timing(
      animHeightValue,
    {
        toValue: 1,
        duration: animationSpeed,
    }
    ).start();
  }

  const bottomViewOut = () => {
    Animated.timing(
      animHeightValue,
    {
        toValue: -1,
        duration: animationSpeed,
    }
    ).start();
  }

  const leftViewOut = () => {
    Animated.timing(
      animWidthValue,
    {
        toValue: 1,
        duration: animationSpeed,
    }
    ).start();
  }

  const rightViewOut = () => {
    Animated.timing(
      animWidthValue,
    {
        toValue: -1,
        duration: animationSpeed,
    }
    ).start();
  }

  const defaultShow = () => {
    Animated.timing(
      animHeightValue,
    {
        toValue: 0,
        duration: animationSpeed,
    }
    ).start();
    Animated.timing(
      animWidthValue,
    {
        toValue: 0,
        duration: animationSpeed,
    }
    ).start();
  }

  const enableExtraViewInside = () => {

  }

  const disableExtraViewInside = () => {

  }



  return (
    <View
      style={{
        flex:1,
        flexDirection:'column'
      }}
    >
      <Animated.View
        style={{
          // flex:1,
          width : ONLY100,
          height : topViewHeight, // Change Value ( Top / Bottom )
          backgroundColor : 'red'
        }}
      >
      </Animated.View>
      <Animated.View
        style={{
          width : ONLY100,
          height: mainViewHeight, // Change Value ( Top / Bottom )
          flexDirection:'row',
        }}
      >
        <Animated.View
          style={{
            width :leftViewWidth, // Change Value ( Left / Right )
            height:ONLY100,
            backgroundColor:'yellow'
          }}
        ></Animated.View>
        <Animated.View
          style={{
            width:mainViewWidth, // Change Value ( Left / Right )
            height:ONLY100,
          }}
        >
          {props.children}
        </Animated.View>
        <Animated.View
          style={{
            width:rightViewWidth, // Change Value ( Left / Right )
            height:ONLY100,
            backgroundColor:'green'
          }}
        ></Animated.View>

      </Animated.View>
      <Animated.View
        style={{
          width : ONLY100,
          height: bottomViewHeight, // Change Value ( Top / Bottom )
          backgroundColor:'blue'
        }}
      ></Animated.View>
    </View>
  );
};

export default ExtraViewLayout