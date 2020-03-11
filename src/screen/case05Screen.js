import React,{
    useState,
    useEffect
} from 'react';
import {
    View,
    SafeAreaView,
    FlatList,
    Text,
    TouchableOpacity
} from 'react-native';

const Case05Screen = (props) => {

    const providerName = "Dongkuk Kim"
    const providerLevel = "Super Butler"
    const tipDuration = "4 hours"
    const serviceFee = "$45"
    // const offerStatus = <Text style={{fontSize:13, color:"#12d294"}}>Connected</Text>
    const connected = false

    const offerContents = [
        {
            content: "👋 Welcome to Seoul, Sana!\nCan’t wait to take you around. See the note below for a list of things we could do together!",
        },
        {
            title: "What we’ll do together",
            content: "- Shopping in place A\n- Checking out place B briefly\n- Another thing to do at place C\n- Place D or E, up to you"
        },
        {
            content: "Hope to hear from you soon!"
        }
    ]

    return(
        <SafeAreaView
            style={{
                // width:"100%",
                flex:1,
                paddingVertical:9,
                paddingHorizontal:18
            }}
        >
            <View
                style={{
                    // width:"100%",
                    flex:1,
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
                        flex:1,
                        paddingVertical:10,
                        paddingHorizontal:12,
                        borderBottomWidth:1,
                        borderBottomColor:"#d8dee5",
                    }}
                >
                    <FlatList
                        data = {offerContents}
                        renderItem = {({item, i}) => <BubbleView item={item}/>}
                    />
                </View>
                <View
                    style={{
                        width:"100%",
                        height:73,
                        paddingVertical:10,
                        paddingHorizontal:12,
                    }}
                >
                    {
                        connected?(
                            <View
                                style={{
                                    flex:1,
                                    flexDirection:'row'
                                }}
                            >
                                <View
                                    style={{
                                        flex:1,
                                        marginRight:4,
                                        borderRadius:4,
                                        justifyContent:'center'
                                    }}
                                >
                                    <View>
                                        <Text style={{fontSize:18, color:"#09294d"}}>Connected</Text>
                                    </View>
                                    <View>
                                        <Text style={{fontSize:13, color:"#6b7c8f"}}>3m ago</Text>
                                    </View>
                                </View>
                                <TouchableOpacity
                                    style={{
                                        flex:1,
                                        marginLeft:4,
                                        borderRadius:4,
                                        backgroundColor:"#12d294",
                                        alignItems:'center',
                                        justifyContent:'center'
                                    }}
                                >
                                    <Text style={{fontSize:16, color:"#FFFFFF"}}>Go to Chat</Text>
                                </TouchableOpacity>
                            </View>
                        ):(
                            <View
                                style={{
                                    flex:1,
                                    flexDirection:'row'
                                }}
                            >
                                <TouchableOpacity
                                    style={{
                                        flex:1,
                                        marginRight:4,
                                        borderRadius:4,
                                        backgroundColor:"#09294d",
                                        alignItems:'center',
                                        justifyContent:'center'
                                    }}
                                >
                                    <Text style={{fontSize:16, color:"#FFFFFF"}}>Skip</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{
                                        flex:1,
                                        marginLeft:4,
                                        borderRadius:4,
                                        backgroundColor:"#12d294",
                                        alignItems:'center',
                                        justifyContent:'center'
                                    }}
                                >
                                    <Text style={{fontSize:16, color:"#FFFFFF"}}>Connect</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    }
                </View>

            </View>
        </SafeAreaView>
    )
};
export default Case05Screen

const BubbleView = (props) => {
    const type = props.item.type ? true:false
  
    return (
      <View
        style={{
          width:"100%",
          height:"auto",
          alignItems:type?"flex-end":"flex-start",
          marginTop:props.item.chatDivider?10:0,
          marginBottom:8
        }}
      >
        <View
          style={{
            backgroundColor:type?'#12d294':'#fff4ef',
            borderRadius:10,
            minWidth:'40%',
            maxWidth:"80%",
            paddingVertical:9,
            paddingHorizontal:18
          }}
        >
          {
            props.item.title?
            (
              <View
                style={{
                  borderBottomColor:"#e5cfcf",
                  borderBottomWidth:1
                }}
              >
                <Text
                  style={{
                    fontWeight:"bold",
                    fontSize:18,
                    color:type?"#FFFFFF":"#000000"
                  }}
                >{props.item.title}</Text>
              </View>
            ) : <View/>
          }
          <View>
            <Text
              style={{
                fontSize:18,
                color:type?"#FFFFFF":"#000000"
              }}
            >{props.item.content}</Text>
          </View>
        </View>
      </View>
    )
  }