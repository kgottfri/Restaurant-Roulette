
import React from "react";
import { hot } from 'react-hot-loader/root';
import Button from '@material-ui/core/Button';
import Stack from '@mui/material/Stack';
import { GoogleLogin } from 'react-google-login';

class App extends React.Component {
  render() {
    const { name } = this.props;
    const responseGoogle = (response) => {
      console.log(response);
    }
    return (
      <>
      <GoogleLogin
        clientId="717956367850-cg8brdm11t24qeqs5jhkiqgn7kbglncd.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy="single_host_origin"
      />    
      <h1>Welcome to Restaurant Roulette</h1>
      <h2>You're home for choosing a restaurant</h2>
      <Button variant="contained">Get Started</Button>
      </>
    );
  }
}

export default hot(App);
