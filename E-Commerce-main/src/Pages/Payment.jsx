import React, { useState } from 'react';

const Payment = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
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
    // You can also handle form validation here
  };

  return (
    <form onSubmit={handleSubmit} className="container mx-auto p-8">
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

            <label>City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="border p-2 w-full mb-4"
            />

            <label>State/Province</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              className="border p-2 w-full mb-4"
            />

            <label>Postal Code</label>
            <input
              type="text"
              name="zip"
              value={formData.zip}
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
        <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded">
          Confirm Order
        </button>
      </div>
    </form>
  );
};

export default Payment;