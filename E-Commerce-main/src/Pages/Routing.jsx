import React from 'react';
import { Navigate } from 'react-router-dom';

function Routing({ children }) {
  const token = localStorage.getItem('token');
  return token ? children : <navigate to="/signin" />;
  
}

export default Routing;