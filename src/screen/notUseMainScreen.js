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

const MainScreen = (props) => {

    const notUseShowType01 = () => {
        Navigator.pushScreen(props.componentId, ScreenConst.SCREEN_NOTUSE_TYPE_01)
    }
    const notUseShowType02 = () => {
        Navigator.pushScreen(props.componentId, ScreenConst.SCREEN_NOTUSE_TYPE_02)
    }

    return (
        <View
        style={{
            flex:1,
            alignItems:'center',
            justifyContent:'center'
        }}
        >
        <Text>Main Screen</Text>
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
            onPress={() => notUseShowType01()}
        >
            <Text
            style={{fontWeight:'bold'}}
            >
            Not used type 01
            </Text>
        </TouchableOpacity>
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
            onPress={() => notUseShowType02()}
        >
            <Text
            style={{fontWeight:'bold'}}
            >
                Not used type 02
            </Text>
        </TouchableOpacity>
        </View>
    );
};

export default MainScreen