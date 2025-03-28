import React, { useState } from "react";
import { useContext } from "react";
import { ListingDataContext } from "../context/ListingContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ArtEditForm = ({ initialArt = {}, onSubmit }) => {
  const { listingDetails, setListingDetails } = useContext(ListingDataContext);
  const navigate = useNavigate();
  //   console.log(listingDetails._id);

  const artTypes = [
    "Chittara art",
    "Madhubani painting",
    "Warli painting",
    "Digital Art",
    "Mixed Media",
    "Other",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setListingDetails((prevListingDetails) => ({
      ...prevListingDetails,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requiredFields = ["title", "description", "typeOfArt"];
    const missingFields = requiredFields.filter(
      (field) => !listingDetails[field]
    );

    if (missingFields.length > 0) {
      alert(
        `Please fill in the following required fields: ${missingFields.join(
          ", "
        )}`
      );
      return;
    }
    const token = localStorage.getItem("token");
    if (!token) {
      console.log("Token Is Not Present");
      return;
    }

    try {
      const response = await axios.put(
        `${import.meta.env.VITE_BASE_URL}/artist/update/${listingDetails._id}`,
        {
          listingDetails,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status == 200) {
        const data = response.data;
        navigate("/art-details");
        // setListingDetails(data.)
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Edit Art Piece</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title Input */}
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={listingDetails.title}
            onChange={handleChange}
            placeholder="Enter artwork title"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#111827] focus:border-[#111827]"
          />
        </div>

        {/* Description Input */}
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={listingDetails.description}
            onChange={handleChange}
            placeholder="Describe the artwork"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#111827] focus:border-[#111827] min-h-[100px]"
          />
        </div>

        {/* Image URL Input */}
        <div>
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Image URL
          </label>
          <input
            type="url"
            id="image"
            name="image"
            value={listingDetails.image}
            onChange={handleChange}
            placeholder="Enter image URL"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#111827] focus:border-[#111827]"
          />
          {listingDetails.image && (
            <div className="mt-2">
              <img
                src={listingDetails.image}
                alt="Preview"
                className="w-full h-48 object-cover rounded-md"
              />
            </div>
          )}
        </div>

        {/* Art Type Select */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Type of Art
          </label>
          <select
            name="typeOfArt"
            value={listingDetails.typeOfArt}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#111827] focus:border-[#111827]"
          >
            <option value="">Select art type</option>
            {artTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Location Input */}
        <div>
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={listingDetails.location}
            onChange={handleChange}
            placeholder="Enter artwork location"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#111827] focus:border-[#111827]"
          />
        </div>

        {/* Country Input */}
        <div>
          <label
            htmlFor="country"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Country
          </label>
          <input
            type="text"
            id="country"
            name="country"
            value={listingDetails.country}
            onChange={handleChange}
            placeholder="Enter country"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:[#111827] focus:border-[#111827]"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full py-2 px-4 rounded-md bg-[#111827] text-white"
          >
            Save Art Piece
          </button>
        </div>
      </form>
    </div>
  );
};

export default ArtEditForm;
