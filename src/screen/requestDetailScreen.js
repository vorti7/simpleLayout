import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions, Animated, TextInput, TouchableOpacity, FlatList } from 'react-native';

import { ScreenConst, Navigator } from '../navigation'

export default function RequestDetailScreen(props) {
  
  const requestID = props.data ? props.data.requestID : ""

  const [ itemList, setItemList ] = useState([])

  const setAItem = (index, inputData) =>{
    var changeList = itemList
    itemList[index] = inputData
    setItemList(changeList)
  }

  const today = new Date()
  
  const getTimeList = (today) => {
    const standardTime = new Date(today.getTime() - (today.getTime()%(15*60*1000)) + (15*60*1000) )
    console.log(standardTime.getHours(), standardTime.getMinutes())

    var returnList = []

    for (var i = 0; i<8; i++){
      var pushTime = new Date(standardTime.getTime() + ( i * 15*60*1000 ) )
      // returnList.push((pushTime.getHours()<10? "0"+pushTime.getHours() : pushTime.getHours())+":"+(pushTime.getMinutes()<10? "0"+pushTime.getMinutes() : pushTime.getMinutes()))
      returnList.push(pushTime)
    }
    return returnList
  }
  const timeSelectList = getTimeList(today)

  const showCustom = (type) => {
    if(type=="question#3"){
      return (
        <View
          style={{
            paddingHorizontal:12
          }}
        >
          <View
            style={{
              paddingVertical:10,
              marginBottom:12,
              borderBottomWidth:1
            }}
          >
            <Text>Meeting Point</Text>
          </View>
          <FlatList
            data={itemList}
            renderItem={({item, index}) => {
              return(
                <View
                  style={{
                    paddingVertical:8,
                    flexDirection:"row",
                    alignItems:"center"
                  }}
                >
                  <View
                    style={{
                      height:"100%",
                      marginRight:10
                    }}
                  >
                    <View
                      style={{
                        width:30,
                        height:30,
                        borderRadius:15,
                        backgroundColor:"green"
                      }}
                    />
                  </View>
                  <View style={{flex:1, paddingRight:15}}>
                    <LocationDetail
                      setAItem = {(inputData) => setAItem(index, inputData)}
                    />
                  </View>
                  <View
                    style={{
                      position:"absolute",
                      right:0
                    }}
                  >
                    <TouchableOpacity>
                      <View
                        style={{
                          width:30,
                          height:30,
                          borderRadius:15,
                          backgroundColor:"blue"
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              )

            }}
            ListFooterComponent={() => (
              <View
                style={{
                  width: "100%",
                  height: 30,
                  borderWidth:1,
                  alignItems:"center",
                  justifyContent:"center"
                }}
              >
                <TouchableOpacity
                  onPress={()=>{
                    setItemList(itemList.concat({
                      
                    }))
                  }}
                >
                  <Text>+</Text>
                </TouchableOpacity>
              </View>
            )}
          />
          <View
            style={{
              paddingVertical:10,
              marginTop:12,
              borderTopWidth:1,
              flexDirection:'row',
              justifyContent:"space-between"
            }}
          >
            <TouchableOpacity
              style={{
                paddingVertical:14,
                paddingHorizontal:18,
                backgroundColor: "#e5d3b7",
                borderRadius:14
              }}
            >
              <Text>Send confirm message</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                paddingVertical:14,
                paddingHorizontal:18,
                backgroundColor: "#e5d3b7",
                borderRadius:14
              }}
            >
              <Text>Send message</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    } else if (type=="question#4") {
      return (
        <View
          style={{
            paddingHorizontal:12
          }}
        >
          <View
            style={{
              paddingVertical:10,
              marginBottom:12,
              borderBottomWidth:1,
              flexDirection:"row",
              justifyContent:"space-between"
            }}
          >
            <View>
              <Text>Meeting Time</Text>
            </View>
            <View>
              <Text>Current time is {today.getHours() + " : " + today.getMinutes()}</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection:'row',
              flexWrap:'wrap'
            }}
          >
            {
              timeSelectList.map((time)=>{
                return(
                  <View
                    style={{
                      width:"25%",
                      paddingVertical:12,
                      alignItems:"center",
                      justifyContent:"center",
                      borderWidth:1
                    }}
                  >
                    <Text>{(time.getHours()<10? "0"+time.getHours() : time.getHours())+":"+(time.getMinutes()<10? "0"+time.getMinutes() : time.getMinutes())}</Text>
                  </View>
                )
              })
            }
          </View>
          <View
            style={{
              paddingVertical:10,
              marginTop:12,
              borderTopWidth:1,
              flexDirection:'row',
              justifyContent:"center"
            }}
          >
            <TouchableOpacity
              style={{
                paddingVertical:14,
                paddingHorizontal:18,
                backgroundColor: "#e5d3b7",
                borderRadius:14
              }}
            >
              <Text>Send message</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    }
  }

  return (
    <View
      style={{
        flex:1,
        backgroundColor:"#FFFFFF"
      }}
    >
      <View
        style={{
          height:56,
          flexDirection:"row"
        }}
      >
        <TouchableOpacity
          onPress = {()=> Navigator.dismissOverlay(props.componentId)}
        >
          <Text>Back</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex:1
        }}
      >
        {showCustom(requestID)}
      </View>
    </View>
  )

  // return (
  //   <View style={{
  //     flex:1,
  //     alignItems:"center",
  //     justifyContent:"center",
  //     backgroundColor:"rgba(0,0,0,0.5)"
  //   }}>
  //     <TouchableOpacity
  //       style={{
  //         width:"100%",
  //         height:"100%"
  //       }}
  //       onPress={() => Navigator.dismissOverlay(props.componentId)}
  //     />
  //     <View
  //       style={{
  //         position:"absolute",
  //         width:"90%",
  //         height:"90%",
  //         backgroundColor:"#FFFFFF"
  //       }}
  //     >
  //       {showCustom(requestID)}
  //     </View>
  //   </View>
  // );
}


const LocationDetail = (props) =>{

  const [ data, setData ] = useState({
    locationText:"",
    locationCoordinate:""
  })

  useEffect(() => {
    if(Object.keys(data).length>0) {
      console.log(data)
      props.setAItem(data)
    }
  }, [data])
  return (
    <View>
      <View
        style={{
          borderWidth:1,
          paddingHorizontal:12,
          // marginHorizontal:18,
          // marginVertical:4
        }}
      >
        <View
          style={{
            flexDirection:"row",
            marginVertical:18,
            alignItems:"center",
            // justifyContent:"center"
          }}
        >
          <View
            style={{flex:1}}
          >
            {/* <TextInput
              style={{
                height:30,
                borderWidth:1
              }}
              editable={false}
              value={data.locationCoordinate}
            /> */}
          <Text>{data.locationCoordinate}</Text>
          </View>
          <TouchableOpacity
            style={{
              marginHorizontal:10
            }}
            onPress={() => {
              Navigator.showOverlay(ScreenConst.SCREEN_DETAIL_LOCATION, "location_detail", {data:{
                setData : setData
              }})
            }}
          >
            <View
              style={{
                width:30,
                height:30,
                backgroundColor:"red"
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginBottom:18
          }}
        >
          {/* <TextInput
            style={{
              height:30,
              borderWidth:1,
            }}
            editable={false}
            value={data.locationText}
          /> */}
          <Text>{data.locationText}</Text>
        </View>
      </View>
    </View>
  )
}
