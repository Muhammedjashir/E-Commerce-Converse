import React, { useEffect, useState } from "react";
import Navbar from "../MainComponent/Navbar";
import axios from "axios";
import Footer1 from "../FooterComponent/Footer1";

function Orders() {
  const ids = localStorage.getItem("id");
  const [data, setData] = useState([]);

  const HandleOrder = async () => {
    const Response = await axios.get(`http://localhost:4500/users/${ids}`);
    setData(Response.data.Orders);
  };

  useEffect(() => {
    HandleOrder();
  }, []);

  return (
    <div>
      <Navbar />

      <div className="container mx-auto p-4 bg-gray-100 mt-8 shadow-lg rounded-lg">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Order Summary
          </h2>

          {data.length === 0 ? (
            <p className="text-center text-gray-500">No orders found.</p>
          ) : (
            <div className="space-y-8">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-8 bg-gray-50 p-4 rounded-lg shadow-sm"
                >
                  {/* Customer Details */}
                  <div className="space-y-2 text-gray-700">
                    <h1 className="text-lg font-medium">Email: {item.email}</h1>
                    <h1 className="text-lg font-medium">
                      Name: {item.firstName} {item.lastName}
                    </h1>
                    <h1 className="text-lg font-medium">
                      Address: {item.address}
                    </h1>
                    <h1 className="text-lg font-medium">Phone: {item.phone}</h1>
                    <h1 className="text-lg font-medium">
                      Card Name: {item.nameOnCard}
                    </h1>
                    <h1 className="text-lg font-medium">
                      Card Number: •••• •••• •••• {item.cardNumber.slice(-4)}
                    </h1>
                  </div>

                  {/* Product Images */}
                  <div className="flex flex-wrap justify-center items-center gap-4">
                    {item.orderItem.map((value, idx) => (
                      <div
                        key={idx}
                        className="flex flex-col items-center justify-center"
                      >
                        <img
                          className="h-[200px] w-[200px] object-cover rounded-lg shadow-md"
                          src={value.img}
                          alt="Product"
                        />
                        <p className="mt-2 text-gray-600">
                          {value.productName}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <hr className="my-6" />

              <div className="text-right text-lg font-semibold">
                {/*  total calculation */}
                <p></p>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer1 />
    </div>
  );
}

export default Orders;
