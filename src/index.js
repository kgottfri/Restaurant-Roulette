import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import styles from "./styles.module.css";

var mountNode = document.getElementById("app");
var googleButton = document.getElementById('googleButton');
ReactDOM.render(<App name="Restaurant Roulette" />, mountNode,googleButton);