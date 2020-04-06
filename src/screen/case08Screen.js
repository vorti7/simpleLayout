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
            onPress={() => setOpenExtra(!openExtra)}
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
      />
      </SafeAreaView>
  );
};

function InputContainer(props){
    
  const [ inputText, setInputText ] = useState('')
  const [ responseData, setResponseData ] = useState({})

  const openExtra = props.openExtra ? true : false

  const extraInputData = props.extraInputData ? props.extraInputData : {}
  const enableInput = Object.keys(extraInputData).length==0 ? true : extraInputData.allowInputMsg ? extraInputData.allowInputMsg : false

  const [animValue, setAnimValue] = useState(new Animated.Value(0))
  const extraViewHeight = animValue.interpolate({
      inputRange: [0, 1],
      outputRange: ["-100%", "0%"]
  })

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
                  paddingVertical: Object.keys(extraInputData).length>0 ? 13 : 5,
                  paddingHorizontal:18,
              }}
          >
            <View>
              <View
                style={{width:"100%", height:50, backgroundColor:"red"}}
              >

              </View>
              <View
                style={{width:"100%", height:200, backgroundColor:"blue"}}
              >

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