import React,{
    useState,
    useEffect
} from 'react';
import {
    View,
    SafeAreaView,
    ScrollView,
    Animated,
    Text,
    FlatList
} from 'react-native';

const Case04Screen = (props) => {

    const [animValue, setAnimValue] = useState(new Animated.Value(0))
    const circleSize = 572

    const progressData = {
        location : "Seoul, South Korea",
        creatTime : "2020-03-01 00:00:00",
        // expireTime : "2020-04-01 00:00:00",
        tags : [ "Shopping", "Right Now" ],
        receiveStatus : {
            sended: 35,
            read : 4,
            offer : 0
        }
    }
    const createTime = new Date(getDate(progressData.creatTime))
    const expireLong = 1000*60*60*24*10
    const expireTime = new Date(createTime.getTime() + expireLong)
    // console.log(getRemain(expireTime-new Date()))

    useEffect(()=>{
        circleAnimStart()
    })
    const animatedCircleSize = animValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, circleSize]
    })
    const halfAnimatedCircleSize = animValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, circleSize/2]
    })
    const animatedCircleSize2 = animValue.interpolate({
        inputRange: [0, 0.5, 0.5, 1],
        outputRange: [0, circleSize, 0, circleSize]
    })
    const halfAnimatedCircleSize2 = animValue.interpolate({
        inputRange: [0, 0.5, 0.5, 1],
        outputRange: [0, circleSize/2, 0, circleSize/2]
    })

    const circleAnimStart = () =>{
        Animated.loop(
            Animated.sequence([
                // Animated.delay(100),
                Animated.timing(animValue, {
                toValue: 1,
                duration: 3000
                })
            ])
        ).start()
    }

    return (
        <SafeAreaView
            style={{
                flex:1,
            }}
        >
            <ScrollView>



                <View
                    style={{
                        // flex:1,
                        width:"100%",
                        height:572,
                        alignItems:'center',
                        justifyContent:'center'
                    }}
                >
                    <Animated.View
                        style={{
                            position:"absolute",
                            width:animatedCircleSize,
                            height:animatedCircleSize,
                            borderRadius:halfAnimatedCircleSize,
                            borderWidth:2,
                            zIndex:0
                        }}
                    />
                    <Animated.View
                        style={{
                            position:"absolute",
                            width:animatedCircleSize2,
                            height:animatedCircleSize2,
                            borderRadius:halfAnimatedCircleSize2,
                            borderWidth:2,
                            zIndex:0
                        }}
                    />
                    <View
                        style={{
                            width:"100%",
                            height:"100%",
                            backgroundColor:'rgba(255,244,239,0.8)',
                            zIndex:1,
                            alignItems:'center',
                            justifyContent:'center'
                        }}
                    >
                        <View
                            style={{
                                height:58,
                            }}
                        >
                            <Text style={{fontSize:48}}>{getRemain(expireTime-new Date())}</Text>
                        </View>
                        <View
                            style={{
                                width:272,
                                height:272,
                                alignItems:'center',
                                justifyContent:'space-between'
                            }}
                        >
                            <View
                                style={{
                                    width:67,
                                    height:16
                                }}
                            >
                                <Text style={{fontSize:13}}>Remaining</Text>
                            </View>
                            <View
                                style={{
                                    width:212,
                                    height:212,
                                    borderWidth:1
                                }}
                            >
                            </View>
                            <View
                                style={{
                                    height:20,
                                }}
                            >
                                <Text style={{fontSize:16, fontWeight:'bold'}}>{progressData.location}</Text>
                            </View>
                            <View
                                style={{
                                    marginTop:12,
                                }}
                            >
                                <Text style={{fontSize:20, fontWeight:'bold', textAlign:'center'}}>Stay tuned while we search{"\n"}for the best butlers</Text>
                            </View>
                            <View
                                style={{
                                    marginTop: 16,
                                    flexWrap: 'wrap',
                                    flexDirection:'row'
                                }}
                            >
                                {progressData.tags? progressData.tags.map((contact, i) => {
                                    return(
                                        <ATag index={i} title={contact}/>
                                    )
                                }) : <View/> }
                            </View>
                        </View>

                    </View>
                </View>


                <View>
                    <View
                        style={{
                            width:"100%",
                            height:48,
                            backgroundColor:'rgba(255,244,239,0.8)',
                            alignItems:'center',
                            justifyContent:'center'
                        }}
                    >
                        <Text>{progressData.receiveStatus.sended} Butlers foound | {progressData.receiveStatus.read} read</Text>
                    </View>
                    <View
                        style={{
                            width:"100%",
                            height:48,
                            borderBottomWidth:1,
                            // backgroundColor:'rgba(255,244,239,0.8)',
                            backgroundColor:'red'
                        }}
                    >

                    </View>
                    <FlatList
                        data={[1,2,3,4,5]}
                        renderItem={({item, index})=> <AOffer/>}
                    />
                </View>



            </ScrollView>
        </SafeAreaView>
    );
};

const ATag = (props) => {
    return (
        <View
            style={{
                paddingHorizontal:12,
                paddingVertical:5,
                marginHorizontal:4,
                borderWidth:1,
                borderRadius:10,
                backgroundColor:"#FFFFFF",

                marginVertical:2
            }}
        >
            <Text>{props.title}</Text>
        </View>
    )
}

const AOffer = (props) => {

    const providerName = "Dongkuk Kim"
    const providerLevel = "Super Butler"
    const tipDuration = "4 hours"
    const serviceFee = "$45"
    const offerStatus = <Text style={{fontSize:13, color:"#12d294"}}>Connected</Text>

    return(
        <View
            style={{
                width:"100%",
                paddingVertical:9,
                paddingHorizontal:18
            }}
        >
            <View
                style={{
                    width:"100%",
                    borderWidth:1,
                    backgroundColor:"#FFFFFF",
                }}
            >
                <View
                    style={{
                        borderBottomWidth:1,
                        borderBottomColor:"#d8dee5",
                        flexDirection:'row'
                    }}
                >
                    <View
                        style={{
                            width:80,
                            height:80,
                            alignItems:'center',
                            justifyContent:'center'
                        }}
                    >
                        <View
                            style={{
                                width:56,
                                height:56,
                                backgroundColor:'red'
                            }}
                        />

                    </View>
                    <View
                        style={{
                            flex:1,
                            flexDirection:'column',
                            alignItems:'flex-start'
                        }}
                    >
                        <View
                            style={{
                                paddingTop:13,
                            }}
                        >
                            <Text style={{fontSize:18, fontWeight:"bold"}}>{providerName}</Text>
                        </View>
                        <View
                            style={{
                                marginTop:5,
                                paddingHorizontal:8,
                                paddingVertical:4,
                                borderColor:"#0dbfd8",
                                borderWidth:1.5,
                                borderRadius:4
                            }}
                        >
                            <Text style={{fontSize:13, fontWeight:"bold", color:"#0dbfd8"}}>{providerLevel}</Text>
                        </View>


                    </View>
                    <View
                        style={{
                            width:52,
                            alignItems:'center',
                            justifyContent:'center',
                            borderWidth:1
                        }}
                    >

                    </View>
                </View>
                <View
                    style={{
                        width:"100%",
                        paddingHorizontal:12,
                        paddingVertical:9,
                        borderBottomWidth:1,
                        borderBottomColor:"#d8dee5",
                        flexDirection:"row"
                    }}
                >
                    <View
                        style={{
                            flex:1,
                        }}
                    >
                        <Text style={{fontSize:13, color:"#6b7c8f"}}>Tip Duration</Text>
                        <Text style={{fontSize:16, color:"#09294d"}}>{tipDuration}</Text>
                    </View>
                    <View
                        style={{
                            flex:1,
                        }}
                    >
                        <Text style={{fontSize:13, color:"#6b7c8f"}}>Service Fee</Text>
                        <Text style={{fontSize:16, color:"#09294d"}}>{serviceFee}</Text>
                    </View>

                </View>
                <View
                    style={{
                        paddingVertical:10,
                        paddingLeft:12
                    }}
                >
                    {offerStatus}
                </View>

            </View>
        </View>
    )

}

const getDate = (dateString)=>{
    return dateString.replace(" ", "T")
}
const getRemain = (dateTime) => {
    console.log(dateTime)
    const AMINUTE = 1000*60
    const AHOUR = AMINUTE*60
    // const ADAY = AHOUR*24
    // const AMONTH = ADAY * 30

    // if (dateTime>AMONTH){
    //     return Math.floor(dateTime / AMONTH) + "months"
    // } else if (dateTime>ADAY) {
    //     return Math.floor(dateTime / ADAY )+ "days"
    // } else if (dateTime>AHOUR) {
    //     return Math.floor(dateTime / AHOUR) + "hours"
    // } else if (dateTime>AMINUTE) {
    //     return Math.floor(dateTime / AMINUTE) + "hours"
    // } else {
    //     return "soon"
    // }
    if (dateTime>AMINUTE){
        const leftHour = Math.floor(dateTime / AHOUR) < 10 ? "0"+Math.floor(dateTime / AHOUR) : Math.floor(dateTime / AHOUR)
        const leftMinute = Math.floor((dateTime - leftHour*AHOUR)/ AMINUTE) < 10 ? "0"+Math.floor((dateTime - leftHour*AHOUR)/ AMINUTE) : Math.floor((dateTime - leftHour*AHOUR)/ AMINUTE)
        return leftHour + ":" + leftMinute
    }
}

export default Case04Screen