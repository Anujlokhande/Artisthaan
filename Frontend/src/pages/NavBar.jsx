import React, { useState } from "react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const categories = [
    "Painting",
    "Sculpture",
    "Photography",
    "Digital Art",
    "Mixed Media",
  ];
  return (
    <div className="flex items-center justify-between p-4 shadow-md bg-[#F4F4F2] relative w-full">
      {/* Logo */}
      <div className="text-2xl font-bold text-[#E60023] flex items-center">
        <span className="ml-4 text-3xl">artisthaan</span>
      </div>

      {/* categories */}
      <div className="flex items-center gap-4 overflow-x-auto px-4 ">
        {categories.map((category) => (
          <button
            key={category}
            className="text-gray-700 hover:text-[#E60023] font-medium px-4 py-2 cursor-pointer"
          >
            {category}
          </button>
        ))}
      </div>

      {/* User Menu */}
      <div className="flex items-center gap-4 relative">
        <span className="text-gray-700 flex items-center gap-1">
          <i className="ri-home-line  text-2xl cursor-pointer font-semibold opacity-100"></i>
          Home
        </span>
        <div
          className="border rounded-full p-2 flex items-center gap-4 cursor-pointer w-18"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className="ri-menu-line text-gray-400"></i>
          <i className="ri-user-fill text-gray-400"></i>
        </div>

        {/* Dropdown Menu */}
        {menuOpen && (
          <div className="absolute right-0 top-12 bg-white shadow-md rounded-lg w-48 py-2">
            <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 font-semibold">
              Sign up
            </button>
            <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
              Log in
            </button>
            <hr />
            <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
              Airbnb your home
            </button>
            <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
              About Us
            </button>
            <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
              Help Centre
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

{
  /* <i className="ri-home-line  text-2xl cursor-pointer font-semibold opacity-100"></i>
          <i className="ri-compass-line text-2xl cursor-pointer  font-semibold opacity-100"></i>
          <i className="ri-message-3-line text-2xl cursor-pointer  font-semibold opacity-100"></i>
          <i className="ri-notification-4-line text-2xl cursor-pointer  font-semibold opacity-100"></i> */
}

export default NavBar;
