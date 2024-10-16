import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../MainComponent/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShippingFast, faUndoAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { toast } from 'react-toastify';

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
    }
console.log(ids);
  return (
    
    <div>
<Navbar/>

<div className='  h-[100%] grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1  place-items-center   '>
      {
        data.map((item)=>{
          return(


<div className=' p-2 bg-gray-100 mt-2 shadow-sm  cursor-pointer h-[350px] w-[300px] flex flex-col  rounded-lg'>
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
        
        
            <button onClick={()=>AddtoCart(item)} className='bg-black border border-white text-white rounded p-1 hover:bg-white hover:text-black'>Add to Cart</button>
        

       </div>
    </div>
</div>



          )
        })
      }
    

     </div>    
     <footer className="bg-gray-100 p-10 mb-5 mt-5">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      
        
       

       
      </div>

      {/* Bottom Section */}
      <div className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Email Sign-Up */}
          <div>
            <h3 className="font-bold text-lg mb-4">Never Miss a Beat</h3>
            <p>Be the first to hear about product launches, collaborations, and more when you followed our social medias.</p>
            
          </div>

          {/* Social Media Icons */}
          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start gap-4">
              <a href="https://m.facebook.com/search_results/?q=converse"><FontAwesomeIcon icon={faFacebook} className="text-2xl text-gray-500" /></a>
              <a href="https://www.instagram.com/converse.india/"><FontAwesomeIcon icon={faInstagram} className="text-2xl text-gray-500" /></a>
              {/* <a href="/"><FontAwesomeIcon icon={faTwitter} className="text-2xl text-gray-500" /></a> */}
              <a href="https://www.youtube.com/@converse"><FontAwesomeIcon icon={faYoutube} className="text-2xl text-gray-500" /></a>
            </div>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Get Help</h3>
            <ul>
              <li><a href="/" className="hover:underline">FAQs</a></li>
              <li><a href="/" className="hover:underline">Shipping & Delivery</a></li>
              <li><a href="/" className="hover:underline">Returns & Refunds</a></li>
              <li><a href="/" className="hover:underline">Payments</a></li>
              <li><a href="/" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="mt-10 text-center">
        <h3 className="font-bold text-lg mb-4">Accepted Payment Methods</h3>
        <div className="flex justify-center gap-4">
          <img src="https://image.similarpng.com/very-thumbnail/2020/06/Logo-VISA-transparent-PNG.png" alt="Visa" className="w-10" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Rupay-Logo.png" alt="RuPay" className="w-12 ml-0" />
          <img src="https://e7.pngegg.com/pngimages/530/165/png-clipart-logo-mastercard-pentagram-flat-design-brand-mastercard-text-trademark.png" alt="MasterCard" className="w-12 " />
          <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/upi_logo_icon_169316.png" alt="UPI" className="w-12" />
        </div>
      </div>
    </footer>


    </div>
  )
}

export default DetailPage
