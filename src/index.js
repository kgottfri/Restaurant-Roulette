import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.css";
// import "/public/index.html";


var mountNode = document.getElementById("app");
var googleButton = document.getElementById('googleButton');
ReactDOM.render(<App name="Restaurant Roulette" />, mountNode,googleButton);