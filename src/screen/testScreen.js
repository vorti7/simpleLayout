import React,{
    useState,
    useEffect
  } from 'react';
  import {
    View,
    Text,
    TouchableOpacity
  } from 'react-native';
  
  const TestScreen = (props) => {

    return (
      <View
        style={{
          flex:1,
          alignItems:'center',
          justifyContent:'center'
        }}
      >
        <Text>Test Screen</Text>
      </View>
    );
  };
  
  export default TestScreen