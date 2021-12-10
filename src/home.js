
import React from "react";
import Button from '@material-ui/core/Button';
import Stack from '@mui/material/Stack';

class Home extends React.Component{
  render(){
    return (
    <div>
      <h1>Welcome to Restaurant Roulette</h1>
      <h2>You're home for choosing a restaurant</h2>
      <Button variant="contained">Get Started</Button>
    </div>
    );
  }
}

export default Home;