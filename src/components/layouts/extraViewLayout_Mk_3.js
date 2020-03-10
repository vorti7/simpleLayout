import React,{
    useState,
    useEffect
} from 'react';
import {
    View,
    Animated,
    PanResponder
} from 'react-native';
    
    
const ExtraViewLayout_Mk_3 = (props) => {
  
    const extraViewSize = props.extraViewSize ? props.extraViewSize : "50%"
    const reverseExtraViewSize = (100 - extraViewSize.substring(0, extraViewSize.length-1)) + "%"
    const animationSpeed = props.animationSpeed ? props.animationSpeed : 1000
    const extraViewDirection = props.extraViewDirection ? props.extraViewDirection : "bottom";
    const unableMain = props.unableMain ? props.unableMain : false

    const ONLY100 = "100%"
    const ONLY0 = "0%"


    const extraViewTrigger = props.extraViewTrigger ? props.extraViewTrigger : false;


    const panResponder = React.useMemo(() => PanResponder.create({
        // onStartShouldSetPanResponderCapture: (evt, gestureState) => {
        //     console.log(gestureState)
        // //   console.log("onStartShouldSetPanResponderCapture\n")
        //   return true
        // },
        onMoveShouldSetPanResponder: (evt, gestureState) => {
            const { dx, dy } = gestureState
            return dx > 2 || dx < -2 || dy > 2 || dy < -2
        },
        onPanResponderGrant: (evt, gestureState) => {
        //   console.log("onPanResponderGrant\n")
        },
        onPanResponderMove: (evt, gestureState) => {
            console.log("onPanResponderMove\n")
            console.log(gestureState.moveX - gestureState.x0)
            const gestureDistance = 0
            if(gestureState.moveX - gestureState.x0 > gestureDistance) {
                console.log("gesture goring right")
            } else if (gestureState.moveX - gestureState.x0 < -gestureDistance) {
                console.log("gesture goring left")
            }
            
            console.log(gestureState.moveY - gestureState.y0)
            if(gestureState.moveY - gestureState.y0 > gestureDistance) {
                console.log("gesture goring down")
            } else if (gestureState.moveY - gestureState.y0 < -gestureDistance) {
                console.log("gesture goring up")
            }
        },
        onPanResponderRelease: (evt, gestureState) => {
        //   console.log("onPanResponderRelease\n")
        },
        onShouldBlockNativeResponder: (evt, gestureState) => {
        //   console.log("onShouldBlockNativeResponder\n")
          return true;
        },
    }), []);



  
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
                    top:verticalAttributeValue,
                    left:horizontalAttributeValue,
                    zIndex:4
                }}
                {...panResponder.panHandlers}
            >
                {props.extraView}
            </Animated.View>

        </View>
    )
};
  
export default ExtraViewLayout_Mk_3