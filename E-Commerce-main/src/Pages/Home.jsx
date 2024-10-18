import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { Context } from '../App';
import Footer from '../FooterComponent/Footer';

function Home() {
  const Navigate=useNavigate()
  const [data,setData]=useState([])
  const ProductData =async () => {
    const response = await axios.get("http://localhost:4000/datas")
    const PopularItems = response.data.filter((item)=>item.type==="popular")
  setData(PopularItems)
  
  }
  
useEffect(()=>{
  ProductData()
  
},[])

// const {data}=useContext(Context)
console.log(data);
  
  return (
    <div >
      
      <div  className='cursor-pointer mt-1'>
      
      <img   src="https://www.converse.in/media/wysiwyg/Website_Banner_6.png?auto=webp&format=png&quality=85" alt="" />
     <h1 className='px-4 text-3xl font-bold '>Inspired By The Summer Games</h1>
     <div className='flex justify-between'>
        <img className='object-contain h-50 w-90' src="https://www.converse.in/media/wysiwyg/27septhomepage-06.png?auto=webp&format=png&quality=85" alt="" />
     
     <div>
      <div>
        <img onClick={()=>Navigate('/product')} className='bg-no-repeat h-[57.9vh] object-cover ' src="https://www.converse.in/media/wysiwyg/27septhomepage-04.png?auto=webp&format=png&quality=85" alt="" />
        </div>
        <div >
          <img  className ='h-[74.7vh] object-cover' src="https://www.converse.in/media/wysiwyg/27septhomepage-05.png?auto=webp&format=png&quality=85" alt="" />
          
      
        </div>
        </div>
     </div>
     </div>
     <h1 className='w-full   text-3xl font-bold p-4'>Shop by popular items! </h1>
     
     {/* datas */}
     <div className='bg-gray-100 grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1  place-items-center   '>
      {
        data.map((item)=>{
          return(


<div className='p-2 bg-white mt-2 shadow-sm   cursor-pointer h-[350px] w-[300px] flex flex-col  rounded-lg'>
    <div className='overflow-hidden flex justify-center'>
        <img onClick={()=>Navigate(`/detail/${item.id}`)} className=' object-cover duration-150 transition-all hover:scale-110 overflow-hidden 
        h-[250px] w-[250px] rounded-lg
        ' src={item.img} alt="" />
    </div>
    <div className='flex flex-col gap-2 mt-2 ml-4 mr-4'>
        <div className='font-bold '>    {item.name}</div>
       <div className='flex justify-between'>
       <div className=' font-bold text-gray-300'>{item.brand}</div>
        <div className='text-black font-bold'> Price:   {item.price}</div>
       </div>
    </div>
</div>
          )
        })
      }
     
     </div >



<h1 className='w-full   text-3xl font-bold p-4'>From Our Community </h1>

         <div className='flex justify-between' >

        
           <div>
           <img   src="https://www.converse.in/media/wysiwyg/july_15_homepage_1_.png?auto=webp&format=png&quality=85" alt="" />
           
           <img  className='cursor-pointer' src="https://www.converse.in/media/wysiwyg/oct11-12.png?auto=webp&format=png&quality=85" alt="" />  
          
           </div>
          <img className='object-contain h-50 w-90' src="https://www.converse.in/media/wysiwyg/july_15_homepage_1.png?auto=webp&format=png&quality=85" alt="" />
         
          </div>

         <div className='flex justify-between mt-7'>

          <img  className='h-[60vh] w-25'  src="https://www.logo.wine/a/logo/Converse_(shoe_company)/Converse_(shoe_company)-Converse2-White-Dark-Background-Logo.wine.svg" alt="" />
         
         <img  className='flex justify-between h-[60vh] w-25' src="https://www.logo.wine/a/logo/Converse_(shoe_company)/Converse_(shoe_company)-Logo.wine.svg" alt="" />
         </div>


         <div>
  

         </div>

        
        <Footer/>

    </div>
  )
}

export default Home
