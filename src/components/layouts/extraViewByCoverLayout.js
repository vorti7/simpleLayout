import React,{
    useState,
    useEffect
  } from 'react';
  import {
    View,
    Animated
  } from 'react-native';
    
    
const ExtraViewByCoverLayout = (props) => {
  
    const extraViewSize = props.extraViewSize ? props.extraViewSize : "50%"
    const reverseExtraViewSize = (100 - extraViewSize.substring(0, extraViewSize.length-1)) + "%"
    const animationSpeed = props.animationSpeed ? props.animationSpeed : 1000
    const extraViewTrigger = props.extraViewTrigger ? props.extraViewTrigger : false;
    const extraViewDirection = props.extraViewDirection ? props.extraViewDirection : "bottom";
    const ONLY100 = "100%"
    const ONLY0 = "0%"
  
    const [animValue, setAnimValue] = useState(new Animated.Value(0))
    
    useEffect(()=>{
        if(extraViewTrigger){
            enableExtra()
        } else {
            disableExtra()
        }
    },[extraViewTrigger])


    var verticalValues
    var horizontalValues
    
    if (extraViewDirection=="top") {
        verticalValues = ["-"+extraViewSize, "0%"]
        horizontalValues = ["0%", "0%"]
    }else if (extraViewDirection=="bottom") {
        verticalValues = ["100%", reverseExtraViewSize]
        horizontalValues = ["0%", "0%"]
    }else if (extraViewDirection=="left") {
        verticalValues = ["0%", "0%"]
        horizontalValues = ["-"+extraViewSize, "0%"]
    }else if (extraViewDirection=="right") {
        verticalValues = ["0%", "0%"]
        horizontalValues = ["100%", reverseExtraViewSize]
    }
    const verticalAttributeValue = animValue.interpolate({
        inputRange: [0, 1],
        outputRange: verticalValues
    })
    const horizontalAttributeValue = animValue.interpolate({
        inputRange: [0, 1],
        outputRange: horizontalValues
    })

    const enableExtra = () => {
        console.log("enable Extra")
        Animated.timing(
          animValue,
        {
            toValue: 1,
            duration: animationSpeed,
        }
        ).start();

    }
  
    const disableExtra = () => {
        console.log("disable Extra")
        Animated.timing(
        animValue,
        {
            toValue: 0,
            duration: animationSpeed,
        }
        ).start();
    }

    return (
        <View
            style={{
                flex:1
            }}
        >
            <View
                style={{
                    flex:1
                }}
            >
                {props.children}
            </View>
            <Animated.View
                style={{
                    position:'absolute',
                    width:extraViewDirection=="left"||extraViewDirection=="right"? extraViewSize:ONLY100,
                    height:extraViewDirection=="top"||extraViewDirection=="bottom"? extraViewSize:ONLY100,
                    backgroundColor:'red',
                    top:verticalAttributeValue,
                    left:horizontalAttributeValue
                }}
            >
                {props.extraView}
            </Animated.View>

        </View>
    )
};
  
 export default ExtraViewByCoverLayout