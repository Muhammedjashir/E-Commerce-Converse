import React from "react";
import Navbar from "./Navbar";
import Login from "../Pages/Singin";
import Register from "../Pages/Singup";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
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
