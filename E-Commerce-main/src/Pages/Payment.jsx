import React, { useState } from 'react';
import Navbar from '../MainComponent/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShippingFast, faUndoAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Payment = () => {
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
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted: ', formData);
    //  form validation 
  };

  return (
    <div>
        <Navbar/>
    <form onSubmit={handleSubmit} className="container mx-auto p-8 bg-gray-100">
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
          <div className="flex justify-between mb-4">
            <div>
              <p>Basic Tee (Black, Large)</p>
              <p>$32.00</p>
            </div>
            <img src="path-to-black-tee-image" alt="Basic Tee Black" width="50" />
          </div>

          <div className="flex justify-between mb-4">
            <div>
              <p>Basic Tee (Sienna, Large)</p>
              <p>$32.00</p>
            </div>
            <img src="path-to-sienna-tee-image" alt="Basic Tee Sienna" width="50" />
          </div>

          <div className="flex justify-between">
            <p>Subtotal</p>
            <p>$64.00</p>
          </div>

          <div className="flex justify-between">
            <p>Shipping</p>
            <p>{formData.deliveryMethod === 'standard' ? '$5.00' : '$16.00'}</p>
          </div>

          <div className="flex justify-between">
            <p>Taxes</p>
            <p>$5.52</p>
          </div>

          <hr className="my-4" />

          <div className="flex justify-between font-bold">
            <p>Total</p>
            <p>
              $
              {formData.deliveryMethod === 'standard'
                ? (64 + 5 + 5.52).toFixed(2)
                : (64 + 16 + 5.52).toFixed(2)}
            </p>
          </div>
        </div>
      </div>

      <div className="text-right mt-8">
        <button type="submit" className="bg-black text-white hover:bg-white hover:text-black px-6 py-2 rounded">
          Confirm Order
        </button>
      </div>
    </form>
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
  );
};

export default Payment;