import React, { createContext } from "react";
import { Routes, Route } from "react-router-dom";
import MainComponent from "./MainComponent/MainComponent"
import Singup from "./Singincomponent/Singup";
import Singin from "./Singincomponent/Singin";
import  { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import PageNotfound from "./PageNotfound";
import Products from "./SearchAndDetails/Products";
import Men from "./Pages/Men";
import Kids from "./Pages/Kids";
import Women from "./Pages/Women";
import DetailPage from "./SearchAndDetails/DetailPage";
import { useState,useEffect } from "react";
import axios from "axios";
import Cart from "./SearchAndDetails/Cart";
import Payment from "./SearchAndDetails/Payment"
import Orders from "./SearchAndDetails/Orders"
import AdminHome from "./Admin/AdminHome";
import Dashboard from "./AdminPagesComponent/Dashboard";
import ManageOrders from "./AdminPagesComponent/ManageOrders";
import ManageProducts from "./AdminPagesComponent/ManageProducts";
import ManageUsers from "./AdminPagesComponent/ManageUsers";
import EditItems from "./AdminPagesComponent/EditItems";
import AddProducts from "./AdminPagesComponent/AddProducts";
export  const Context=createContext()
function App() {
  
  const [data,setData]=useState([])
  const [admin,setAdmin]=useState(false)
  const ProductData =async () =>{
    const response = await axios.get("http://localhost:4000/datas")
    const PopularItems = response.data
  setData(PopularItems)
  
  }
  
useEffect(()=>{
  ProductData()
  
},[])
useEffect(()=>{
  if(localStorage.getItem('Admin'))
    setAdmin(true)
})
  return (
    <div>
      
        <ToastContainer/>
      <Context.Provider value={{data}}>
       {admin &&(
        <Routes>
           {/* Admin */}

       {/* <Route path="/admin" element={<AdminHome/>}/> */}
       <Route path="/admin" element={<Dashboard/>}/>
       <Route path="/manageorders" element={<ManageOrders/>}/>
       <Route path="/manageproducts" element={<ManageProducts/>}/>
       <Route path="/manageusers" element={<ManageUsers/>}/>
       <Route path="/edititem" element={<EditItems/>}/>
       <Route path="/addproduct" element={<AddProducts/>}/>
       </Routes>
       )}

      <Routes>

        <Route path="/" element={<MainComponent setAdmin={setAdmin} />} />
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
        


       
      </Routes>
      </Context.Provider>


    </div>
  );
}

export default App;
