import React from 'react';
import { Link } from 'react-router-dom';
import emp from '../images/emp.png'

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-2xl font-bold text-gray-800">CrewHire</Link>
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-600 hover:text-gray-800">Home</Link>
            <Link to="/post-dashboard" className="text-gray-600 hover:text-gray-800">Post Job</Link>
            <Link to="/all-applicaitons" className="text-gray-600 hover:text-gray-800">Applications</Link>
            
          </nav>
        </div>
        <div className="flex items-center space-x-4">
        <Link to="/all-notifications" className="text-gray-600 hover:text-gray-800">Notifications</Link>
        <Link to="/help" className="text-gray-600 hover:text-gray-800">Help</Link>
          <Link to="/employer-profile/:id" className="flex items-center space-x-2 text-gray-600 hover:text-gray-800">
            <img src={emp} alt="Profile" className="w-8 h-8 rounded-full" />
          </Link>
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Log-out</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
