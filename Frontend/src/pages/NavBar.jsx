import React, { useContext, useState } from "react";
import { UserDataContext } from "../context/UserContext";
import { ArtistDataContext } from "../context/AristContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const NavBar = ({ setSelectedCategory }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const categories = [
    "Chittara art",
    "Madhubani painting",
    "Warli painting",
    "Digital Art",
    "Mixed Media",
  ];

  const navigate = useNavigate();

  const { user, setUser } = useContext(UserDataContext);
  const { artist, setArtist } = useContext(ArtistDataContext);

  async function logOut() {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.log("token is not present");
      }
      if (user) {
        const responce = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/user/logout`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (responce.status == 200) {
          const data = responce.data;
          console.log(data);
          setUser(null);
          navigate("/");
        }
      } else {
        const responce = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/artist/logout`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (responce.status == 200) {
          const data = responce.data;
          console.log(data);
          setArtist(null);
          navigate("/");
        }
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="flex items-center justify-between p-4 shadow-md bg-[#F4F4F2] relative w-full">
      {/* Logo */}
      <div className="text-2xl font-bold text-[#E60023] flex items-center">
        <span className="ml-4 text-3xl">artistambh</span>
      </div>

      <div className="flex items-center gap-4 overflow-x-auto px-4 ">
        {categories.map((category) => (
          <button
            key={category}
            className="text-gray-700 hover:text-[#E60023] font-medium px-4 py-2 cursor-pointer"
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* User Menu */}
      <div className="flex items-center gap-4 relative">
        <span
          className="text-gray-700 flex items-center gap-1 cursor-pointer"
          onClick={() => {
            setSelectedCategory(null);
            navigate("/home");
          }}
        >
          <i className="ri-home-line  text-2xl  font-semibold opacity-100"></i>
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
            <button
              className="block w-full text-left px-4 py-2 hover:bg-gray-100 font-semibold"
              onClick={logOut}
            >
              Log out
            </button>
            <hr />
            <div
              className={` px-4 py-2 hover:bg-gray-100 gap-2 ${
                user ? "hidden" : "flex justify-center items-center"
              }`}
            >
              <i className="ri-add-box-line text-xl"></i>
              <button
                className={`w-full text-left ${user ? "hidden" : "block"}`}
                onClick={() => {
                  navigate("/art-submission");
                }}
              >
                Create
              </button>
            </div>
            <div
              className={` px-4 py-2 hover:bg-gray-100 gap-2 ${
                user ? "hidden" : "flex justify-center items-center"
              }`}
            >
              <i className="ri-brush-ai-line text-xl"></i>
              <button
                className={`w-full text-left ${user ? "hidden" : "block"}`}
                onClick={() => {
                  navigate("/artist-art");
                }}
              >
                Arts
              </button>
            </div>
            <div
              className={` px-4 py-2 hover:bg-gray-100 gap-2 ${
                user ? "flex justify-center items-center" : "hidden"
              }`}
            >
              <i className="ri-brush-ai-line text-xl"></i>
              <button
                className={`w-full text-left ${user ? "block" : "hidden"}`}
                onClick={() => {
                  navigate("/saved");
                }}
              >
                Saved
              </button>
            </div>
            <div className="flex justify-center items-center px-4 py-2 hover:bg-gray-100 gap-2">
              <i className="ri-information-line text-xl"></i>
              <button className={`w-full text-left block`}>About Us</button>
            </div>

            <div className="flex justify-center items-center px-4 py-2 hover:bg-gray-100 gap-2">
              <i className="ri-customer-service-line text-xl"></i>
              <button className={`w-full text-left block`}>Help Centre</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
