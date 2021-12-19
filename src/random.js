import React from "react";
import Header from "./header.js";
import Button from '@material-ui/core/Button';
import Link from 'react-router-dom';
import Box from '@mui/material/Box';
import { compose, withProps, withHandlers, withState } from "recompose";
import { useJsApiLoader, withGoogleMap, GoogleMap, LoadScript } from "@react-google-maps/api";
// import axios from "axios";

/*Setup google places api call
  
*/
// var axios = require('axios');

// var keyword = 'keyword=cruise';
// var location = '&location=-33.8670522%2C151.1957362';
// // var location = getLocation();
// var radius = '&radius=1500';
// var type = '&type=restaurant';
var key="key=AIzaSyBU4t6d1OZIlwlTapVCDBAU5dOMgZu39CA";
var latitude;
var longitude;

const center = {
  lat: 40.7741445,
  lng: -73.971112
}
const containerStyle = {
  width: '500px',
  height: '500px'
};

function initMap(props){
  const center = {lat: props.lat, lng: props.lng};
  return (<LoadScript
    googleMapsApiKey='AIzaSyBU4t6d1OZIlwlTapVCDBAU5dOMgZu39CA'
    libraries={["places"]}
    >
  <GoogleMap
    mapContainerStyle={containerStyle}
    center={center}
    zoom={10}
  >
    { }
  <></>
  </GoogleMap>
  </LoadScript>
  )
}

class Random extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentLatLng: {
        lat: 0,
        lng: 0
      },
      isMarkerShown: false
    }
  }

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
          {/* <button onClick="getLocation()" >Random</button> */}
          <button variant="contained">Randomize</button>
        </Box>
        </div>
      );
    }
  }
  
  export default Random;