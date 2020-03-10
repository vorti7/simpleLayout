import React,{
  useState,
  useEffect
} from 'react';
import {
  View,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';

import { HeaderLayout } from '../components'


// This is just test List
const testQList = [
  {
    sender : "b",
    text:"hello from b"
  },
  {
    sender : "b",
    text:"Please Answer This Question",
    question:{
      questionType:1,
      text:"Where are you from?",
      selectList: ["Korea", "Japan", "China"]
    }
  }
]


const Case02Screen = (props) => {

  const myID = "a"
  const [ chatData, setChatData ] = useState([])
  const [inputText, setInputText] = useState("")

  const [ question, setQuestion] = useState({})
  const answerComponent = () => {
    console.log(question)
    return (
      <View>
        <Text>sss</Text>
      </View>
    )
  }

  const inputChat = () => {
    const changeChatData = [...chatData]

    changeChatData.push({
      sender:myID,
      text:inputText
    })
    setInputText("")
    setChatData(changeChatData)
  }

  // This is just Test code
  const [testPointer, setTestPointer] = useState(0)
  const testQInput = () => {
    if (testPointer <= testQList.length-1){
      const changeChatData = [...chatData]
  
      changeChatData.push(testQList[testPointer])
      if(testQList[testPointer].question&&Object.keys(question).length<1){
        setQuestion(testQList[testPointer].question)
      }
      setInputText("")
      setChatData(changeChatData)
      setTestPointer(testPointer+1)
    }
  }

  return (
      <View
        style={{
          flex:1
        }}
      >
        {/* <View
          style={{
            width:"100%",
            height:50,
            backgroundColor:"yellow",
            flexDirection:'row',
            justifyContent:'space-between'
          }}
        >
          <View style={{width:100, height:20, borderWidth:1}}/>
          <View style={{width:200, height:20, borderWidth:1}}/>
          <View style={{width:50, height:20, borderWidth:1}}/>
        </View> */}
      <HeaderLayout
          componentId = {props.componentId}
          headerColor = "#ffffff"
          headerVisible = {true}
          headerSize = {"15%"}
          leftHeaderComponent = {
            <View
              style={{
                width:"100%",
                height:"100%",
              }}
            >
              <TouchableOpacity
                onPress={() => testQInput()}
              >
                <Text>Test Left Header</Text>
              </TouchableOpacity>
            </View>
          }
          // centerHeaderComponent = {
          //   <View
          //     style={{
          //       width:"100%",
          //       height:"100%",
          //       backgroundColor:'green'
          //     }}
          //   >
          //     <Text>Test Center Header</Text>
          //   </View>
          // }
          rightHeaderType = {"close"}
          // rightHeaderComponent = {
          //   <View
          //     style={{
          //       width:"100%",
          //       height:"100%",
          //       backgroundColor:'blue'
          //     }}
          //   >
          //     <Text>Test Right Header</Text>
          //   </View>
          // }
        >
        <FlatList
          data={chatData}
          renderItem={({item, index}) => <ChatItem item={item}/>}
        />
      </HeaderLayout>


        <View
          style={{
            width:"100%",
            // position:"absolute",
            // bottom:0
          }}
        >
          <View
            style={{
              width:"100%",
              flexDirection:'row'
            }}
          >
            {answerComponent()}
          </View>
          <View
            style={{
              width:"100%",
              flexDirection:'row'
            }}
          >
            <View
              style={{
                flex:5,
                backgroundColor:'blue'
              }}
            >
              <TextInput
                value = {inputText}
                onChangeText = {(text) => setInputText(text)}
              />
            </View>
            <View
                style={{
                  flex:1,
                  backgroundColor:'green',
                }}
            >
              <TouchableOpacity
                style={{
                  flex:1,
                  alignItems:'center',
                  justifyContent:'center'
                }}
                onPress={() => inputChat()}
              >
                <Text>Input</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
  );
};

const ChatItem = (props) => {

  const myID = "a";

  const lineContainerStyle = {
    width:"100%",
    padding:10,
    borderWidth:1,
    alignItems:props.item.sender == myID ? "flex-end" : "flex-start"
  }
  const chatBubbleStyle = {
    width:"50%",
    padding:5,
    borderWidth:1
  }

  return (
    <View
      style={[ lineContainerStyle ]}
    >
      <View
        style={[chatBubbleStyle]}
      >
        <Text>{props.item.text}</Text>
      </View>
    </View>
  )
}

export default Case02Screen