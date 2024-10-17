import axios from "axios";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShippingFast, faUndoAlt } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Navbar from "../MainComponent/Navbar";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Cart() {
  const Navigate = useNavigate();
  // const [count,setCount]=useState(0)
  const [formData, setFormData] = useState({});
  const [cart, setCart] = useState([]);
  const id = localStorage.getItem("id");
  console.log(id);
  const ProductData = async () => {
    const Respons = await axios.get(`http://localhost:4000/users/${id}`);
    const CartPage = Respons.data.cart;
    setCart(CartPage);
  };
  useEffect(() => {
    ProductData();
  }, []);
  console.log(cart);

  const RemoveItem = async (ids) => {
    const dlt = cart.filter((item) => item.id !== ids);
    await axios.patch(`http://localhost:4000/users/${id}`, { cart: dlt });
    toast.success("Item Removed");
    ProductData();
  };
  const increment = async (ide) => {
    const incrCart = cart.map((item) =>
      item.id === ide ? { ...item, qty: item.qty + 1 } : item
    );
    await axios.patch(`http://localhost:4000/users/${id}`, { cart: incrCart });
    ProductData();
  };

  const decrement = async (ide) => {
    const decreCart = cart.map((item) =>
      item.id === ide ? { ...item, qty: item.qty - 1 } : item
    );
    await axios.patch(`http://localhost:4000/users/${id}`, { cart: decreCart });
    ProductData();
  };
  const sum=cart.reduce((acc,item)=>acc+item.price*item.qty,0)

  return (
    <div>
      <Navbar />

      <div className="flex justify-around">
        <div className=" flex justify-center flex-wrap   md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1  place-items-center w-[50%]  ">
          {cart.map((item) => {
            return (
              <div className="p-2 m-5  bg-gray-100 mt-5 shadow-sm  cursor-pointer h-[450px] w-[500px] flex flex-col  rounded-lg">
                <div className="overflow-hidden flex justify-center">
                  <img
                    // onClick={() => Navigate(`/detail/${item.id}`)}
                    className=" object-cover duration-150 transition-all hover:scale-110 overflow-hidden 
              h-[250px] w-[250px] rounded-lg
              "
                    src={item.img}
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-2 mt-2 ml-4 mr-4">
                  <div className="font-bold "> {item.name}</div>
                  <div className="flex justify-between">
                    <div className=" font-bold text-gray-300">{item.brand}</div>
                    <div className="text-black font-bold"> Price: {item.price}</div>
                  </div>
                  <div className="flex justify-between mt-20 mb-5 ">

                    
                    <button
                      onClick={() => RemoveItem(item.id)}
                      className="p-1 bg-black text-white rounded hover:bg-red-900"
                    >
                      Remove
                    </button>
                    
                    <div className="flex   ">

                    <h3 className="p-1">Qny:</h3>
                    <button
                      onClick={() => increment(item.id)}
                      className="bg-black text-white hover:bg-green-700  rounded pl-2 pr-2 "
                    >
                      +
                    </button>
                    

                    <h1 className="text-black  ml-2 mr-2">{item?.qty}</h1>

                    <button
                      onClick={() => decrement(item.id)}
                      className="bg-black text-white hover:bg-red-900  rounded pl-2 pr-2 "
                    >
                      -
                    </button>
                  </div>
                  </div>

                  
                </div>

                <div></div>
              </div>
            );
          })}
        </div>

        {/* order summery */}
        <div className="mt-4 flex justify-center w-[50%]">
        <div className="border p-4 rounded shadow w-[50vw]">
        <h2 className="text-lg font-bold mb-4">Order summary</h2>

         {cart.map((item)=>{
            return(
<div>
            <div className="flex justify-between mb-4">
              <div>
                <p>{item.name}</p>
                {/* <p> {item.price} </p> */}
              </div>
              <img
                src={item.img}
                alt="Shoe"
                width="50"
              />
            </div>


            <div className="flex justify-between">
              <p>Price:</p>
              <p> {item.price*item.qty} </p>
            </div>

            {/* <div className="flex justify-between">
              <p>Shipping</p>
              <p>
                {formData.deliveryMethod === "standard" ? "$5.00" : "$16.00"}
              </p>
            </div>

            <div className="flex justify-between">
              <p>Taxes</p>
              <p>$5.52</p>
            </div> */}

            <hr className="my-4" />
           

            </div>
        
            )
         })}
        
        <div className="flex justify-between font-bold">
         <p>Total</p>
              <p>
                $
                {/* {formData.deliveryMethod === "standard"
                  ? (64 + 5 + 5.52).toFixed(2)
                  : (64 + 16 + 5.52).toFixed(2)} */}
                  {sum}
              </p>
              </div>
         
      <button onClick={()=>Navigate('/payment',{state:{sum,cart}})} className="bg-black text-white hover:bg-white hover:text-black rounded p-1 mt-5 ">Proceed to Pay</button>

         </div>
         
         
        </div>

      </div>
      

      <footer className="bg-gray-100 p-10 mb-5 mt-5">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"></div>

        {/* Bottom Section */}
        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            {/* Email Sign-Up */}
            <div>
              <h3 className="font-bold text-lg mb-4">Never Miss a Beat</h3>
              <p>
                Be the first to hear about product launches, collaborations, and
                more when you followed our social medias.
              </p>
            </div>

            {/* Social Media Icons */}
            <div>
              <h3 className="font-bold text-lg mb-4">Follow Us</h3>
              <div className="flex justify-center md:justify-start gap-4">
                <a href="https://m.facebook.com/search_results/?q=converse">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="text-2xl text-gray-500"
                  />
                </a>
                <a href="https://www.instagram.com/converse.india/">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="text-2xl text-gray-500"
                  />
                </a>
                {/* <a href="/"><FontAwesomeIcon icon={faTwitter} className="text-2xl text-gray-500" /></a> */}
                <a href="https://www.youtube.com/@converse">
                  <FontAwesomeIcon
                    icon={faYoutube}
                    className="text-2xl text-gray-500"
                  />
                </a>
              </div>
            </div>

            {/* Help Links */}
            <div>
              <h3 className="font-bold text-lg mb-4">Get Help</h3>
              <ul>
                <li>
                  <a href="/" className="hover:underline">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:underline">
                    Shipping & Delivery
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:underline">
                    Returns & Refunds
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:underline">
                    Payments
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:underline">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-10 text-center">
          <h3 className="font-bold text-lg mb-4">Accepted Payment Methods</h3>
          <div className="flex justify-center gap-4">
            <img
              src="https://image.similarpng.com/very-thumbnail/2020/06/Logo-VISA-transparent-PNG.png"
              alt="Visa"
              className="w-10"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Rupay-Logo.png"
              alt="RuPay"
              className="w-12 ml-0"
            />
            <img
              src="https://e7.pngegg.com/pngimages/530/165/png-clipart-logo-mastercard-pentagram-flat-design-brand-mastercard-text-trademark.png"
              alt="MasterCard"
              className="w-12 "
            />
            <img
              src="https://cdn.icon-icons.com/icons2/2699/PNG/512/upi_logo_icon_169316.png"
              alt="UPI"
              className="w-12"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Cart;
