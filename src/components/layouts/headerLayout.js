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
        flex:1
      }}
    >
      <View
        style={{
          flex:1,
          flexDirection:'row',
          backgroundColor:'red'
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
          flex:5
        }}
      >
        {props.children}
      </View>
    </View>
  );
};

export default HeaderLayout