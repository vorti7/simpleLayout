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

const Type04Screen = (props) => {

  const showOverlay = () =>{
    Navigator.showOverlay(ScreenConst.SCREEN_LOADING, "testID")
    setTimeout(() => {
        Navigator.dismissOverlay("testID")
    }, 3000)
  }

  return (
    <View
      style={{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'yellow'
      }}
    >
      <Text>Type Screen04</Text>
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
        onPress={() =>showOverlay()}
      >
        <Text
          style={{fontWeight:'bold'}}
        >
          Show Overlay
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Type04Screen