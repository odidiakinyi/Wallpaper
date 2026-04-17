import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6 bg-black/50 backdrop-blur-lg">
      <Link to="/" className="text-2xl font-bold text-white">
        Wallpaper App
      </Link>

      <div className="flex gap-6">
        <Link to="/" className="text-white hover:text-gray-300 transition">
          Home
        </Link>
        <Link to="/favorites" className="text-white hover:text-gray-300 transition">
          Favorites
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;