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
  
  const Type05Screen = (props) => {

    return (
      <View
        style={{
          flex:1,
          alignItems:'center',
          justifyContent:'center',
        }}
      >
        <Text>Type Screen05</Text>
      </View>
    );
  };
  
  export default Type05Screen