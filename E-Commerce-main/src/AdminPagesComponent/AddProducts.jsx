import React, { useState } from "react";
import axios from "axios";
import AdNavbar from "../NavComponents/AdNavbar";
import AdSidebar from "../NavComponents/AdSidebar";
import { toast } from "react-toastify";

function AddProducts() {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    category: "",
    quantity: 1,
    price: 0, 
    img: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    const Response = await axios.get("http://localhost:4000/datas");
    const dataas = Response.data.find((item) => item.name === formData.name);
    
    if (dataas) {
      toast.warning('The product name already exists');
    } else {
      const newProduct = { ...formData };
      await axios.post("http://localhost:4000/datas", newProduct);
      toast.success("Product added successfully");
     
      setFormData({
        name: "",
        brand: "",
        category: "",
        quantity: 1,
        price: 0,
        img: "",
      });
    }
  };

  return (
    <div>
      <AdNavbar />
      <div className="flex justify-between">
        <AdSidebar />
        <div className="w-full flex justify-center mt-10">
          <form
            onSubmit={handleSubmit}
            className="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-lg w-full"
          >
            <h2 className="text-2xl font-bold mb-6">Add Product</h2>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Product Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="brand">
                Brand
              </label>
              <input
                type="text"
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                Category
              </label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quantity">
                Quantity
              </label>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                Price
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="img">
                Image URL
              </label>
              <input
                type="text"
                name="img"
                value={formData.img}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="flex items-center justify-between">
              <button 
                type="submit"
                className="bg-black text-white hover:bg-white hover:text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-10"
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddProducts;
