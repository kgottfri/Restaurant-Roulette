
import React from "react";
import { render } from "react-dom";
import { hot } from 'react-hot-loader/root';
import Button from '@material-ui/core/Button';
import Stack from '@mui/material/Stack';
import { GoogleLogin } from 'react-google-login';
import { GoogleLogout } from 'react-google-login';
import GoogleLoginComponent from "./googlebutton.component";
import Header from "./header.js";
import Home from "./home.js";
import Random from "./random.js";
import styles from "./styles.module.css";
import {Outlet, Link} from "react-router-dom";


class App extends React.Component{
  constructor() {
    super();
    this.state = {
      name: "React",
      isUserAuthenticated: true
    };
  }

  render(){
    return(
  <div>
  <div>
  <Header />
  </div>
  <Outlet />
  </div>
  );
  }
}

export default hot(App);