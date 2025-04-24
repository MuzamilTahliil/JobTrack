import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-400 text-white py-10">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
          <div className="text-left mb-10">
            <h1 className="text-3xl font-bold text-orange-500">JobTrack</h1>
          </div>
            <p className="text-gray-200">
              JobTrack connects the best professionals with top job opportunities worldwide. Start your journey with us today!
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-100">Quick Links</h3>
            <ul className="mt-4 space-y-4 text-gray-200">
              <li><Link to="/" className="hover:text-orange-500">Home</Link></li>
              <li><Link to="/about" className="hover:text-orange-500">About</Link></li>
              <li><Link to="/contact" className="hover:text-orange-500">Contact</Link></li>
              <li><Link to="/terms" className="hover:text-orange-500">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-orange-500">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Subscribe */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-100">Subscribe</h3>
            <form className="mt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-4 text-wite w-full rounded-md"
              />
              <button
                type="submit"
                className="mt-4 px-6 py-3 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600 focus:bg-orange-600"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-10 text-center text-gray-400">
          <p>© 2025 JobTrack, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
