import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import { useContext } from "react";
import { ListingDataContext } from "../context/ListingContext";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import axios from "axios";

const ArtListing = () => {
  const { listingDetails, setListingDetails } = useContext(ListingDataContext);
  const { user, setUser } = useContext(UserDataContext);
  const [authorized, setAuthorized] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function checkOwner() {
      const token = localStorage.getItem("token");

      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/artist/artOwner/${
            listingDetails._id
          }`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status == 200) {
          setAuthorized(true);
        }
      } catch (err) {
        console.log(err);
      }
    }
    checkOwner();
  }, []);

  const delListing = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_BASE_URL}/artist/delete/${listingDetails._id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status == 200) {
        navigate("/home");
      } else {
        console.log("err while deleting");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-gradient-to-r bg-transparent backdrop-blur-2xl p-8 absolute top-0 ">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl w-full text-center relative">
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
          onClick={() => {
            navigate("/home");
          }}
        >
          <X size={24} />
        </button>

        <img
          src={
            listingDetails.image ||
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyrOrNoiR7Hj_ctmI_-a5uShS8470JVJuWXg&s"
          }
          alt="Artwork"
          className="w-full h-80 object-cover rounded-xl shadow-md"
          loading="lazy"
        />
        <h2 className="mt-5 text-3xl font-bold text-gray-900">
          {listingDetails.title || "Untitled"}
        </h2>
        <p className="mt-3 text-gray-700 text-lg">
          {listingDetails.description || "No description available."}
        </p>
        <p className="mt-3 font-semibold text-lg">
          Type of Art:{" "}
          <span className="text-gray-800">
            {listingDetails.typeOfArt || "N/A"}
          </span>
        </p>
        <p className="mt-2 text-lg">
          Location:{" "}
          <span className="text-gray-800">
            {listingDetails.location || "Unknown"}
          </span>
        </p>
        <p className="mt-1 text-lg">
          Country:{" "}
          <span className="text-gray-800">
            {listingDetails.country || "Unknown"}
          </span>
        </p>
        <a
          onClick={() => {
            navigate("/artist-details", {
              state: { artist: listingDetails.owner },
            });
          }}
          className={`mt-5 bg-blue-600 text-white text-lg px-6 py-3 rounded-lg hover:bg-blue-700 transition shadow-md  ${
            !user ? "hidden" : "inline-block"
          }`}
          aria-label="Contact Artist"
        >
          Contact Artist
        </a>

        <div className="flex justify-center items-center gap-6">
          <button
            onClick={() => {
              navigate("/art-edit");
            }}
            className={`mt-5 bg-blue-600 text-white text-lg px-6 py-3 rounded-lg hover:bg-blue-700 transition shadow-md  ${
              !authorized ? "hidden" : "inline-block"
            }`}
            aria-label="Contact Artist"
          >
            Edit
          </button>

          <button
            onClick={delListing}
            className={`mt-5 bg-[#B60000] text-white text-lg px-6 py-3 rounded-lg hover:bg-red-600 transition shadow-md  ${
              !authorized ? "hidden" : "inline-block"
            }`}
            aria-label="Contact Artist"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArtListing;
