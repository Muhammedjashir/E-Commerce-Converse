import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import { Card,CardHeader,CardBody,Typography,Tooltip,CardFooter } from '@material-tailwind/react'
import Navbar from '../MainComponent/Navbar'


function Products() {
    const Navigate=useNavigate()
    const [data,setData]=useState([])
    const ProductDate = async () =>{
        const Response= await axios.get("http://localhost:4000/datas")
        setData(Response.data)
    }
    useEffect(()=>{
        ProductDate()
    },[])
    console.log(data);
  return (
    <div>
        <Navbar/>
        <h1 className='w-full text-center  text-3xl font-bold p-4'>All Products</h1>
      {/* Cards */}
    
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

export default Products
{/* <Card className=" cursor-pointer  h-[80%] w-[80%]  m-10">
      <CardHeader floated={false} className="h-70">
        <img className='object-cover' src={item.img} />
        
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
            <div className='text-sm '>
            {item.name}
            </div>
          
        </Typography>
        <Typography color="blue-gray" className="font-medium" textGradient>
            <div className='text-gray-600'>
            {item.price}
            </div>
          
        </Typography>
      </CardBody>
   
    </Card> */}