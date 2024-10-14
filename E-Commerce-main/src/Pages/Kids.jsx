import axios from 'axios'
import React, { useEffect, useState } from 'react' 
import Navbar from '../MainComponent/Navbar'
import { Link } from 'react-router-dom'
function Kids() {
    const [data,setData]=useState([])
    const ProductData =async ()=>{
    const Response = await axios.get("http://localhost:4000/datas")
    const Kidsproduct = Response.data.filter((item)=>item.category==='kids')
    setData(Kidsproduct)
}
useEffect(()=>{
    ProductData()
},[])
console.log(data);
  return (
    <div>

        <Navbar/>

        <div className='text-center text-xs'>
        <Link  to='/' >Home/   </Link> 
        <Link  to='/men' >Men/  </Link>
        <Link  to='/women' >Women/  </Link>
       
        </div>
        <h1 className='w-full text-center  text-3xl font-bold p-4'>Kids</h1>
        
        <div className='bg-gray-100 grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1  place-items-center   '>
      {
        data.map((item)=>{
          return(


<div className='p-2 bg-white mt-2 shadow-sm  cursor-pointer h-[350px] w-[300px] flex flex-col  rounded-lg'>
    <div className='overflow-hidden flex justify-center'>
        <img className=' object-cover duration-150 transition-all hover:scale-110 overflow-hidden 
        h-[250px] w-[250px] rounded-lg
        ' src={item.img} alt="" />
    </div>
    <div className='flex flex-col gap-2 mt-2 ml-4 mr-4'>
        <div className='font-bold '>    {item.name}</div>
       <div className='flex justify-between'>
       <div className=' font-bold text-gray-300'>{item.brand}</div>
        <div className='text-black font-bold'>    {item.price}</div>
       </div>
    </div>
</div>



          )
        })
      }
     

     </div>

      
    </div>
  )
}

export default Kids
