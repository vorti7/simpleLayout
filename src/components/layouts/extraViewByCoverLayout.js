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
    const unableMain = props.unableMain ? props.unableMain : false
    const ONLY100 = "100%"
    const ONLY0 = "0%"
  
    const [animValue, setAnimValue] = useState(new Animated.Value(0))


    var verticalValues
    var horizontalValues
    const [mainEnalbe, setMainEnable] = useState(true)
    
    useEffect(()=>{
        if(extraViewTrigger){
            enableExtra()
            setMainEnable(false)
        } else {
            disableExtra()
            setMainEnable(true)
        }
    },[extraViewTrigger])
    
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

    const mainCoverOpacity = animValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, unableMain? 0.07 : 0]
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
                flex:1,
                zIndex:0
            }}
        >
            <View
                style={{
                    flex:1,
                    zIndex:2
                }}
            >
                {props.children}
            </View>
            <Animated.View // This View make main View Dark and unable!
                style={{
                    width:"100%",
                    height:"100%",
                    position:"absolute",
                    backgroundColor:'black',
                    opacity:mainCoverOpacity,
                    zIndex:mainEnalbe? 1: unableMain?3:1
                }}
            />
            <Animated.View
                style={{
                    position:'absolute',
                    width:extraViewDirection=="left"||extraViewDirection=="right"? extraViewSize:ONLY100,
                    height:extraViewDirection=="top"||extraViewDirection=="bottom"? extraViewSize:ONLY100,
                    backgroundColor:'red',
                    top:verticalAttributeValue,
                    left:horizontalAttributeValue,
                    zIndex:4
                }}
            >
                {props.extraView}
            </Animated.View>

        </View>
    )
};
  
 export default ExtraViewByCoverLayout