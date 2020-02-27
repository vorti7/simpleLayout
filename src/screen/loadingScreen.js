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

    return (
      <View
        style={{
          flex:1,
          alignItems:'center',
          justifyContent:'center',
          backgroundColor:'rgba(0,0,0,0.5)',
        }}
      >
        <View
          style={{
            width:"100%",
            height:"100%",
            // backgroundColor:'rgba(0,0,0,0.2)',
            // opacity:0.1
          }}
        >

        </View>
        <View
          style={{
            width:200,
            height:200,
            backgroundColor:"red",
            position:'absolute',
            alignItems:'center',
            justifyContent:'center',
          }}
        >
          <Text>Loading...</Text>
        </View>
      </View>
    );
  };
  
  export default MainScreen