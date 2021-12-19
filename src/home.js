
import Box from '@mui/material/Box';
import Button from '@material-ui/core/Button';
import React from "react";
import Random from "./random.js";
import {
  Outlet,
    Link,
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
  import { useJsApiLoader, withGoogleMap, GoogleMap, LoadScript } from "@react-google-maps/api";
 
class Home extends React.Component{
  render(){

    return (
    <div>
      <h1>Welcome to Restaurant Roulette</h1>

      <h2>You're home for choosing a restaurant</h2>

      <div>
      <Box sx={{ pt: 10, mx: 'auto', width: 150 }}>
        <Button variant="contained"><Link to="/random">Get Started</Link></Button>
      </Box>
      </div>
      <Outlet />
    </div>
    );
  }
}

export default Home;