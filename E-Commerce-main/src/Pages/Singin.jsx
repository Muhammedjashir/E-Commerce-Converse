import React, { useState } from 'react';
import axios from 'axios'; 
import './Singin.css';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

function Singin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email:'',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit  = async (e) => {
    e.preventDefault();
    console.log('Logging in:', formData);

      
        try {
          const response = await axios.get('http://localhost:4000/users')
          const find_user = response.data.find((item)=>item.email==formData.email&&item.password==formData.password)
          if(!find_user){
            toast.error("User not found")
          }else{
            toast.success("singin succesfully")
            navigate('/')
          }
      
        } catch (error) {
          
        }
     
     
  };

  return (
    
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">SIGN IN</h2>

        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            required
          />
          <span>Enter a valid Email ID</span>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            required
          />
          <span>Enter a valid Password</span>
        </div>

        <button
          type="submit"
          className="w-full bg-gray-950 text-white p-2 rounded hover:bg-white hover:text-black font-bold transition duration-300"
        >
          SIGN IN
        </button>
      </form>
    </div>
  );
}

export default Singin;