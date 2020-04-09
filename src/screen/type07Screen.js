import React, { useState, useCallback, useEffect, useRef } from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';
import { Navigator, ScreenConst } from '../navigation'
import MapView, { PROVIDER_GOOGLE, Marker, AnimatedRegion } from 'react-native-maps'

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const Type07Screen = (props) => {

    const screenFunc = (index) => {
        // go Next Screen
        // index : 0 - popScreen
        //       : x>0 - pushScreen 
        //       : x<0 - setRootScreen
        pushList = []
        setRootList = []

        if (index > 0){
            if(index<=pushList.length){
                Navigator.pushScreen(props.componentId, pushList[index-1])
            }
        } else if(index == 0){
            Navigator.popScreen(props.componentId)
        } else if(index < 0) {
            if(-index<=setRootList.length){
                Navigator.setRootScreen(setRootList[-index-1])
            }
        }
    }

    const initialRegion = {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }

    const [ markerCoordinate, setMarkerCoordinate ] = useState({"latitude": 37.77721975868359, "longitude": -122.4338846281171})

    useEffect(() =>{
        console.log(markerCoordinate)
    }, [markerCoordinate])
    

    return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <View style={{width:300, height:500}}>
            {/* <Image
                style={{width: 200, height: 200}}
                source={{uri: 'https://maps.googleapis.com/maps/api/staticmap?size=512x512&maptype=roadmap\&markers=size:mid%7Ccolor:red%7CSan+Francisco,CA%7COakland,CA%7CSan+Jose,CA&key=AIzaSyCTN2MGxa6BuUF7vamrjS-J56i0wXdLZYk'}}
            /> */}
                <GooglePlacesAutocomplete
                    placeholder='Enter Location'
                    minLength={2}
                    autoFocus={true}
                    returnKeyType={'default'}
                    fetchDetails={true}
                    styles={{
                        container: {
                            zIndex: 10,
                            overflow: 'visible',
                          },
                          textInputContainer: {
                            borderTopWidth: 0,
                            borderBottomWidth: 0,
                            height: 50,
                            overflow: 'visible',
                            backgroundColor: "#FFFFFF",
                            borderColor: "#FFFFFF",
                            borderRadius: 100,
                          },
                          textInput: {
                            backgroundColor: 'transparent',
                            fontSize: 15,
                            lineHeight: 22.5,
                            paddingBottom: 0,
                            flex: 1
                          },
                          listView: {
                            position: 'absolute',
                            top: 60,
                            left: 10,
                            right: 10,
                            backgroundColor: 'white',
                            borderRadius: 5,
                            flex: 1,
                            elevation: 3,
                            zIndex: 10
                          },
                          description: {
                            color: '#1faadb'
                          },
                          predefinedPlacesDescription: {
                            color: '#1faadb'
                          }
                    }}
                    currentLocation={true}
                    query={{
                        // available options: https://developers.google.com/places/web-service/autocomplete
                        key: 'AIzaSyCTN2MGxa6BuUF7vamrjS-J56i0wXdLZYk',
                        language: 'en', // language of the results
                        types: 'geocode' // default: 'geocode'
                    }}
                    onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
                        console.log(Object.keys(data));
                        console.log(Object.keys(details));
                        console.log(details)
                        setRegion({latitude: details.geometry.location.lat, longitude: details.geometry.location.lng})
                    }}
                >
                    <MapView
                        provider={PROVIDER_GOOGLE}
                        style={{flex:1}}
                        initialRegion = {initialRegion}
                        zoomEnabled={false}
                        onPoiClick={(poi) => console.log(poi.nativeEvent.coordinate)}
                    >
                        <Marker
                            coordinate={markerCoordinate}
                            onSelect={e => console.log('onSelect')}
                            onDrag={e => console.log('onDrag')}
                            onDragStart={e => console.log('onDragStart')}
                            onDragEnd={e => {
                                console.log('onDragEnd')
                                setMarkerCoordinate(e.nativeEvent.coordinate)
                            }}
                            onPress={e => console.log('onPress')}
                            draggable
                        ></Marker>
                    </MapView>
                </GooglePlacesAutocomplete>
            </View>
        </View>
    )
}

export default Type07Screen