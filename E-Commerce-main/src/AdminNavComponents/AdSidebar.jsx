import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faBox, faClipboardList, faChartLine, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const AdSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className={`bg-gray-800 h-screen p-5 ${isCollapsed ? 'w-20' : 'w-64'} duration-300`}>
        {/* Toggle Button */}
        <div className="text-white text-2xl mb-6 cursor-pointer" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={isCollapsed ? faBars : faTimes} />
        </div>

        {/* Sidebar Links */}
        <ul className="space-y-4">
          <li>
            <Link
              to="/admin/dashboard"
              className="flex items-center text-white hover:bg-gray-700 p-2 rounded-lg transition-all duration-200"
            >
              <FontAwesomeIcon icon={faChartLine} className="mr-3" />
              {!isCollapsed && 
              <h1> Dashboard </h1> }
              
            </Link>
            
          </li>
          <li>
            <Link
              to="/admin/users"
              className="flex items-center text-white hover:bg-gray-700 p-2 rounded-lg transition-all duration-200"
            >
              <FontAwesomeIcon icon={faUsers} className="mr-3" />
              {!isCollapsed && 
               <h1> Manage Users</h1> }
            </Link>
          </li>
          <li>
            <Link
              to="/admin/products"
              className="flex items-center text-white hover:bg-gray-700 p-2 rounded-lg transition-all duration-200"
            >
              <FontAwesomeIcon icon={faBox} className="mr-3" />
              {!isCollapsed && 
              <h1> Manage Products</h1> }
            </Link>
          </li>
          <li>
            <Link
              to="/admin/orders"
              className="flex items-center text-white hover:bg-gray-700 p-2 rounded-lg transition-all duration-200"
            >
              <FontAwesomeIcon icon={faClipboardList} className="mr-3" />
              {!isCollapsed && 
              <h1> Manage Orders</h1>  }
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 bg-gray-100 p-10">
        {/* <h1 className="text-3xl font-bold">Admin Panel Content</h1> */}
        {/* Here goes the main content of the admin dashboard */}
      </div>
    </div>
  );
};

export default AdSidebar;
