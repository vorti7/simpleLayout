import React from 'react';
import { StyleSheet, View, Text, Dimensions, Animated, PanResponder, TouchableOpacity } from 'react-native';

import { ScreenConst, Navigator } from '../navigation'

export default function RequestDetailScreen(props) {
  // console.log(props.componentId)
  console.log(props.data)
  return (
    <View style={{
      flex:1,
      alignItems:"center",
      justifyContent:"center",
      backgroundColor:"rgba(0,0,0,0.5)"
    }}>
      <TouchableOpacity
        style={{
          width:"100%",
          height:"100%"
        }}
        onPress={() => Navigator.dismissOverlay(props.componentId)}
      />
      <View
        style={{
          position:"absolute",
          width:"80%",
          height:"80%",
          backgroundColor:"#FFFFFF"
        }}
      >
        <TouchableOpacity
          onPress={()=> props.data.testFunc()}
        >
          <Text>click</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}