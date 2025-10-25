import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-3">
        <Link to="/" className="text-xl font-semibold tracking-wide">
          📘 Assignment Portal
        </Link>
        <div className="space-x-6 text-sm font-medium">
          <Link to="/" className="hover:text-gray-200 transition">Home</Link>
          <Link to="/upload" className="hover:text-gray-200 transition">Upload</Link>
          <Link to="/view" className="hover:text-gray-200 transition">View</Link>
          <Link to="/about" className="hover:text-gray-200 transition">About</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
