import React,{
  useState,
  useEffect
} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated
} from 'react-native';
import { ScreenConst, Navigator } from '../../navigation'


const HeaderLayout = (props) => {

  const headerPosition = props.headerPosition? props.headerPosition:"relative"
  // const [headerSize, bodySize, iosExtraSize] = props.headerSize? getSize[props.headerSize] : getSize["20%"]
  const iosSize = Platform.OS === 'ios' ? "3%" : "0%"
  const headerSize = Platform.OS === 'ios' ? (props.headerSize? (props.headerSize.substring(0,props.headerSize.length-1)-1)+"%" : "19%") : props.headerSize? props.headerSize : "20%"
  const relativeMainViewHeight = Platform.OS === 'ios' ? (100 - headerSize.substring(0, headerSize.length-1)-2) + "%" : "78%"
  const headerColor = props.headerColor? props.headerColor:"white"

  const [animValue, setAnimValue] = useState(new Animated.Value(props.headerVisible? 1:0))
  const headerVisibleValue = animValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1]
  })

  useEffect(()=>{
    // console.log(props.headerVisible)
      if(props.headerVisible){
        Animated.timing(
          animValue,
        {
            toValue: 1,
            duration: 300,
        }
        ).start();
      } else {
        console.log("off")
        Animated.timing(
          animValue,
        {
            toValue: 0,
            duration: 300,
        }
        ).start();
      }
  },[props.headerVisible])
  
  const getLeftComponent = () => {
    if (props.leftHeaderType&&props.leftHeaderComponent){
      console.log("LeftHeaderType & LeftHeaderComponent Duplicated.")
    }
    const leftHeaderComponent = props.leftHeaderComponent ? props.leftHeaderComponent : ""
    if (leftHeaderComponent) {
      return leftHeaderComponent
    }{
      if (props.leftHeaderType=="back"){
        return (
          <TouchableOpacity
            onPress = {() => Navigator.popScreen(props.componentId)}
          >
            <Image
              source={require('../../images/back.png')}
              style={{width: 25, height: 25}}
            />
          </TouchableOpacity>
        )
      }
    }
  }
  
  const getCenterComponent = () => {
    if (props.centerHeaderText&&props.centerHeaderComponent){
      console.log("centerHeaderText & centerHeaderComponent Duplicated.")
    }
    const centerHeaderComponent = props.centerHeaderComponent ? props.centerHeaderComponent : ""
    if (centerHeaderComponent) {
      return centerHeaderComponent
    } else {
      const centerHeaderText = props.centerHeaderText ? props.centerHeaderText : ""
      return (
        <View>
          <Text>
            {centerHeaderText}
          </Text>
        </View>
      )
    }
  }

  const getRightComponent = () => {
    if (props.rightHeaderType&&props.rightHeaderComponent){
      console.log("RightHeaderType & RightHeaderComponent Duplicated.")
    }
    const rightHeaderComponent = props.rightHeaderComponent ? props.rightHeaderComponent : ""
    if (rightHeaderComponent) {
      return rightHeaderComponent
    }{
      if (props.rightHeaderType=="close"){
        return (
          <TouchableOpacity
            onPress = {() => Navigator.popScreen(props.componentId)}
          >
            <Image
              source={require('../../images/close.png')}
              style={{width: 25, height: 25}}
            />
          </TouchableOpacity>
        )
      }
    }
  }

  return (
    <View
      style={{
        flex:1,
        zIndex:0
      }}
    >
      <Animated.View
        style={{
          width:"100%",
          height:iosSize,
          opacity:headerVisibleValue,
          backgroundColor:headerColor,
          position: headerPosition,
          zIndex:2
        }}
      />
      <Animated.View
        style={{
          width:"100%",
          height:headerSize,
          opacity:headerVisibleValue,
          backgroundColor:headerColor,
          position: headerPosition,
          top : headerPosition? iosSize : "0%",
          flexDirection:'row',
          zIndex:2
        }}
      >
        <View
          style={{
            flex:1,
            alignItems:'center',
            justifyContent:'center'
          }}
        >
          {getLeftComponent()}
        </View>

        <View
          style={{
            flex:3,
            alignItems:'center',
            justifyContent:'center'
          }}
        >
          {getCenterComponent()}
        </View>

        <View
          style={{
            flex:1,
            alignItems:'center',
            justifyContent:'center'
          }}
        >
          {getRightComponent()}
        </View>
      </Animated.View>
      <View
        style = {{
          width:"100%",
          height: headerPosition=="absolute"? "100%" : relativeMainViewHeight,
          zIndex:1
        }}
      >
        {props.children}
      </View>
    </View>
  );
};


// const getSize = (inputHeaderSize) => {
//   const headerSize = Platform.OS === 'ios' ? (inputHeaderSize.substring(0, inputHeaderSize.length-1) - 1) + "%" : inputHeaderSize
//   const bodySize = Platform.OS === 'ios' ? (100 - headerSize.substring(0, headerSize.length-1) - 3) + "%" : (100 - headerSize.substring(0, headerSize.length-1)) + "%"
//   const iosExtraSize = Platform.OS === 'ios' ? "0%" : "4%"

//   return [headerSize, bodySize, iosExtraSize]
// }

export default HeaderLayout