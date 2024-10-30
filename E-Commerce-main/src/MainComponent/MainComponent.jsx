import React from "react";
import Navbar from "./Navbar";
import Login from "../Singincomponent/Singin";
import Register from "../Singincomponent/Singup";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import axios from 'axios'



function MainComponent({setAdmin}) {
  
  return (
    <div>
      <Navbar setAdmin={setAdmin}/>
      <div>
<Home/>

      </div>
    </div>
  );
}

export default MainComponent;
