import React, { useEffect, useState } from "react";
import AdNavbar from "../NavComponents/AdNavbar";
import AdSidebar from "../NavComponents/AdSidebar";
import axios from "axios";

function Dashboard() {
  const [user, setUser] = useState([]);
  const [product, setProduct] = useState([]);
  const UserCount = user.length;
  const ProductCount = product.length;

  const UserData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/users");
      const data = response.data;

      let orderCount = 0;
      data.forEach((user) => {
        user?.Orders?.forEach(() => {
          orderCount++;
        });
      });

      setUser(data);
    } catch (error) {
      console.log("Error fetching users:", error);
    }
  };

  const ProductData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/datas");
      setProduct(response.data);
    } catch (error) {
      console.log("Error fetching products:", error);
    }
  };

  useEffect(() => {
    UserData();
    ProductData();
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-100">
      {/* Navbar */}
      <AdNavbar />

      <div className="flex">
        {/* Sidebar */}
        <div>
          <AdSidebar />
        </div>

        {/* Main Dashboard */}
        <div className="flex flex-col justify-center w-full h-full p-4 overflow-auto">
          <div className="bg-white shadow-lg rounded-lg p-6  w-full">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Dashboard Overview
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Total Users Card */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="font-bold text-lg">Total Users</h3>
                <p className="text-4xl font-bold mt-2">{UserCount}</p>
                <p className="text-sm mt-1">Recent: mck696</p>
              </div>

              {/* Total Products Card */}
              <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-6 rounded-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="font-bold text-lg">Total Products</h3>
                <p className="text-4xl font-bold mt-2">{ProductCount}</p>
                <p className="text-sm mt-1">Recent: buby T-shirt</p>
              </div>

              {/* Total Orders Card */}
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="font-bold text-lg">Total Orders</h3>
                <p className="text-4xl font-bold mt-2">
                  {/* Assuming you're fetching the total order count correctly */}
                  {user.reduce((acc, curr) => acc + (curr?.Orders?.length || 0), 0)}
                </p>
                <p className="text-sm mt-1">Last order: buby T-shirt</p>
              </div>
            </div>

            {/* Quick Links (Optional) */}
            {/* <div className="mt-8">
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Quick Links
              </h3>
              <div className="flex space-x-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200">
                  All Users
                </button>
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-200">
                  Add Product
                </button>
                <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-200">
                  View Orders
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
