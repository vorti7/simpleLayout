import React,{
  useState,
  useEffect,
  useRef
} from 'react';
import {
  View,
  Animated,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  StyleSheet,
} from 'react-native';
import { ScreenConst, Navigator } from '../navigation'
  
const Case08Screen = (props) => {
  const chatList = []

  const flatListRef = useRef(null);

  const [openExtra, setOpenExtra] = useState(false)
  
  return (
      <SafeAreaView
        style={{
          flex:1
        }}
      >
      <View
          style={[styles.subHeaderContainer]}
      >
          <TouchableOpacity
            onPress = {() =>{
            }}
          >
              <Text style={[styles.subHeaderTitle]}>Disconnect</Text>
          </TouchableOpacity>
          <View style={{flex:1}}/>
          <TouchableOpacity
              onPress = {() =>{
              }}
          >
              <Text style={[styles.subHeaderTitle]}>View Offer Details</Text>
          </TouchableOpacity>
          
      </View>
      <FlatList
          style={[styles.listContainer]}
          ref = {flatListRef}
          data={chatList}
          renderItem = {({item, index}) =>{
              return(
                  <View>
                      {/* <Bubble
                          chatHead = {index-1>=0?item.sender==chatList[index-1].sender?false : true : true}
                          type = {item.sender=="TRAVELER"}
                          item = {item}
                      /> */}
                  </View>
              )
          }}

          onScrollEndDrag={(data) => {
              if(Platform.OS=='android'){
                  if(data.nativeEvent.velocity.y>=0&&data.nativeEvent.contentOffset.y<10){
                      console.log("Top loading")
                  }
              }
              if(Platform.OS=='ios'){
                  if(data.nativeEvent.velocity.y<=0&&data.nativeEvent.contentOffset.y<10){
                      console.log("Top loading")
                  }
              }
          }}

          onContentSizeChange={() => flatListRef.current.scrollToEnd()}
          keyExtractor = {(item, index) => index.toString()}
      />
      <InputContainer
          // extraInputData = {extraInputData}
          // setExtraInputData = {(data) => {
          //     setExtraInputData(data)
          // }}
          // chatInput={(chatData) => chatInput(chatData)}
          openExtra = {openExtra}
          showExtra={() => setOpenExtra(!openExtra)}
      />
      </SafeAreaView>
  );
};

function InputContainer(props){
    
  const [ inputText, setInputText ] = useState('')

  const openExtra = props.openExtra ? true : false

  const extraInputData = props.extraInputData ? props.extraInputData : {}
  const enableInput = Object.keys(extraInputData).length==0 ? true : extraInputData.allowInputMsg ? extraInputData.allowInputMsg : false

  const [animValue, setAnimValue] = useState(new Animated.Value(0))

  const decisionList = [
    {
        text:"구성원 유형",
        requestEditable:false,
        request: {
        	type: "SELECT_ONE",
            requestID: "question#1",
            allowInputMsg : false,
            items: [
                {
                    title: "No one",
                    value: "No one"
                },
                {
                    title: "Couple",
                    value: "Couple"
                },
                {
                    title: "Friends",
                    value: "Friends"
                },
                {
                    title: "Family",
                    value: "Family"
                }
            ]
        }
    },
    {
        text:"인원 정보",
        requestEditable: false,
        request: {
        	type: "INPUT_MULTI",
            requestID: "question#2",
            allowInputMsg : false,
            items : [
                {
                  type: 'NUMBER',
                  title: 'Adults',
                  legend: '',
                  defaultValue: 0,
                  minValue: 0,
                  maxValue: 10,
                  interval: 1,
                },
                {
                  type: 'NUMBER',
                  title: 'Children',
                  legend: 'Age 2-12',
                  defaultValue: 0,
                  minValue: 0,
                  maxValue: 10,
                  interval: 1,
                },
                {
                  type: 'NUMBER',
                  title: 'Infants',
                  legend: 'Under 2',
                  defaultValue: 0,
                  minValue: 0,
                  maxValue: 10,
                  interval: 1,
                },
            ]
        }
    },
    {
        text:"미팅 포인트",
        requestEditable: true,
        request: {
        	type: "SELECT_ONE",
            requestID: "question#3",
            allowInputMsg : false,
        }
    },
    {
        text:"약속 시간",
        requestEditable: true,
        request: {
        	type: "SELECT_ONE",
            requestID: "question#4",
            allowInputMsg : false,
        }
    },
  ]

  const extraViewHeight = animValue.interpolate({
      inputRange: [0, 1],
    //   outputRange: ["-100%", "0%"]
        outputRange: [0, -45 * decisionList.length]
  })

  const testFunc = () => {
      console.log("TEST!")
  }

  useEffect(()=>{
    if(openExtra){
      Animated.timing(
          animValue,
          {
              toValue: 1,
              duration: 300,
          }
          ).start();
    } else {
      Animated.timing(
          animValue,
          {
              toValue: 0,
              duration: 300,
          }
          ).start();
    }
  },[openExtra])

  return(
      <View style={{overflow:"hidden"}}>
          <Animated.View
              style={{
                  bottom:extraViewHeight,
                  backgroundColor:"#e8eef4",
              }}
          >
            <View>
                <View
                    style={{
                        flexDirection:"row",
                        height:50,
                        alignItems:"center"
                    }}
                >
                    <View style={{paddingHorizontal:18}}>
                        <Text>Required decision items</Text>
                    </View>
                    <View style={{paddingHorizontal:18}}>
                        <Text>0/{decisionList.length} Complete</Text>
                    </View>
                    <View
                        style={{
                            flex:1,
                            alignItems:"flex-end"
                        }}
                    >
                    <TouchableOpacity
                        onPress={() => props.showExtra()}
                        style={{
                            paddingHorizontal:18
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

                </View>
                <View>
                    {
                        decisionList.map(function(item){
                            return (
                                <View
                                    style={{
                                        height:45,
                                        paddingVertical:4,
                                        paddingHorizontal:18,
                                        flexDirection:"row",
                                        justifyContent:"space-between"
                                    }}
                                >
                                    <View
                                        style={{
                                            flexDirection:"row",
                                            alignItems:"center"
                                        }}
                                    >
                                        <View>
                                            <View
                                                style={{
                                                    width:30,
                                                    height:30,
                                                    backgroundColor:"red"
                                                }}
                                            />
                                        </View>
                                        <View style={{
                                            paddingLeft:18
                                        }}>
                                            <Text>{item.text}</Text>
                                        </View>
                                    </View>
                                    <View
                                        style={{
                                            flexDirection:"row",
                                            alignItems:"center"
                                        }}
                                    >
                                        <View style={{
                                            paddingRight:18
                                        }}>
                                            <TouchableOpacity
                                                style={{
                                                    paddingHorizontal:18,
                                                    paddingVertical:4,
                                                    borderRadius:10,
                                                    backgroundColor:"#2990c2"
                                                }}
                                                onPress = {() => {
                                                    if(item.requestEditable){
                                                        Navigator.showOverlay(ScreenConst.SCREEN_REQUEST_DETAIL, "requestDetail", {
                                                            data:{
                                                                requestID: item.request.requestID,
                                                                testFunc:testFunc
                                                            }
                                                        })
                                                    } else {

                                                    }
                                                }}
                                            >
                                            {
                                                item.requestEditable ? (
                                                    <Text style={{color:"#FFFFFF"}}>메시지 작성도구</Text>
                                                ):(
                                                    <Text style={{color:"#FFFFFF"}}>메시지 보내기</Text>
                                                )
                                            }
                                            </TouchableOpacity>
                                        </View>
                                        <View>
                                            <View
                                                style={{
                                                    width:30,
                                                    height:30,
                                                    backgroundColor:"red"
                                                }}
                                            />
                                        </View>
                                    </View>
                                </View>
                            )
                        })
                    }
                </View>
            </View>
          </Animated.View>
          <View style={{borderTopColor:'#d8dee5', backgroundColor:'#FFFFFF', borderTopWidth:1}}>
              <View style={{flexDirection:'row', alignItems:'center', paddingVertical:9}}>
                  <TextInput
                      placeholder = {"Type..."}
                      style = {{flex:1, fontSize:20, marginLeft:18}}
                      onChangeText = {inputText => setInputText(inputText)}
                      value = {enableInput ? inputText : ""}
                      editable = {enableInput}
                      // placeholderStyle={{fontFamily:Font.family.body.sb}}
                  />
                  <TouchableOpacity
                      style={[styles.sendBtn,
                          {
                              // backgroundColor: enableInput? "#12d294":"#d8dee5"
                              backgroundColor:"#12d294"
                          }
                      ]}
                      // disabled = {!enableInput}
                      onPress={() => dataInput()}
                  >
                      <Text
                          style={{
                              // fontSize:Font.size.md,
                              // fontFamily:Font.family.body.sb,
                              // color: enableInput? "#FFFFFF" : "#6b7c8f"
                              color: "#FFFFFF"
                          }
                      }
                      >
                          Send
                      </Text>
                  </TouchableOpacity>
              </View>
          </View>
      </View>
  )
}


const styles = StyleSheet.create({
    headerTitleText:{
        // fontSize:Font.size.md,
        // fontFamily:Font.family.display.md,
        color:"#09294d"
    },
    headerSubTitleText:{
        // fontSize:Font.size.xxs,
        // fontFamily:Font.family.body.sb,
        color:"#6b7c8f"
    },
    subHeaderContainer:{
        width:"100%",
        height:48,
        borderTopWidth:1,
        borderBottomWidth:1,
        borderColor:'#d8dee5',
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal:18
    },
    subHeaderTitle:{
        // fontSize:Font.size.sm,
        // fontFamily:Font.family.display.md,
        color:'#09294d'
    },
    sendBtn:{
        paddingHorizontal:18,
        paddingVertical:10,
        marginLeft:10,
        marginRight:18,
        borderRadius:4
    },
    listContainer:{
        paddingVertical:5,
        paddingHorizontal:18
    }
})

export default Case08Screen