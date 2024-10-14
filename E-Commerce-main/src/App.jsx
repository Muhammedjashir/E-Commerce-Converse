import React from "react";
import { Routes, Route } from "react-router-dom";
import MainComponent from "./MainComponent/MainComponent";
import Register from "./Pages/Singup";
import Login from "./Pages/Singin";
import Singup from "./Pages/Singup";
import Singin from "./Pages/Singin";
import Routing from "./Pages/Routing";
import  { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import PageNotfound from "./PageNotfound";
import Products from "./Pages/Products";
import Men from "./Pages/Men";
import Kids from "./Pages/Kids";
import Women from "./Pages/Women";
function App() {
  return (
    <div>
      
        <ToastContainer/>
      
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="/singup" element={<Singup />} />
        <Route path="/singin" element={<Singin />} />
        <Route path="*" element={<PageNotfound/>} /> 
        <Route path="/product" element={<Products/>} />
        <Route path="/men" element={<Men/>} />
        <Route path="/kids" element={<Kids/>}/>
        <Route path="/women" element={<Women/>}/>
        {/* <Route path="/"
        element={
          <Routing>
            <Navigator/>
          </Routing>
        } */}
        
      </Routes>
    
    </div>
  );
}

export default App;
