import React,{
    useState,
    useEffect
  } from 'react';
  import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    Image
  } from 'react-native';
    
  const Case07Screen = (props) => {
    const providerName = "Lee JiEun"
    const providerProfileUri = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSzI1mu3-eUTsne67Gf4EAd8nWJh38lMdEepos_Gtjbo5wv9UIY"
    const travelerProfileUri = "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-760x506.jpg"  
    const connectExplanation = "Once connected, you can chat with butler Jiju Shin and discuss your needs.{\n\n}The connection can be withdrawn at anytime before the offer is accepted."
    return (
        <SafeAreaView
          style={{
            flex:1,
            backgroundColor:"#f0dede",
            flexDirection:'column'
          }}
        >
          <View
            style={{
              width:"100%",
              height:56,
              backgroundColor:"red"
            }}
          >

          </View>
          <View
            style={{
              flex:1,
              paddingHorizontal:18,
              borderBottomWidth:1,
              borderBottomColor:"#c7a8a8"
            }}
          >
            <View
              style={{
                marginTop:30,
                flexDirection:"row",
              }}
            >
              <Image
                style={{
                    width:72,
                    height:72,
                    borderRadius:36
                }}
                source={{uri:travelerProfileUri}}
              />
              <Image
                style={{
                    position:'absolute',
                    left:50,
                    width:72,
                    height:72,
                    borderRadius:36
                }}
                source={{uri:providerProfileUri}}
              />
            </View>
            <View
              style={{
                marginTop:16
              }}
            >
              <Text style={{fontSize:24, color:"#09294d"}}>Connect with {providerName}?</Text>
            </View>
            <View
              style={{
                marginTop:12
              }}
            >
              <Text style={{fontSize:16, color:"#6b7c8f"}}>{connectExplanation}</Text>
            </View>
          </View>
          <View
            style={{
              width:"100%",
              height:64,
              paddingHorizontal:18,
              flexDirection:'row',
            }}
          >
            <View
              style={{
                flex:1,
                justifyContent:'center',
                alignItems:'flex-start'
              }}
            >
              <TouchableOpacity
                  style={{
                      paddingVertical:14,
                      paddingHorizontal:18,
                      alignItems:'center',
                      justifyContent:'center'
                  }}
              >
                  <Text style={{fontSize:16, color:"#09294d"}}>Cancel</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex:1,
                justifyContent:'center',
                alignItems:'flex-end'
              }}
            >
              <TouchableOpacity
                  style={{
                      paddingVertical:14,
                      paddingHorizontal:18,
                      borderRadius:4,
                      backgroundColor:"#12d294",
                      alignItems:'center',
                      justifyContent:'center'
                  }}
              >
                  <Text style={{fontSize:16, color:"#FFFFFF"}}>Connect</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
    );
  };
  
  export default Case07Screen