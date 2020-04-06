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
    const caseShowType05 = () => {
        Navigator.pushScreen(props.componentId, ScreenConst.SCREEN_CASE_TYPE_05)
    }
    const caseShowType06 = () => {
        Navigator.pushScreen(props.componentId, ScreenConst.SCREEN_CASE_TYPE_06)
    }
    const caseShowType07 = () => {
        Navigator.pushScreen(props.componentId, ScreenConst.SCREEN_CASE_TYPE_07)
    }
    const caseShowType08 = () => {
        Navigator.pushScreen(props.componentId, ScreenConst.SCREEN_CASE_TYPE_08)
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
                onPress={() => caseShowType05()}
            >
                <Text
                style={{fontWeight:'bold'}}
                >
                    Case 05
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
                onPress={() => caseShowType06()}
            >
                <Text
                style={{fontWeight:'bold'}}
                >
                    Case 06
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
                onPress={() => caseShowType07()}
            >
                <Text
                style={{fontWeight:'bold'}}
                >
                    Case 07
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
                onPress={() => caseShowType08()}
            >
                <Text
                style={{fontWeight:'bold'}}
                >
                    Case 08
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default CaseMainScreen