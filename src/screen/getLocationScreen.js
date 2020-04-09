import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

import { ScreenConst, Navigator } from '../navigation'

import MapView, { PROVIDER_GOOGLE, Marker, AnimatedRegion } from 'react-native-maps'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default function GetLocationScreen(props) {

  const initialRegion = {
    latitude: 37.5478442,
    longitude: 126.9207163,         
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  }

  const [ mapRegion, setMapRegion ] = useState(initialRegion)

  // const [ markerCoordinate, setMarkerCoordinate ] = useState(new AnimatedRegion(initialRegion))
  const [ markerCoordinate, setMarkerCoordinate ] = useState(initialRegion)
  const [ address, setAddress ] = useState("")

  const mapRef = useRef(null);
  const markerRef = useRef(null);


  return (
    <View style={{
      flex:1,
      alignItems:"center",
      justifyContent:"center",
      backgroundColor:"rgba(0,0,0,0.5)"
    }}>
      <TouchableOpacity
        style={{
          width:"100%",
          height:"100%"
        }}
        onPress={() => Navigator.dismissOverlay(props.componentId)}
      />
      <View
        style={{
          position:"absolute",
          width:"70%",
          height:"70%",
          backgroundColor:"#FFFFFF"
        }}
      >
        <GooglePlacesAutocomplete
          ref = {mapRef}
          placeholder='Enter Location'
          minLength={2}
          autoFocus={false}
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
              types: ['geocode'] // default: 'geocode'
          }}
          onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
              // mapRef.current.clearText()
              // console.log(Object.keys(data));
              console.log(Object.keys(details));
              setMapRegion({...mapRegion, latitude: details.geometry.location.lat, longitude: details.geometry.location.lng})
              setMarkerCoordinate({latitude: details.geometry.location.lat, longitude: details.geometry.location.lng})
              setAddress(details.formatted_address)
          }}
        >
          <MapView
              provider={PROVIDER_GOOGLE}
              style={{flex:1}}
              region = {mapRegion}
              // onRegionChange = {setMapRegion}
              zoomEnabled = {false}
          >
            <Marker.Animated
                ref = {markerRef}
                coordinate={markerCoordinate}
                onSelect={e => console.log('onSelect')}
                onDrag={e => console.log('onDrag')}
                onDragStart={e => console.log('onDragStart')}
                onDragEnd={e => {
                    console.log('onDragEnd')
                    console.log(e.nativeEvent.coordinate)
                    setMarkerCoordinate(e.nativeEvent.coordinate)
                }}
                onPress={e => console.log('onPress')}
                // draggable
            />
          </MapView>
        </GooglePlacesAutocomplete>
        <View
          style={{
            flexDirection:'row'
          }}
        >
          <TouchableOpacity
            style={{
              flex:1,
              paddingVertical:10,
              backgroundColor:"white",
              alignItems:"center",
              justifyContent:"center"
            }}
            onPress={() => Navigator.dismissOverlay(props.componentId)}
          >
            <Text>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex:1,
              paddingVertical:10,
              backgroundColor:"black",
              alignItems:"center",
              justifyContent:"center"
            }}
            onPress = {() => {
              console.log(markerCoordinate)
              props.data.setData({
                locationText:address,
                locationCoordinate: markerCoordinate.latitude + ", " + markerCoordinate.longitude
              })
              Navigator.dismissOverlay(props.componentId)
            }}
          >
            <Text style={{color:"white"}}>Input</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}