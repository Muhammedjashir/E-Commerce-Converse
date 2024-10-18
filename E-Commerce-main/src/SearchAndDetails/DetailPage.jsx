import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../MainComponent/Navbar';
import { toast } from 'react-toastify';
import Footer1 from '../FooterComponent/Footer1';

function DetailPage() {
    const Navigate=useNavigate()
    const {id}=useParams()
    console.log(id);
    const [data,setData]=useState([])
    const ids =localStorage.getItem("id")
    const ProductData = async ()=>{
        const Response = await axios.get("http://localhost:4000/datas")
        const DetailPage=Response.data.filter((item)=>item.id===id)
        console.log(DetailPage);
        setData(DetailPage)
    }
    useEffect(()=>{
        ProductData()
    },[])

    const AddtoCart = async (data)=> {
        if(ids){
 
            const Res = await axios.get(`http://localhost:4000/users/${ids}`)
            const UserCart = Res.data.cart
            const CheckData  =  UserCart.find((item)=>item.id===data.id)
            if(CheckData){
                toast.warning('Product already exist')
            }else{
                const UpCart=[...UserCart,data]
               const res=await axios.patch(`http://localhost:4000/users/${ids}`,{cart:UpCart})
               toast.success('added to cart')
               console.log(res.data);
            }
        }else{
            toast.warning("Please Singin!")
            Navigate('/singin')
        }
       
    }
console.log(ids);
  return (
    
    <div>
<Navbar/>

<div className='   h-[100%] flex justify-center items-center  '>
      {
        data.map((item)=>{
          return(


<div className=' p-2 bg-gray-100 mt-2 shadow-sm  cursor-pointer h-[450px] w-[500px] flex flex-col  rounded-lg'>
    <div className='overflow-hidden flex justify-center'>
        <img className=' object-cover duration-150 transition-all hover:scale-110 overflow-hidden 
        h-[250px] w-[250px] rounded-lg
        ' src={item.img} alt="" />
    </div>
    <div className='flex flex-col gap-2 mt-20 ml-4 mr-4 '>
        <div className='font-bold '>    {item.name}</div>
       <div className='flex justify-between'>
       <div className=' font-bold text-gray-300'>{item.brand}</div>
        <div className='text-black font-bold'>  Price:  {item.price}</div>
        
       
       </div>
       <div className='flex justify-between mt-5 mb-2'>
        
            <button onClick={()=>AddtoCart(item)} className='bg-black border border-white text-white rounded p-1 hover:bg-white hover:text-black'>Add to Cart</button>
            {/* <button onClick={()=>Navigate('/payment')} className='p-1 bg-black text-white rounded hover:bg-white hover:text-black'>Buy Now</button> */}
            </div>
    </div>
</div>

          )
        })
      }
    
     </div>    
 <Footer1/>
    </div>
  )
}

export default DetailPage
