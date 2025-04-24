import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaClipboardList, FaUserAlt, FaCog, FaChartLine, FaSignOutAlt, FaUserCircle } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="w-52 bg-gradient-to-r from-gray-800 to-gray-700 text-white h-full p-6 fixed">
      {/* Logo */}
      <div className="text-center mb-20">
        <h1 className="text-3xl font-bold text-orange-500">JobTrack</h1>
      </div>

      {/* Navigation Links */}
      <ul className="space-y-8">
        <li>
          <Link to="/dashboard" className="flex items-center text-lg hover:text-orange-300 transition duration-200">
            <FaHome className="mr-3 text-xl" /> Dashboard
          </Link>
        </li>
        <li>
          <Link to="/jobs" className="flex items-center text-lg hover:text-orange-300 transition duration-200">
            <FaClipboardList className="mr-3 text-xl" /> Jobs
          </Link>
        </li>
        <li>
          <Link to="/add-job" className="flex items-center text-lg hover:text-orange-300 transition duration-200">
            <FaUserAlt className="mr-3 text-xl" /> Add New
          </Link>
        </li>
        <li>
          <Link to="/Manage-jobs" className="flex items-center text-lg hover:text-orange-300 transition duration-200">
            <FaCog className="mr-3 text-xl" /> Manage Jobs
          </Link>
        </li>
        <li>
          <Link to="/users" className="flex items-center text-lg hover:text-orange-300 transition duration-200">
            <FaUserAlt className="mr-3 text-xl" /> Users
          </Link>
        </li>
        
        <li>
          <Link to="/" className="flex items-center text-lg hover:text-orange-300 transition duration-200">
            <FaSignOutAlt className="mr-3 text-xl" /> Log Out
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
