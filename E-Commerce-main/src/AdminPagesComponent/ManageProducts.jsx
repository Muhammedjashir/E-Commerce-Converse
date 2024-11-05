import React, { useEffect, useState } from "react";
import AdNavbar from "../NavComponents/AdNavbar";
import AdSidebar from "../NavComponents/AdSidebar";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function ManageProducts() {
  const Location = useLocation();
  const Navigate = useNavigate();
  const [product, setProduct] = useState([]);
  const ProductData = async () => {
    const Response = await axios.get("http://localhost:4000/datas");
    const Datas = Response.data;
    setProduct(Datas);
  };
  useEffect(() => {
    ProductData();
  }, []);

  const RemoveItem = async (ide) => {
    await axios.delete(`http://localhost:4000/datas/${ide}`);
    toast.success("Product Deleted");
    ProductData();
  };
  const HandleEdit = async (val) => {
    await axios.get(`http://localhost:4000/datas/${val.id}`);
    Navigate("/edititem", { state: { val } });
  };

  return (
    <div>
      <div>
        <AdNavbar />

        <div className="flex justify-between">
          <div>
            <AdSidebar />
          </div>

          <div className="flex flex-wrap justify-center w-[100%] h-[100vh] overflow-auto ">
            <div className="w-full   text-3xl font-bold p-4">
              <h1>Manage Products</h1>
            </div>
            {product?.map((item) => {
              return (
                <div className=" bg-white mt-2 shadow-sm  cursor-pointer h-[350px] w-[300px] flex flex-col  rounded-lg">
                  <div className="overflow-hidden flex justify-center">
                    <img
                      className=" object-cover duration-150 transition-all hover:scale-110 overflow-hidden 
                        h-[250px] w-[250px] rounded-lg.0
                        "
                      src={item.img}
                    />
                  </div>
                  <div className="flex flex-col gap-2 mt-2 ml-4 mr-4">
                    <div className="font-bold "> {item.name}</div>
                    <div className="flex justify-between">
                      <div className=" font-bold text-gray-300">
                        {item.brand}
                      </div>
                      <div className="text-black font-bold">
                        {" "}
                        Price: {item.price}
                      </div>
                    </div>
                  </div>
                  {/* buttons */}
                  <div className="flex space-x-4 m-auto  w-full justify-center">
                    <button
                      onClick={() => RemoveItem(item.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-all"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => HandleEdit(item)}
                      className="bg-black text-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition-all"
                    >
                      Edit Item
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
}

export default ManageProducts;
