import React,{
    useState,
    useEffect
  } from 'react';
  import {
    View,
    Text,
    TouchableOpacity
  } from 'react-native';
  import { HeaderLayout } from '../components'
  
  const Type01Screen = (props) => {

    return (
      <HeaderLayout
        componentId = {props.componentId}
        leftHeaderType = {"back"}
        // leftHeaderComponent = {
        //   <View
        //     style={{
        //       width:"100%",
        //       height:"100%",
        //       backgroundColor:'red'
        //     }}
        //   >
        //     <Text>Test Left Header</Text>
        //   </View>
        // }
        centerHeaderText = {"Center Title"}
        // centerHeaderComponent = {
        //   <View
        //     style={{
        //       width:"100%",
        //       height:"100%",
        //       backgroundColor:'green'
        //     }}
        //   >
        //     <Text>Test Center Header</Text>
        //   </View>
        // }
        rightHeaderType = {"close"}
        // rightHeaderComponent = {
        //   <View
        //     style={{
        //       width:"100%",
        //       height:"100%",
        //       backgroundColor:'blue'
        //     }}
        //   >
        //     <Text>Test Right Header</Text>
        //   </View>
        // }
      >
      
      </HeaderLayout>
    );
  };
  
  export default Type01Screen