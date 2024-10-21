import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faBox, faClipboardList, faChartLine, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const AdNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 ">
      <div className="flex items-center justify-between ">
        {/* Admin Logo */}
        <div className="text-white text-2xl font-bold mt-5 ml-5 ">
          Converse Admin
        </div>
        <div className='p-2 mr-auto'>
            <img  className ='h-20 ' src="https://static.thenounproject.com/png/560147-200.png" alt="Shoes image " />
            </div>

        {/* Hamburger Menu for mobile */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
          </button>
        </div>

        {/* Admin Navigation Links */}
        <div className={`lg:flex items-center space-x-6 ${isOpen ? 'block' : 'hidden'} lg:block`}>
          <Link to="/admin/dashboard" className="text-white hover:bg-gray-700 p-2 rounded-lg">
            <FontAwesomeIcon icon={faChartLine} className="mr-2" /> Dashboard
          </Link>
          <Link to="/admin/users" className="text-white hover:bg-gray-700 p-2 rounded-lg">
            <FontAwesomeIcon icon={faUsers} className="mr-2" /> Manage Users
          </Link>
          <Link to="/admin/products" className="text-white hover:bg-gray-700 p-2 rounded-lg">
            <FontAwesomeIcon icon={faBox} className="mr-2" /> Manage Products
          </Link>
          <Link to="/admin/orders" className="text-white hover:bg-gray-700 p-2 rounded-lg">
            <FontAwesomeIcon icon={faClipboardList} className="mr-2" /> Manage Orders
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default AdNavbar;
