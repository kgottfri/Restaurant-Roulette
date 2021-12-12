
import React from "react";
import { hot } from 'react-hot-loader/root';
import Button from '@material-ui/core/Button';
import Stack from '@mui/material/Stack';
import { GoogleLogin } from 'react-google-login';
import { GoogleLogout } from 'react-google-login';
import GoogleLoginComponent from "./googlebutton.component";
import Header from "./header.js";
import Home from "./home.js";

class App extends React.Component {
  render() {
    const { name } = this.props;
    
    return (
      <div>
      <Header />
      <Home />
      </div>
    );
  }
}

export default hot(App);
