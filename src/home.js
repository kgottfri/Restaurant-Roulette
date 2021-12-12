
import Box from '@mui/material/Box';
import Button from '@material-ui/core/Button';
import React from "react";
import Random from "./random.js";

class Home extends React.Component{
  render(){
    return (
    <div>
      <h1>Welcome to Restaurant Roulette</h1>

      <h2>You're home for choosing a restaurant</h2>
      <div class="container">
      <Box sx={{ pt: 10, mx: 'auto', width: 150 }}>
        <Button variant="contained" onClick={<Random />}>Get Started</Button>
      </Box>
      </div>
    </div>
    );
  }
}

export default Home;