import React,{
    useState,
    useEffect
} from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    FlatList,
    Text
} from 'react-native';

const Case03Screen = (props) => {
    const progressData = {
        location : "Seoul, South Korea",
        creatTime : "2020-03-01 00:00:00",
        expireTime : "2020-04-01 00:00:00",
        tags : [ "Shopping", "Right Now" ],
        receiveStatus : {
            sended: 35,
            read : 4,
            offer : 0
        }
    }

    const dealList = [
        {
            location : "Seoul, South Korea",
            creatTime : "2020-02-01 00:00:00",
            expireTime : "2020-02-03 00:00:00",
            tags : [ "Shopping", "Right Now", "Reasonable Price" ],
            receiveStatus : {
                sended: 35,
                read : 4,
                offer : 0
            }
        },
        {
            location : "Seoul, South Korea",
            creatTime : "2020-02-05 00:00:00",
            expireTime : "2020-02-07 00:00:00",
            tags : [ "Shopping" ],
            receiveStatus : {
                sended: 99,
                read : 51,
                offer : 12
            }
        }
    ]
    
    return (
        <View
            style={{
                flex:1
            }}
        >
            <View
                style={{
                    paddingVertical:25,
                    paddingLeft:18
                }}
            >
                <Text style={{fontSize:14, fontWeight:'bold'}}>IN PROGRESS</Text>
            </View>
            <ADeal type={"IN PROGRESS"} item={progressData}/>

            <View
                style={{
                    paddingVertical:25,
                    paddingLeft:18
                }}
            >
                <Text style={{fontSize:14, fontWeight:'bold'}}>This is Title</Text>
            </View>
            <FlatList
                data={dealList}
                renderItem={({ item }) => {
                    return(
                        <ADeal type={"PAST DEALS"} item={item}/>
                    )
                }}
            />
        </View>
    );
};

const ADeal = (props) => {
    const backgroundColor = props.type=="IN PROGRESS"? "#fff4ef" : "#e8eef4"
    return (
        <View
            style={{
                width:"100%",
                height:'auto',
                paddingHorizontal:18,
                paddingBottom:25
            }}
        >
            <View
                style={{
                    width:"100%",
                    height:'auto',
                    backgroundColor:backgroundColor,
                    padding:12,
                    flexDirection:'row'
                }}
            >
                <View
                    style={{
                        width:"65%",
                        height:"100%",
                    }}
                >
                    <View
                        style={{
                            height:20,
                        }}
                    >
                        <Text style={{fontSize:16, fontWeight:"bold"}}>{props.item.location}</Text>
                    </View>
                    <View
                        style={{
                            height:16,
                        }}
                    >
                        <Text style={{fontSize:13}}>12m ago</Text>
                    </View>
                    <View   // Space
                        style={{
                            height:36,
                        }}
                    />
                    <View
                        style={{
                            width:"100%",
                            flexWrap: 'wrap',
                            flexDirection:'row'
                        }}
                    >
                        {props.item.tags? props.item.tags.map((contact, i) => {
                            return(
                                <ATag index={i} title={contact}/>
                            )
                        }) : <View/> }
                    </View>
                    <View
                        style={{
                            paddingTop:10
                        }}
                    >
                        <Text>30 Butlers foound | 4 read</Text>
                    </View>
                </View>
                <View
                    style={{
                        width:"25%",
                        height:"100%",
                        borderWidth:1
                    }}
                >

                </View>
                <View
                    style={{
                        width:"10%",
                        height:"100%",
                        borderWidth:1
                    }}
                >

                </View>
            </View>

        </View>
    )
}

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

export default Case03Screen