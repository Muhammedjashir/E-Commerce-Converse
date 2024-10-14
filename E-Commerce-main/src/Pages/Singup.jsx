import React, { useState } from 'react';
import './Singup.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    cpassword: '',
  });

  const [focus, setFocus] = useState({
    errName: false,
    errEmail: false,
    errPass: false,
    errCpass: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (formData.password !== formData.cpassword) {
      alert('Passwords do not match');
      return;
    }

    
    axios
      .post('http://localhost:4000/users', formData) 
      .then((response) => {
        console.log('Signup Success:', response.data);
        toast.success('Signup successful! Please Singin.');
        navigate('/singin'); 
      })
      .catch((error) =>{
        console.error('Signup Error:', error);
        toast.error('Signup failed. Please try again.');
      });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">SIGN UP</h2>

        <div className="mb-4">
          <label className="block text-gray-700">Username</label>
          <input
            type="text"
            pattern="^[A-Zz-z0-9].{2,16}"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            onBlur={() => setFocus({ ...focus, errName: true })}
            focus={focus.errName.toString()}
            required
          />
          <span className="errName">Username should have 3-16 characters</span>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            onBlur={() => setFocus({ ...focus, errEmail: true })}
            focus={focus.errEmail.toString()}
            required
          />
          <span id="errEmail">Enter a valid Email ID</span>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            pattern="(?=^.{8,16}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            onBlur={() => setFocus({ ...focus, errPass: true })}
            focus={focus.errPass.toString()}
            required
          />
          <span id="errPass">Password must have minimum 8 characters and include 1 uppercase, 1 digit, and 1 special character</span>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Confirm Password</label>
          <input
            type="password"
            name="cpassword"
            pattern={formData.password}
            value={formData.cpassword}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            onBlur={() => setFocus({ ...focus, errCpass: true })}
            focus={focus.errCpass.toString()}
            required
          />
          <span id="errCpass">Password not matching</span>
        </div>

        <button
          type="submit"
          className="w-full bg-gray-950 text-white p-2 rounded hover:bg-white hover:text-black transition duration-300 font-bold"
        >
          CREATE AN ACCOUNT
        </button>
      </form>
    </div>
  );
}

export default Signup;