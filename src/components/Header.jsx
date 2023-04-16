import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="hidden sm:block sm:ml-6">
      <div className="flex space-x-4">
        <Link
          to="/"
          className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        >
          Home
        </Link>
        <Link
          to="/login"
          className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        >
          Signup
        </Link>
      </div>
    </div>
  );
};

export default Header;
