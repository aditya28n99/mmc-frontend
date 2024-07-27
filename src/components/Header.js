import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <Link to="/" className="text-white mr-4">Home</Link>
        <Link to="/create-profile" className="text-white mr-4">Employer</Link>
        <Link to="/employer-profile/:id" className="text-white mr-4">Employer profile</Link>
      </div>
    </nav>
  );
};

export default Header;
