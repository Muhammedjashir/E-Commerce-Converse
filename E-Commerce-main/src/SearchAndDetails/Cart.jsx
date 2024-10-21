import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../MainComponent/Navbar";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Footer1 from "../FooterComponent/Footer1";

function Cart() {
  const Navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const id = localStorage.getItem("id");

  const ProductData = async () => {
    const Respons = await axios.get(`http://localhost:4000/users/${id}`);
    const CartPage = Respons.data.cart;
    setCart(CartPage);
  };

  useEffect(() => {
    ProductData();
  }, []);

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

  const sum = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div>
      <Navbar />

      <div className="flex flex-col lg:flex-row justify-between px-4 lg:px-8 py-8 space-y-8 lg:space-y-0 lg:space-x-8">
        {/* Cart Items */}
        <div className="w-full lg:w-2/3 flex flex-col space-y-6">
          {cart.length === 0 ? (
            <p className="text-center text-lg text-gray-600">Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="p-4 bg-white shadow-md rounded-lg flex flex-col md:flex-row justify-between items-center"
              >
                <div className="md:w-1/3 flex justify-center md:justify-start">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-[250px] w-[250px] object-cover rounded-lg transition-all duration-150 hover:scale-110"
                  />
                </div>

                <div className="mt-4 md:mt-0 md:w-2/3 flex flex-col justify-between items-center md:items-start">
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-gray-500">{item.brand}</p>
                  <div className="flex justify-between w-full mt-4">
                    <p className="text-lg font-bold">Price: ${item.price}</p>
                    <p className="text-lg font-bold">Quantity: {item.qty}</p>
                  </div>

                  <div className="flex items-center space-x-2 mt-4">
                    <button
                      onClick={() => increment(item.id)}
                      className="bg-black text-white hover:bg-green-600 px-3 py-1 rounded"
                    >
                      +
                    </button>
                    <span className="px-3">{item.qty}</span>
                    <button
                      onClick={() => decrement(item.id)}
                      className="bg-black text-white hover:bg-red-600 px-3 py-1 rounded"
                    >
                      -
                    </button>
                    <button
                      onClick={() => RemoveItem(item.id)}
                      className="bg-red-600 text-white hover:bg-red-700 px-3 py-1 rounded"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-1/3 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>

          {cart.map((item) => (
            <div key={item.id} className="flex justify-between mb-4">
              <div>
                <p>{item.name}</p>
              </div>
              <img src={item.img} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
            </div>
          ))}

          <div className="flex justify-between font-semibold text-lg mb-4">
            <p>Total:</p>
            <p>${sum?.toFixed(2)}</p>
          </div>
          <button
            onClick={() => Navigate("/payment", { state: { sum, cart } })}
            className="w-full bg-black text-white hover:bg-gray-800 py-2 rounded-lg transition-colors duration-200"
            >
            Proceed to Pay
          </button>
        </div>
      </div>

      <Footer1 />
    </div>
  );
}

export default Cart;
