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

const IntroScreen = (props) => {

  const passScreen = () => {
    Navigator.setRootScreen(ScreenConst.SCREEN_MAIN)
  }

  const passScreen2 = () => {
    Navigator.setRootScreen(ScreenConst.SCREEN_NOTUSE_MAIN)
  }

  const passScreen3 = () => {
    Navigator.setRootScreen(ScreenConst.SCREEN_CASE_MAIN)
  }

  return (
    <View
      style={{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
      }}
    >
      <Text>Intro Screen</Text>
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
        onPress={() => passScreen()}
      >
        <Text
          style={{fontWeight:'bold'}}
        >
          Go
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
        onPress={() => passScreen2()}
      >
        <Text
          style={{fontWeight:'bold'}}
        >
          Components not used
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
        onPress={() => passScreen3()}
      >
        <Text
          style={{fontWeight:'bold'}}
        >
          Case
        </Text>
      </TouchableOpacity>
    </View>
  );
};
  
export default IntroScreen