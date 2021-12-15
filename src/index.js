import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import styles from "./styles.module.css";
import Random from "./random.js";
import Home from "./home.js";
import {
    BrowserRouter,
    Routes,
    Route,
    Link
  } from "react-router-dom";

var mountNode = document.getElementById("app");
var googleButton = document.getElementById('googleButton');
// var random = document.getElementById("random");
ReactDOM.render(
    <BrowserRouter>
    <App name="Restaurant Roulette"/>
      <Routes>
        <Route exact path = "/" element={<Home />} />
        <Route path="random" element={<Random />} />
      </Routes>
    </BrowserRouter>, 
    mountNode,googleButton);