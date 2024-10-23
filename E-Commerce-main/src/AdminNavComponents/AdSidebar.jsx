import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faBox, faClipboardList, faChartLine, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { button } from '@material-tailwind/react';

const AdSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };
 const Navigate = useNavigate()

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
            <div
              to="/admin/dashboard"
              className="flex items-center text-white hover:bg-gray-700 p-2 rounded-lg transition-all duration-200"
            >
              <FontAwesomeIcon icon={faChartLine} className="mr-3" />
              {!isCollapsed && 
               <button onClick={()=>Navigate('/dashboard')}>Dashboard</button>  }
              </div>
            
            
          </li>
          <li>
            <div
              to="/admin/users"
              className="flex items-center text-white hover:bg-gray-700 p-2 rounded-lg transition-all duration-200"
            >
              <FontAwesomeIcon icon={faUsers} className="mr-3" />
              {!isCollapsed && 
               <button onClick={()=>Navigate('/manageusers')}>Manage Users</button>  }
            </div>
          </li>
          <li>
            <div
              to="/admin/products"
              className="flex items-center text-white hover:bg-gray-700 p-2 rounded-lg transition-all duration-200"
            >
              <FontAwesomeIcon icon={faBox} className="mr-3" />
              {!isCollapsed && 
              <button onClick={()=>Navigate('/manageproducts')}>Manage Products </button> }
            </div>
          </li>
          <li>
            <div
              to="/admin/orders"
              className="flex items-center text-white hover:bg-gray-700 p-2 rounded-lg transition-all duration-200"
            >
              <FontAwesomeIcon  icon={faClipboardList}  className="mr-3 " />
              {!isCollapsed && 
              <button onClick={()=>Navigate('/manageorders')}>Manage Orders</button>   }
            </div>
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
