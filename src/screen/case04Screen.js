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
    FlatList,
    TouchableOpacity,
    Image
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

    const offerData = [
        {
            providerInfo:{
                name : "Jihyo",
                providerLevel : "Super Butler",
                profileUri : "https://search.pstatic.net/common?type=a&size=120x150&quality=95&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F201909%2F20190911124406327-9808989.jpg",
                providerConnected : false
            },
            offerInfo:{
                tipDuration:4,
                serviceFee:45,
            }

        },
        {
            providerInfo:{
                name : "Nayeon",
                providerLevel : "Super Butler",
                profileUri : "https://search.pstatic.net/common?type=a&size=120x150&quality=95&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F201909%2F20190914125553789-4837063.jpg",
                providerConnected : true
            },
            offerInfo:{
                tipDuration:1,
                serviceFee:15,
            }

        },
        {
            providerInfo:{
                name : "Jeongyeon",
                providerLevel : "Super Butler",
                profileUri : "https://search.pstatic.net/common?type=a&size=120x150&quality=95&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F201909%2F20190911124540768-9994874.jpg",
                providerConnected : false
            },
            offerInfo:{
                tipDuration:8,
                serviceFee:100,
            }

        },
        {
            providerInfo:{
                name : "Momo",
                providerLevel : "Super Butler",
                profileUri : "https://search.pstatic.net/common?type=a&size=120x150&quality=95&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F201909%2F20190911124635987-5025054.jpg",
                providerConnected : true
            },
            offerInfo:{
                tipDuration:0,
                serviceFee:0,
            }

        },
        {
            providerInfo:{
                name : "Sana",
                providerLevel : "Super Butler",
                profileUri : "https://search.pstatic.net/common?type=a&size=120x150&quality=95&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F201909%2F20190914124723164-9958359.jpg",
                providerConnected : true
            },
            offerInfo:{
                tipDuration:24,
                serviceFee:300,
            }

        },
        {
            providerInfo:{
                name : "Mina",
                providerLevel : "Super Butler",
                profileUri : "https://search.pstatic.net/common?type=a&size=120x150&quality=95&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F201909%2F20190914130405117-8485834.jpg",
                providerConnected : true
            },
            offerInfo:{
                tipDuration:1,
                serviceFee:10,
            }

        },
        {
            providerInfo:{
                name : "Dahyun",
                providerLevel : "Super Butler",
                profileUri : "https://search.pstatic.net/common?type=a&size=120x150&quality=95&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F201909%2F20190917115034488-1646757.jpg",
                providerConnected : false
            },
            offerInfo:{
                tipDuration:2,
                serviceFee:25,
            }

        },
        {
            providerInfo:{
                name : "Chaeyoung",
                providerLevel : "Super Butler",
                profileUri : "https://search.pstatic.net/common?type=a&size=120x150&quality=95&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F201909%2F20190917115349989-3031902.jpg",
                providerConnected : false
            },
            offerInfo:{
                tipDuration:4,
                serviceFee:45,
            }

        },
        {
            providerInfo:{
                name : "Tzuyu",
                providerLevel : "Super Butler",
                profileUri : "https://search.pstatic.net/common?type=a&size=120x150&quality=95&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F201909%2F20190917115408261-3056408.jpg",
                providerConnected : false
            },
            offerInfo:{
                tipDuration:4,
                serviceFee:45,
            }

        }
    ]

    // console.log(offerData.filter(offer => offer.providerInfo.providerConnected))

    const [ connectedSelect, setConnectedSelect ] = useState(false)
    const toggleConnectedSelect = () =>{
        setConnectedSelect(!connectedSelect)
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
                            borderBottomColor:"#e5cfcf",
                            borderBottomWidth:1,
                            backgroundColor:'rgba(255,244,239,0.8)',
                            paddingHorizontal:18,
                            flexDirection:"row"
                        }}
                    >
                        <View
                            style={{
                                justifyContent:'center'
                            }}
                        >
                            <Text style={{fontSize:14, color:"#09294d"}}>OFFERS {offerData.length}</Text>
                        </View>
                        <View style={{flex:1}}/>
                        <TouchableOpacity
                            style={{
                                justifyContent:'center',
                                marginRight:12,
                                borderBottomColor:"#12d294",
                                borderBottomWidth: !connectedSelect? 3: 0
                            }}
                            onPress = {() => toggleConnectedSelect()}
                        >
                            <Text style={{fontSize:16, color:"#6b7c8f"}}>All</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                justifyContent:'center',
                                marginLeft:12,
                                borderBottomColor:"#12d294",
                                borderBottomWidth: connectedSelect? 3: 0
                            }}
                            onPress = {() => toggleConnectedSelect()}
                        >
                            <Text style={{fontSize:16, color:"#6b7c8f"}}>Connected Only</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        style={{
                            backgroundColor:'rgba(255,244,239,0.8)',
                        }}
                        data={ connectedSelect? offerData.filter(offer => offer.providerInfo.providerConnected) : offerData}
                        renderItem={({item, index})=> <AOffer item={item}/>}
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
    // console.log(props.item)
    const providerName = props.item.providerInfo.name ? props.item.providerInfo.name : ""
    const providerLevel = props.item.providerInfo.providerLevel ? props.item.providerInfo.providerLevel : ""
    const tipDuration = props.item.offerInfo.tipDuration ? props.item.offerInfo.tipDuration : ""
    const serviceFee = props.item.offerInfo.serviceFee ? props.item.offerInfo.serviceFee : ""
    const providerStatus = props.item.providerInfo.providerConnected ? props.item.providerInfo.providerConnected : false
    const profileUri = props.item.providerInfo.profileUri ? props.item.providerInfo.profileUri : ""

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

                        <Image
                            style={{
                                width:56,
                                height:56,
                                borderRadius:28
                            }}
                            source={{uri:profileUri}}
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
                        <Text style={{fontSize:16, color:"#09294d"}}>{tipDuration} Hours</Text>
                    </View>
                    <View
                        style={{
                            flex:1,
                        }}
                    >
                        <Text style={{fontSize:13, color:"#6b7c8f"}}>Service Fee</Text>
                        <Text style={{fontSize:16, color:"#09294d"}}>$ {serviceFee}</Text>
                    </View>

                </View>
                {providerStatus? (
                    <View
                        style={{
                            paddingVertical:10,
                            paddingLeft:12
                        }}
                    >
                        <Text style={{fontSize:13, color:"#12d294"}}>Connected</Text>
                    </View>
                ):<View/>}
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
    } else if (dateTime>0){
        return "Soon"
    } else {
        return "Expired"
    }
}

export default Case04Screen