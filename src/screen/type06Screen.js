import React,{
  useState,
  useEffect,
  useRef
} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import { AbsoluteComponent } from '../components'

const Type06Screen = (props) => {

  const [ componentX, setComponentX ] = useState(0)
  const [ componentY, setComponentY ] = useState(0)
  const [ show, setShow ] = useState(false)

  return (
    <View
      style={[styles.main]}
    >
      <AbsoluteComponent
        x={isNaN(componentX)?0:componentX*1}
        y={isNaN(componentY)?0:componentY*1}
        show={show}
      >
        <Image
          style={{width: 250, height: 250}}
          source={{uri: 'https://thumbs.gfycat.com/GoodnaturedCleverGroundbeetle-size_restricted.gif'}}
        />
      </AbsoluteComponent>
      <TextInput
        placeholder={"X"}
        style={{ height: 40, width: '80%', borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => {
          setComponentX(text)
        }}
        value={componentX}
      />
      <TextInput
        placeholder={"Y"}
        style={{ height: 40, width: '80%', borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => {
          setComponentY(text)
        }}
        value={componentY}
      />
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
        onPress={() => setShow(!show)}
      >
        <Text
          style={{fontWeight:'bold'}}
        >
          Show
        </Text>
      </TouchableOpacity>
    </View>
  )
};

let styles = StyleSheet.create({
  main:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  }
});
  
export default Type06Screen