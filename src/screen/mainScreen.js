import React,{
    useState,
    useEffect
  } from 'react';
  import {
    View,
    Text,
    TouchableOpacity
  } from 'react-native';
  import { ScreenConst, Navigator } from '../navigation'
  
  const MainScreen = (props) => {

    const showTest = () => {
      Navigator.pushScreen(props.componentId, ScreenConst.SCREEN_TEST)
    }
    const showType01 = () => {
      Navigator.pushScreen(props.componentId, ScreenConst.SCREEN_TYPE_01)
    }
    const showType02 = () => {
      Navigator.pushScreen(props.componentId, ScreenConst.SCREEN_TYPE_02)
    }
    const showType03 = () => {
      Navigator.pushScreen(props.componentId, ScreenConst.SCREEN_TYPE_03)
    }
    const showType04 = () => {
      Navigator.pushScreen(props.componentId, ScreenConst.SCREEN_TYPE_04)
    }
    const showType05 = () => {
      Navigator.pushScreen(props.componentId, ScreenConst.SCREEN_TYPE_05)
    }

    return (
      <View
        style={{
          flex:1,
          alignItems:'center',
          justifyContent:'center'
        }}
      >
        <Text>Main Screen</Text>
        <TouchableOpacity
          style={{
              height: 40,
              width: '80%',
              backgroundColor: 'gray',
              borderWidth: 1,
              margin:'2.5%',
              paddingTop:5,
              alignItems:'center',
              justifyContent:'center'
          }}
          onPress={() => showTest()}
        >
          <Text
            style={{fontWeight:'bold'}}
          >
            Test
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
              height: 40,
              width: '80%',
              backgroundColor: 'gray',
              borderWidth: 1,
              margin:'2.5%',
              paddingTop:5,
              alignItems:'center',
              justifyContent:'center'
          }}
          onPress={() => showType01()}
        >
          <Text
            style={{fontWeight:'bold'}}
          >
            Type01
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
              height: 40,
              width: '80%',
              backgroundColor: 'gray',
              borderWidth: 1,
              margin:'2.5%',
              paddingTop:5,
              alignItems:'center',
              justifyContent:'center'
          }}
          onPress={() => showType02()}
        >
          <Text
            style={{fontWeight:'bold'}}
          >
            Type02
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
              height: 40,
              width: '80%',
              backgroundColor: 'gray',
              borderWidth: 1,
              margin:'2.5%',
              paddingTop:5,
              alignItems:'center',
              justifyContent:'center'
          }}
          onPress={() => showType03()}
        >
          <Text
            style={{fontWeight:'bold'}}
          >
            Type03
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
              height: 40,
              width: '80%',
              backgroundColor: 'gray',
              borderWidth: 1,
              margin:'2.5%',
              paddingTop:5,
              alignItems:'center',
              justifyContent:'center'
          }}
          onPress={() => showType04()}
        >
          <Text
            style={{fontWeight:'bold'}}
          >
            Type04
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
              height: 40,
              width: '80%',
              backgroundColor: 'gray',
              borderWidth: 1,
              margin:'2.5%',
              paddingTop:5,
              alignItems:'center',
              justifyContent:'center'
          }}
          onPress={() => showType05()}
        >
          <Text
            style={{fontWeight:'bold'}}
          >
            Type05
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  export default MainScreen