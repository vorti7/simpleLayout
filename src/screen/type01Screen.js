import React,{
    useState,
    useEffect
  } from 'react';
  import {
    View,
    Text,
    FlatList
  } from 'react-native';
  import { HeaderLayout } from '../components'
  
  const Type01Screen = (props) => {

    const [headerShow, setHeaderShow] = useState(true)

    const testData = [
      {
        title: "A Title",
        content: "This is A...................................Content"
      },
      {
        title: "B Title",
        content: "This is B...................................Content"
      },
      {
        title: "C Title",
        content: "This is C...................................Content"
      },
      {
        title: "D Title",
        content: "This is D...................................Content"
      },
      {
        title: "E Title",
        content: "This is E...................................Content"
      },
      {
        title: "F Title",
        content: "This is F...................................Content"
      },
      {
        title: "G Title",
        content: "This is G...................................Content"
      },
      {
        title: "H Title",
        content: "This is H...................................Content"
      },
      {
        title: "I Title",
        content: "This is I...................................Content"
      },
      {
        title: "J Title",
        content: "This is J...................................Content"
      },
      {
        title: "K Title",
        content: "This is K...................................Content"
      },
      {
        title: "L Title",
        content: "This is L...................................Content"
      },
      {
        title: "M Title",
        content: "This is M...................................Content"
      },
      {
        title: "N Title",
        content: "This is N...................................Content"
      },
      {
        title: "O Title",
        content: "This is O...................................Content"
      },
      {
        title: "P Title",
        content: "This is P...................................Content"
      },
      {
        title: "Q Title",
        content: "This is Q...................................Content"
      },
      {
        title: "R Title",
        content: "This is R...................................Content"
      },
      {
        title: "S Title",
        content: "This is S...................................Content"
      },
      {
        title: "T Title",
        content: "This is T...................................Content"
      },
      {
        title: "U Title",
        content: "This is U...................................Content"
      },
      {
        title: "V Title",
        content: "This is V...................................Content"
      },
      {
        title: "W Title",
        content: "This is W...................................Content"
      },
      {
        title: "X Title",
        content: "This is X...................................Content"
      },
      {
        title: "Y Title",
        content: "This is Y...................................Content"
      },
      {
        title: "Z Title",
        content: "This is Z...................................Content"
      }
    ]
    return (
      <HeaderLayout
        componentId = {props.componentId}
        headerPosition = {'absolute'}
        headerColor = "#90DE98"
        headerVisible = {headerShow}
        leftHeaderType = {"back"}
        headerSize = {"15%"}
        // leftHeaderComponent = {
        //   <View
        //     style={{
        //       width:"100%",
        //       height:"100%",
        //       backgroundColor:'red'
        //     }}
        //   >
        //     <Text>Test Left Header</Text>
        //   </View>
        // }
        centerHeaderText = {"Center Title"}
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
          data = {testData}
          renderItem = { ({item}) =>
            <View
              style={{
                width:"100%",
                height:100,
                alignItems:'center',
                justifyContent:'center',
              }}
            >
              <Text style={{fontSize:30}}>{item.title}</Text>
              <Text style={{fontSize:20}}>{item.content}</Text>
            </View>
          }
          // onScroll={()=>{console.log("Drrrrr")}}
          onMomentumScrollBegin={()=>{setHeaderShow(false)}}
          onMomentumScrollEnd={()=>{setHeaderShow(true)}}
        >

        </FlatList>
      </HeaderLayout>
    );
  };
  
  export default Type01Screen