import React,{
    useState,
    useEffect
  } from 'react';
  import {
    View,
    Text,
    TouchableOpacity,
    Image
  } from 'react-native';
  import { ScreenConst, Navigator } from '../navigation'
  
  const MainScreen = (props) => {

    return (
      <View
        style={{
          flex:1,
          alignItems:'center',
          justifyContent:'center',
          backgroundColor:'rgba(51, 170, 51, .2)',
          // backgroundColor:'transparent'
        }}
      >
        {/* <View
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
        </View> */}
        <Image
          style={{width: 250, height: 250}}
          source={{uri: 'https://thumbs.gfycat.com/GoodnaturedCleverGroundbeetle-size_restricted.gif'}}
        />
      </View>
    );
  };
  
  export default MainScreen