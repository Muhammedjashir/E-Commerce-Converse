import React, { useEffect, useState } from "react";
import Navbar from "../MainComponent/Navbar";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShippingFast, faUndoAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Orders() {
  const ids = localStorage.getItem("id");
  const [data, setData] = useState([]);

  const HandleOrder = async () => {
    const Response = await axios.get(`http://localhost:4000/users/${ids}`);
    setData(Response.data.Orders);
  };
  useEffect(() => {
    HandleOrder();
  }, []);
  console.log(data, "ghewjauydG");

  return (
    <div>
      <Navbar />

      {/* <h1 className='flex justify-center text-5xl mt-2'>Your Orders</h1> */}

      <div className=" p-2 bg-gray-100 mt-2 shadow-sm  cursor-pointer h-[100%] w-[100%] flex flex-col rounded-lg">
        <div className="border p-4 rounded shadow">
          <h2 className=" font-bold mb-4 text-4xl mt-2">Order summary</h2>

          <div className="">
            {data.map((item) => {
              return (
                <div className="flex justify-between">
                    <div>
                  <h1>Email: {item.email}</h1>
                  <h1>Name:  {item.firstName} {item.lastName} </h1>
                  <h1>Address: {item.address} </h1>
                  <h1>Number:  {item.phone} </h1>
                  <h1>Card Name:  {item.nameOnCard} </h1>
                  <h1>Card Number:  {item.cardNumber} </h1>
                  </div>
                  <div>
                  {item.orderItem.map((value) => {
                    return (
                        <div className="h-[100%] w-[100%]">
                      <div className=" object-cover h-[350px] w-[500px]">
                        <img src={value.img} alt="" />
                      </div>
                      </div>
                    );
                  })}

                  </div>

                  
                </div>
              );
            })}
            {/* <div className="flex justify-between mb-4">
              <div>
                <p></p>
              </div> */}
              {/* <img src={} alt="Basic Tee Black" width="50" /> */}
            {/* </div> */}
{/* 
            <div className="flex justify-between">
              <p>Price:</p>
              <p></p>
            </div> */}

            {/* <div className="flex justify-between">
            <p>Shipping</p>
            <p>{formData.deliveryMethod === 'standard' ? '$5.00' : '$16.00'}</p>
          </div>

          <div className="flex justify-between">
            <p>Taxes</p>
            <p>$5.52</p>
          </div> */}

            <hr className="my-4" />
          </div>

          <div className="flex justify-between font-bold">
            <p>Total</p>
            <p>
              $
              {/* {formData.deliveryMethod === 'standard'
                ? (64 + 5 + 5.52).toFixed(2)
                : (64 + 16 + 5.52).toFixed(2)} */}
            </p>
          </div>
        </div>
      </div>

      <footer className="bg-gray-100 p-10 mb-5">
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
  );
}

export default Orders;
