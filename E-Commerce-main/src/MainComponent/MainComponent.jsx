import React from "react";
import Navbar from "./Navbar";
import Login from "../LoginComponent/Singin";
import Register from "../LoginComponent/Singup";
import { Routes, Route } from "react-router-dom";
import Home from "../PagesComponent/Home";
import axios from 'axios'



function MainComponent() {
  
  return (
    <div>
      <Navbar />
      <div>
<Home/>

      </div>
    </div>
  );
}

export default MainComponent;
