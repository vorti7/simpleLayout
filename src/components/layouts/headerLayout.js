import React,{
  useState,
  useEffect
} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import { ScreenConst, Navigator } from '../../navigation'


const HeaderLayout = (props) => {

  const headerPosition = props.headerPosition? props.headerPosition:"relative"
  const headerSize = props.headerSize? props.headerSize : "20%"
  const relativeMainViewHeight = (100 - headerSize.substring(0, headerSize.length-1)) + "%"
  const headerColor = props.headerColor? props.headerColor:"white"
  
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
      <View
        style={{
          width:"100%",
          height:"20%",
          opacity:props.headerVisible?1:0,
          backgroundColor:headerColor,
          position: headerPosition,
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
      </View>
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

export default HeaderLayout