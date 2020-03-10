import React,{
  useState,
  useEffect
} from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import { HeaderLayout, ExtraViewLayout_Mk_3 } from '../components'
  
const Case01Screen = (props) => {
  const [headerShow, setHeaderShow] = useState(true)
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
    <ExtraViewLayout_Mk_3
      componentId = {props.componentId}
      extraViewSize = {"80%"} // Extra View Size ( extraViewDirection(top/bottom) - heightSize, extraViewDirection(left/right) - widthSize )
      animationSpeed = {100} // AnimationSpeed
      extraViewDirection = {"bottom"} // Extra View Show Direction top/bottom/left/right
      extraViewTrigger = {extraViewTrigger} // Extra View On/Off
      unableMain = {true} //Unable Main View when Extra show.
      extraView = { //ExtraView Contents
        <View
          style={{
            flex:1,
            backgroundColor:'#e5cfcf',
            borderTopWidth:1,
            paddingTop:20
          }}
        >
          <Text>Extra View TestingExtra View TestingExtra View TestingExtra View Testing</Text>
          <TouchableOpacity
            onPress={() => showExtra()}
          >
            <Text>Show Extra View</Text>
          </TouchableOpacity>
        </View>
      }
    >
      <View
        style={{
          flex:1
        }}
      
      >
        <HeaderLayout
          componentId = {props.componentId}
          headerPosition = {'absolute'}
          headerColor = "#ffffff"
          headerVisible = {headerShow}
          leftHeaderType = {"back"}
          headerSize = {"15%"}
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
          <Text>
            아기 상어 (뚜 루루 뚜루)
            귀여운 (뚜 루루 뚜루)
            바닷속 (뚜 루루 뚜루)
            아기 상어
            엄마 상어 (뚜 루루 뚜루)
            어여쁜 (뚜 루루 뚜루)
            바닷속 (뚜 루루 뚜루)
            엄마상어
            아빠 상어 (뚜 루루 뚜루)
            힘이 센 (뚜 루루 뚜루)
            바닷속 (뚜 루루 뚜루)
            아빠상어
            할머니 상어 (뚜 루루 뚜루)
            자상한 (뚜 루루 뚜루)
            바닷속 (뚜 루루 뚜루)
            할머니 상어
            할아버지 상어 (뚜 루루 뚜루)
            멋있는 (뚜 루루 뚜루)
            바닷속 (뚜 루루 뚜루)
            할아버지 상어
            우리는 (뚜 루루 뚜루)
            바다의 (뚜 루루 뚜루)
            사냥꾼 (뚜 루루 뚜루)
            상어가족
            상어다 (뚜 루루 뚜루)
            도망쳐 (뚜 루루 뚜루)
            도망쳐 (뚜 루루 뚜루)
            숨자 으악
            살았다 (뚜 루루 뚜루)
            살았다 (뚜 루루 뚜루)
            오늘도 (뚜 루루 뚜루)
            살았다 휴
            신난다 (뚜 루루 뚜루)
            신난다 (뚜 루루 뚜루)
            춤을 춰 (뚜 루루 뚜루)
            노래 끝 오예
          </Text>
          <TouchableOpacity
            onPress={() => showExtra()}
          >
            <Text>Show Extra View</Text>
          </TouchableOpacity>
        
        </HeaderLayout>
      </View>
    </ExtraViewLayout_Mk_3>
  );
};

export default Case01Screen