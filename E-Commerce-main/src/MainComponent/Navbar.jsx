import React, { useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faUser  } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
// import {  Button } from "@material-tailwind/react";
import {
  Badge,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button
} from "@material-tailwind/react";
import { toast } from 'react-toastify';

const Navbar = () => {
  const[cartCounts,setCartCount]=useState([])
  const [input,setInput]=useState(" ")
  const Idee=localStorage.getItem("id")
  const admin =localStorage.getItem('Admin')
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItems,setCartItems]=useState(0)
  const Navigate=useNavigate()
  const[data,setData]=useState([])
  const OnChange =async (e)=> {
    const Value=(e.target.value.toLowerCase()) 
    setInput(Value)
    const Response = await axios.get('http://localhost:4000/datas')
    setData (Response.data.filter((item)=> item.name.toLowerCase().includes(Value)))
    
  }


  console.log(data);

  const SingOut = () =>{
    localStorage.clear("id")
    Navigate('/signin')
  }

const CartCount = async () =>{
  const Res = await axios.get(`http://localhost:4000/users/${Idee}`)
  setCartCount (Res.data.cart)
  
}
useEffect(()=>{
  CartCount()
},[])

  return (
    <>
    
    <nav className=" sticky z-[1] w-[100%]  top-0 flex items-center justify-between flex-wrap bg-white py-0 lg:px-6 shadow border-solid border-t-2 border-gray-200 ">
      {/* Logo and Hamburger Men */}
      

      
      <div className="  flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-3 lg:pb-0">
     
        <div className="  flex items-center flex-shrink-0 text-gray-900 mr-16 mb-9z" >
            <div>
            <img  className ='h-20' src="https://static.thenounproject.com/png/560147-200.png" alt="Shoes image " />

            </div>
          <button className="font-semibold text-xl tracking-tight cursor-pointer  " onClick={()=>Navigate('/')}>Converse</button>
        </div>
        <div className="block lg:hidden">
          <button
            id="nav"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="  flex items-center px-3 py-2 border-2 rounded text-blue-700 border-blue-700 hover:text-blue-700 hover:border-blue-700"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Men Items */}
      <div
        className={`menu w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8 ${
          isMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="text-md font-bold text-neutral-500 lg:flex-grow">
          <a
            
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-black mr-2"
          >
            <button onClick={()=>Navigate('/men')}> Men</button>
           
          </a>
          <a
            
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-black mr-2"
          >
            <button onClick={()=>Navigate('/women')}>Women</button>
            
          </a>
          <a
            
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-black mr-2"
          >
            <button onClick={()=>Navigate('/kids')}> Kids</button>
           
          </a>
          <a
            
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-black mr-2"
          >
            <button onClick={()=>Navigate('/product')}> Products</button>
           
            </a>
        </div>

        {/* Search Bar */}
      
        <div className="relative mx-auto text-gray-300 lg:block hidden mr-3 ">
          <input
            className="  bg-black border-2 border-gray-950 h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
            type="search"
            // name="search"
            onChange={OnChange}
            placeholder="Search"
  
          />     
         {input?
          
          <div className='left-0 overflow-auto h-[400px] absolute w-[100%] top-[70px] z-50'>
            {data.map((e)=>{
            return(
              <div className=' bg-white ' >
                <div className='flex justify-between border  p-2'>
                  
                  <h1 className=''>
                    {e.name}
                  </h1>
                  <div >
                    <img src={e.img} alt="" className='w-20 h-14 object-fill' />
                  </div>
                </div>
              </div>
            )
        
          })}
          </div>
          :null}
        
       
          
          <button type="submit" className="absolute right-0 top-0 mt-3 mr-2">
            <svg
              className="  text-white h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              style={{ enableBackground: 'new 0 0 56.966 56.966' }}
              xmlSpace="preserve"
              width="512px"
              height="512px"
            >
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
          </button>
        </div>
       
 {/* Cart Icon */}
 <div className="relative flex items-center ">
 
   <Badge content={cartCounts.length}>
          <button
            onClick={()=>Navigate('/cart')} // Simulate adding to cart
            className="text-gray-600 hover:text-white px-4 py-2 rounded hover:bg-black"
          >
            <FontAwesomeIcon icon={faShoppingCart} className="h-6 w-6" />
            {cartItems > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full px-1">
                {cartItems}
              </span>
            )}

          </button>
        </Badge>
       
        </div>

        
        


        {/* Sign In and Login */}
        
        <div className="flex cursor-pointer" >
        
        <Menu>
      <MenuHandler>
        
        <FontAwesomeIcon  icon={faUser}  className="text-gray-500 text-3xl ml-4 hover:text-black" />

      </MenuHandler>
      <MenuList>
        <MenuItem> <div className=" block text-md px-4 ml-2 py-2 rounded text-gray-600 font-bold hover:text-black mt-4lg:mt-0"
>         {Idee? <button onClick={()=>{SingOut(),Navigate("/singin")}}>SIGN OUT</button>:<button onClick={()=>Navigate("/singup")}>SING IN</button> }
           </div></MenuItem>

           {admin?<MenuItem onClick={()=>Navigate('/admin')} className='hover:text-black font-bold'>
           {/* {toast.success("Admin Login Successfully")} */}
          Go to Admin page 
          
           
           </MenuItem>:null
           }
        
        {/* <MenuItem>Menu Item 3</MenuItem> */}
      </MenuList>
    </Menu>
          {/* <div className="block text-md px-4 py-2 rounded text-gray-600 ml-2 font-bold hover:text-white mt-4 hover:bg-black lg:mt-0"
>
            <button onClick={()=>Navigate("/singup")}>SING UP</button>
            
            </div> */}
           
         
        </div>
      </div>
    </nav>
    

   
   
  </>
  );
};

export default Navbar;
