import React from 'react'
import { Link } from 'react-router-dom';

function UserHeader() {
  return (
    <header className="bg-gradient-to-r from-gray-800 to-gray-200 text-white shadow-md">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-orange-500">JobTrack</h1>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
            <Link to="/UserDashboard" className="text-base font-medium text-black transition-all duration-200 hover:text-orange-500 focus:text-orange-500 focus:outline-none active:text-orange-600">
              Home
            </Link>

            <Link to="/AllJobs" className="text-base font-medium text-black transition-all duration-200 hover:text-orange-500 focus:text-orange-500 focus:outline-none active:text-orange-600">
              All Jobs
            </Link>

            <Link to="/UserAbout" className="text-base font-medium text-black transition-all duration-200 hover:text-orange-500 focus:text-orange-500 focus:outline-none active:text-orange-600">
              About
            </Link>

            <Link to="/UserContact" className="text-base font-medium text-black transition-all duration-200 hover:text-orange-500 focus:text-orange-500 focus:outline-none active:text-orange-600">
              Contact
            </Link>

            <Link
              to="/"
              className="px-6 py-2 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600 transition-all duration-200"
            >
              Log Out
            </Link>
          </div>

        </nav>
      </div>
    </header>
  );
}

export default UserHeader;
