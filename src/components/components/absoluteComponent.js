import React,{
    useState,
    useEffect
} from 'react';
import {
    View
} from 'react-native';


const AbsoluteComponent = (props) => {
    const show = props.show? true:false
    if (show) {
        return (
            <View
                style={{
                    left:props.x,
                    top:props.y,
                    position:"absolute"
                }}
            >
                {props.children}
            </View>
        );
    } else {
        return (
            <View></View>
        )
    }
};

export default AbsoluteComponent