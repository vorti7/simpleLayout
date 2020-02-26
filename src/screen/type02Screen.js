import React,{
    useState,
    useEffect
  } from 'react';
  import {
    View,
    Text,
    TouchableOpacity
  } from 'react-native';
  import { ExtraViewLayout } from '../components'
  
  const Type02Screen = (props) => {
    const [extraViewTrigger, setExtraViewTrigger] = useState(false)

    const showExtra = () => {
      console.log(extraViewTrigger)
      if(extraViewTrigger){
        setExtraViewTrigger(false)
      }else {
        setExtraViewTrigger(true)
      }
    }

    return (
      <ExtraViewLayout
        componentId = {props.componentId}
        extraViewSize = {"40%"}
        animationSpeed = {3000}
        extraViewDirection = {"top"}
        extraViewTrigger = {extraViewTrigger}
        extraView = {
          <View>
            <Text>Extra View Testing</Text>
          </View>
        }
      >
        <View><Text>Hello</Text></View>
        <TouchableOpacity
          onPress={() => showExtra()}
        >
          <Text>Show Extra View</Text>
        </TouchableOpacity>
      </ExtraViewLayout>
    );
  };
  
  export default Type02Screen