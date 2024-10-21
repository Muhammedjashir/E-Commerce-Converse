import React, { useEffect, useState } from 'react';
import Navbar from '../MainComponent/Navbar';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import Footer1 from '../FooterComponent/Footer1';


const Payment = () => {
    const Navigate=useNavigate()
    const Location=useLocation()
    const sum=Location.state?.sum
    const cart=Location.state?.cart
    const [pCart,setPCart]=useState([])
    const ids=localStorage.getItem("id")
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    phone: '',
    deliveryMethod: 'standard',
    cardNumber: '',
    nameOnCard: '',
    expirationDate: '',
    cvc: '',
    orderItem:cart
  });

  const handleInputChange = (e) => {
console.log("e",e.target.name);
    const { name, value } = e.target;
    setFormData({ ...formData,[name]:value});
    console.log(formData);
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    console.log('Form Data Submitted: ', formData);

    //  form validation 
    const Response = await axios.get(`http://localhost:4000/users/${ids}`)
    console.log(Response.data);
    console.log(formData);
    const Order=Response.data.Orders
    const orderr=[...Order,formData]
    console.log(orderr);
    


    if(orderr){
       await axios.patch(`http://localhost:4000/users/${ids}`,{Orders:orderr})

        toast.success('Payment Successfull')
        
        Navigate("/orders")
    }else{
        toast.warning("Errorrrr!")
        
    }
    
  };
 
  
  const ProductData=async()=>{
    setPCart( Response.data.cart)

  }
  useEffect(()=>{
    ProductData()
  },[])
console.log(pCart);



  return (
    <div>
        <Navbar/>
    <form onSubmit={handleSubmit} className="container mx-auto p-8 bg-gray-100 mt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Form Section */}
        <div>
          {/* Contact  */}
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-4">Contact information</h2>
            <label>Email address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="border p-2 w-full mb-4"
            />
          </div>

          {/* Shipping */}
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-4">Shipping information</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="border p-2 w-full"
                />
              </div>
              <div>
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="border p-2 w-full"
                />
              </div>
            </div>

            <label>Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="border p-2 w-full mb-4"
            />

            <label>Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="border p-2 w-full mb-4"
            />
          </div>

          {/* Delivery */}
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-4">Delivery method</h2>
            <div className="flex gap-4">
              <div>
                <input
                  type="radio"
                  name="deliveryMethod"
                  value="standard"
                  checked={formData.deliveryMethod === 'standard'}
                  onChange={handleInputChange}
                />
                <label className="ml-2">Standard ($5)</label>
              </div>

              <div>
                <input
                  type="radio"
                  name="deliveryMethod"
                  value="express"
                  checked={formData.deliveryMethod === 'express'}
                  onChange={handleInputChange}
                />
                <label className="ml-2">Express ($16)</label>
              </div>
            </div>
          </div>

          {/* Payment */}
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-4">Payment</h2>
            <label>Card Number</label>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleInputChange}
              className="border p-2 w-full mb-4"
            />

            <label>Name on Card</label>
            <input
              type="text"
              name="nameOnCard"
              value={formData.nameOnCard}
              onChange={handleInputChange}
              className="border p-2 w-full mb-4"
            />

            <label>Expiration Date (MM/YY)</label>
            <input
              type="text"
              name="expirationDate"
              value={formData.expirationDate}
              onChange={handleInputChange}
              className="border p-2 w-full mb-4"
            />

            <label>CVC</label>
            <input
              type="text"
              name="cvc"
              value={formData.cvc}
              onChange={handleInputChange}
              className="border p-2 w-full mb-4"
            />
          </div>
        </div>

        {/* Order Summary */}
        <div className="border p-4 rounded shadow">
        <h2 className="text-lg font-bold mb-4">Order summary</h2>
        {cart?.map((item)=>{
                return(
                    <div>   
            
          
          <div className="flex justify-between mb-4">
            <div>
              <p>{item.name}</p>
              
            </div>
            <img src={item.img} alt="Basic Tee Black" width="50" />
          </div>


          <div className="flex justify-between">
            <p>Price:</p>
            <p>{item.price*item.qty}</p>
          </div>

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
                )
            })}
            <div className="flex justify-between font-bold">
            <p>Total</p>
            <p>
              $
              {/* {formData.deliveryMethod === 'standard'
                ? (64 + 5 + 5.52).toFixed(2)
                : (64 + 16 + 5.52).toFixed(2)} */}
                {sum}
            </p>
          </div>
         </div>
      </div>

      <div className="text-right mt-8">
        <button 
        // onClick={()=>Navigat('/orders')}
         type="submit" className="bg-black text-white hover:bg-white hover:text-black px-6 py-2 rounded">
          Place Order
        </button>
      </div>
    </form>
  
<Footer1/>
    </div>
  );
};

export default Payment;