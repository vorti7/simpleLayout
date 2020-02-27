import React,{
  useState,
  useEffect
} from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { ExtraViewByCoverLayout } from '../components/layouts';

const Type03Screen = (props) => {
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
    <ExtraViewByCoverLayout
      componentId = {props.componentId}
      extraViewSize = {"40%"} // Extra View Size ( extraViewDirection(top/bottom) - heightSize, extraViewDirection(left/right) - widthSize )
      animationSpeed = {100} // AnimationSpeed
      extraViewDirection = {"bottom"} // Extra View Show Direction top/bottom/left/right
      extraViewTrigger = {extraViewTrigger} // Extra View On/Off
      unableMain = {true} //Unable Main View when Extra show.
      extraView = { //ExtraView Contents
        <View>
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
          flex:1,
          alignItems:'center',
          justifyContent:'center'
        }}
      
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
      </View>
    </ExtraViewByCoverLayout>
  );
};

export default Type03Screen