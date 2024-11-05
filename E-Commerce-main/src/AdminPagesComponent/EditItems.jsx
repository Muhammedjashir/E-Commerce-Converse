import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import AdNavbar from "../NavComponents/AdNavbar";
import AdSidebar from "../NavComponents/AdSidebar";

function EditItems() {
  const Location = useLocation();
  const product = Location.state?.val;
  // const idee = product.id
  const { id } = useParams();
  const Navigate = useNavigate();

  console.log(product);

  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    category: "",
    price: "",
    img: "",
  });

  // Fetch product data by ID when component loads
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // const response = await axios.get(`http://localhost:4000/datas/${id}`);
        // const product = response.data;
        setFormData({
          name: product.name,
          brand: product.brand,
          category: product.category,
          price: product.price,
          ids: product.id,
          img: product.img,
        });
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, [id]);

  // Handle form input changes
  const handleChange = (e)=> {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:4000/datas/${formData.ids}`, formData);
      Navigate("/manageproducts"); // Redirect to manage products page after successful update
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div>
      <div>
        <AdNavbar />
        <div className="flex justify-between">
          <div>
            <AdSidebar />
          </div>
          <div className="w-full flex justify-center mt-10">
            <form
              onSubmit={handleSubmit}
              className="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-lg w-full"
            >
              <h2 className="text-2xl font-bold mb-6">Edit Items</h2>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
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
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="brand"
                >
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
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="category"
                >
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
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="price"
                >
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
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="img"
                >
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
                  className="bg-black text-white hover:bg-white hover:text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Update Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditItems;
