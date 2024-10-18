import React, { createContext } from "react";
import { Routes, Route } from "react-router-dom";
import MainComponent from "./MainComponent/MainComponent";
import Register from "./LoginComponent/Singup";
import Login from "./LoginComponent/Singin";
import Singup from "./LoginComponent/Singup";
import Singin from "./LoginComponent/Singin";
import Routing from "./MainComponent/Routing";
import  { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import PageNotfound from "./PageNotfound";
import Products from "./PagesComponent/Products";
import Men from "./PagesComponent/Men";
import Kids from "./PagesComponent/Kids";
import Women from "./PagesComponent/Women";
import DetailPage from "./SearchAndDetails/DetailPage";
import { useState,useEffect } from "react";
import axios from "axios";
import Cart from "./SearchAndDetails/Cart";
import Payment from "./SearchAndDetails/Payment";
import Orders from "./SearchAndDetails/Orders";
export  const Context=createContext()
function App() {
  
  const [data,setData]=useState([])
  const ProductData =async () =>{
    const response = await axios.get("http://localhost:4000/datas")
    const PopularItems = response.data
  setData(PopularItems)
  
  }
  
useEffect(()=>{
  ProductData()
  
},[])
  return (
    <div>
      
        <ToastContainer/>
      <Context.Provider value={{data}}>
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="/singup" element={<Singup />} />
        <Route path="/singin" element={<Singin />} />
        <Route path="*" element={<PageNotfound/>} /> 
        <Route path="/product" element={<Products/>} />
        <Route path="/men" element={<Men/>} />
        <Route path="/kids" element={<Kids/>}/>
        <Route path="/women" element={<Women/>}/>
        <Route path="/detail/:id" element={<DetailPage/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/orders" element={<Orders/>}/>
        {/* <Route path="/"
        element={
          <Routing>
            <Navigator/>
          </Routing>
        } */}
        
      </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;
