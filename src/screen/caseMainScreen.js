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

const CaseMainScreen = (props) => {

    const caseShowType01 = () => {
        Navigator.pushScreen(props.componentId, ScreenConst.SCREEN_CASE_TYPE_01)
    }
    const caseShowType02 = () => {
        Navigator.pushScreen(props.componentId, ScreenConst.SCREEN_CASE_TYPE_02)
    }
    const caseShowType03 = () => {
        Navigator.pushScreen(props.componentId, ScreenConst.SCREEN_CASE_TYPE_03)
    }
    const caseShowType04 = () => {
        Navigator.pushScreen(props.componentId, ScreenConst.SCREEN_CASE_TYPE_04)
    }


    return (
        <View
            style={{
                flex:1,
                alignItems:'center',
                justifyContent:'center'
            }}
        >
            <Text>Case Main Screen</Text>
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
                onPress={() => caseShowType01()}
            >
                <Text
                style={{fontWeight:'bold'}}
                >
                    Case 01
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
                onPress={() => caseShowType02()}
            >
                <Text
                style={{fontWeight:'bold'}}
                >
                    Case 02
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
                onPress={() => caseShowType03()}
            >
                <Text
                style={{fontWeight:'bold'}}
                >
                    Case 03
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
                onPress={() => caseShowType04()}
            >
                <Text
                style={{fontWeight:'bold'}}
                >
                    Case 04
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default CaseMainScreen