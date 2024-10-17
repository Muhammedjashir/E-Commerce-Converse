import React, { useEffect, useState } from "react";
import Navbar from "../MainComponent/Navbar";
import axios from "axios";

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
    </div>
  );
}

export default Orders;
