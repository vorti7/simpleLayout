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

const Type04Screen = (props) => {

  const showOverlay = () =>{
    Navigator.showOverlay(ScreenConst.SCREEN_LOADING, "testID")
    // Navigator.pushScreen(props.componentId, ScreenConst.SCREEN_LOADING)
    setTimeout(() => {
        Navigator.dismissOverlay("testID")
    }, 3000)
  }

  return (
    <View
      style={{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column'
      }}
    >
      <View
        style={{
          flex:1,
          overflow:"hidden"
        }}
      >
        <Text>
          Into the unknown
          Into the unknown
          Into the unknown
          (Oh)
          I can hear you but I won't
          Some look for trouble while others don't
          There's a thousand reasons I should go about my day
          And ignore your whispers which I wish would go away, oh
          Whoa
          You're not a voice, you're just a ringing in my ear
          And if I heard you, which I don't, I'm spoken for I fear
          Everyone I've ever loved is here within these walls
          I'm sorry, secret siren, but I'm blocking out your calls
          I've had my adventure, I don't need something new
          I'm afraid of what I'm risking if I follow you
          Into the unknown
          Into the unknown
          Into the unknown
          (Oh)
          (Oh)
          What do you want? 'Cause you've been keeping me awake
          Are you here to distract me so I make a big mistake?
          Or are you someone out there who's a little bit like me?
          Who knows deep down I'm not where I'm meant to be?
          Every day's a little harder as I feel your power grow
          Don't you know there's part of me that longs to go
          Into the unknown?
          Into the unknown
          Into the unknown
          (Oh)
          (Oh)
          Whoa
          Are you out there?
          Do you know me?
          Can you feel me?
          Can you show me?
          ooh
          (Ah) ooh
          (Ah) ooh
          (Ah) ooh
          (Ah) ooh
          (Ah) ooh
          Where are you going? Don't leave me alone
          How do I follow you
          Into the unknown?
          Woo!
        </Text>
      </View>
      <View
        style={{
          flex:1,
          alignItems:'center',
          justifyContent:'center',
        }}
      >
        <Text>Type Screen04</Text>
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
          onPress={() =>showOverlay()}
        >
          <Text
            style={{fontWeight:'bold'}}
          >
            Show Overlay
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex:1,
          overflow:"hidden"
        }}
      >
        <Text>
          Into the unknown
          Into the unknown
          Into the unknown
          (Oh)
          I can hear you but I won't
          Some look for trouble while others don't
          There's a thousand reasons I should go about my day
          And ignore your whispers which I wish would go away, oh
          Whoa
          You're not a voice, you're just a ringing in my ear
          And if I heard you, which I don't, I'm spoken for I fear
          Everyone I've ever loved is here within these walls
          I'm sorry, secret siren, but I'm blocking out your calls
          I've had my adventure, I don't need something new
          I'm afraid of what I'm risking if I follow you
          Into the unknown
          Into the unknown
          Into the unknown
          (Oh)
          (Oh)
          What do you want? 'Cause you've been keeping me awake
          Are you here to distract me so I make a big mistake?
          Or are you someone out there who's a little bit like me?
          Who knows deep down I'm not where I'm meant to be?
          Every day's a little harder as I feel your power grow
          Don't you know there's part of me that longs to go
          Into the unknown?
          Into the unknown
          Into the unknown
          (Oh)
          (Oh)
          Whoa
          Are you out there?
          Do you know me?
          Can you feel me?
          Can you show me?
          ooh
          (Ah) ooh
          (Ah) ooh
          (Ah) ooh
          (Ah) ooh
          (Ah) ooh
          Where are you going? Don't leave me alone
          How do I follow you
          Into the unknown?
          Woo!
        </Text>
      </View>
    </View>
  );
};

export default Type04Screen