import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShippingFast, faUndoAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Home() {
  const [data,setData]=useState([])
  const ProductData =async () =>{
    const response = await axios.get("http://localhost:4000/datas")
    const PopularItems = response.data.filter((item)=>item.type==="popular")
  setData(PopularItems)
  
  }
  
useEffect(()=>{
  ProductData()
  
},[])
console.log(data);
  
  return (
    <div >
      
      <div  className='cursor-pointer'>
      
      <img   src="https://www.converse.in/media/wysiwyg/Website_Banner_6.png?auto=webp&format=png&quality=85" alt="" />
     <h1 className='px-4 text-3xl font-bold '>Inspired By The Summer Games</h1>
     <div className='flex justify-between'>
        <img className='object-contain h-50 w-90' src="https://www.converse.in/media/wysiwyg/27septhomepage-06.png?auto=webp&format=png&quality=85" alt="" />
     
     <div>
      <div>
        <img className='bg-no-repeat h-[57.9vh] object-cover ' src="https://www.converse.in/media/wysiwyg/27septhomepage-04.png?auto=webp&format=png&quality=85" alt="" />
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
     
     </div >



<h1 className='w-full   text-3xl font-bold p-4'>From Our Community </h1>

         <div className='flex justify-between' >

        
           <div>
           <img   src="https://www.converse.in/media/wysiwyg/july_15_homepage_1_.png?auto=webp&format=png&quality=85" alt="" />
           
           <img className='cursor-pointer' src="https://www.converse.in/media/wysiwyg/oct11-12.png?auto=webp&format=png&quality=85" alt="" />  
          
           </div>
          <img className='object-contain h-50 w-90' src="https://www.converse.in/media/wysiwyg/july_15_homepage_1.png?auto=webp&format=png&quality=85" alt="" />
         
          </div>

         <div className='flex justify-between mt-7'>

          <img  className='h-[60vh] w-25'  src="https://www.logo.wine/a/logo/Converse_(shoe_company)/Converse_(shoe_company)-Converse2-White-Dark-Background-Logo.wine.svg" alt="" />
         
         <img  className='flex justify-between h-[60vh] w-25' src="https://www.logo.wine/a/logo/Converse_(shoe_company)/Converse_(shoe_company)-Logo.wine.svg" alt="" />
         </div>


         <div>
  
          



         </div>

         <footer className="bg-gray-100 p-10">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* Fast, Free Shipping */}
        <div>
          <FontAwesomeIcon icon={faShippingFast} className="text-4xl mb-4" />
          <h3 className="font-bold text-lg">Fast, Free Shipping</h3>
          <p>Sign up for a Converse account and get free shipping on every order.</p>
          <a href="/" className="text-blue-600 hover:underline">Learn More</a>
        </div>
        
        {/* Worry-Free Returns */}
        <div>
          <FontAwesomeIcon icon={faUndoAlt} className="text-4xl mb-4" />
          <h3 className="font-bold text-lg">Worry-Free Returns</h3>
          <p>Not happy? Return your purchase for free within 7 days.</p>
          <a href="/" className="text-blue-600 hover:underline">Learn More</a>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="font-bold text-lg mb-4">Follow Us</h3>
          <div className="flex justify-center gap-4">
            <a href="https://m.facebook.com/search_results/?q=converse"><FontAwesomeIcon icon={faFacebook} className="text-3xl text-gray-500" /></a>
            <a href="https://www.instagram.com/converse.india/"><FontAwesomeIcon icon={faInstagram} className="text-3xl text-gray-500" /></a>
            {/* <a href="/"><FontAwesomeIcon icon={faTwitter} className="text-3xl text-gray-500" /></a> */}
          </div>
          <p className="mt-4">Keep up with the latest Converse news on our social channels.</p>
        </div>
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

export default Home
