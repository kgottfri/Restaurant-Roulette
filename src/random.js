import React from "react";
import Header from "./header.js";
import Button from '@material-ui/core/Button';
import Link from 'react-router-dom';
import Box from '@mui/material/Box';
import { compose, withProps, withHandlers, withState } from "recompose";
import { useJsApiLoader, useGoogleMap, GoogleMap, LoadScript } from "@react-google-maps/api";
// import axios from "axios";

/*Setup google places api call
  
*/

var key="key=AIzaSyBU4t6d1OZIlwlTapVCDBAU5dOMgZu39CA"; //Google API Key
const containerStyle = {
  width: '500px',
  height: '500px'
};

function initMap(props){
  const center = {lat: props.lat, lng: props.lng};
  return (<LoadScript
    googleMapsApiKey='AIzaSyBU4t6d1OZIlwlTapVCDBAU5dOMgZu39CA'
    // libraries={["places"]}
    >
  <GoogleMap
    // onTilesLoaded={randomPlace()}
    mapContainerStyle={containerStyle}
    center={center}
    zoom={10}
    
  >
    {props.places && props.places.map((place, i) =>
                <Marker key={i} position={{ lat: place.geometry.location.lat(), lng: place.geometry.location.lng() }} />
            )}
  <></>
  </GoogleMap>
  </LoadScript>
  )
}
function newMap() {
  const map = useGoogleMap();
}


class Random extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentLatLng: {
        lat: 0,
        lng: 0
      },
      isMarkerShown: false,
      place: null
    }
  }
//Gets users current location via browser and updates map to center on this loc
  componentDidMount(){
    this.getGeoLocation()
    
  }

  getGeoLocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                console.log(position.coords);
                this.setState(prevState => ({
                    currentLatLng: {
                        ...prevState.currentLatLng,
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    }
                }))
            }
        )
    } else {
        error => console.log(error)
    }
  }
  render() {      
      return (
        <div>
        <div style={{padding: "10px"}}>
        <Box sx={{pl: '350px', mx: 'auto'}}>
        {initMap(this.state.currentLatLng)}
        </Box>
        </div>
        <Box sx={{ pt: 5, mx: 'auto', width: 150 }}>
          <button variant="contained" >Randomize</button>
        </Box>
        </div>
      );
    }
  }
  
  export default Random;