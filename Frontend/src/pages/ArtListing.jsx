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
  const [comment, setComment] = useState("");
  const [saved, setSaved] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function checkOwner() {
      const token = localStorage.getItem("token");

      try {
        const response = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/artist/artOwner/${
            listingDetails._id
          }`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.status === 200) {
          console.log(response);

          setAuthorized(true);
        } else {
          setAuthorized(false);
        }
      } catch (err) {
        // console.error(err);
      }
    }
    checkOwner();
    async function checkSaved() {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/user/is-saved/${
            listingDetails._id
          }`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setSaved(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    checkSaved();
  }, [listingDetails]);

  async function submitHandler(e) {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/user/create-comment/${
          listingDetails._id
        }`,
        {
          comment,
        },

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status == 200) {
        setListingDetails(response.data);
        setComment("");
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function saveListing() {
    const token = localStorage.getItem("token");

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/user/save-art/${listingDetails._id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status == 200) {
        setUser(response.data);
        setSaved(!saved);
      }
    } catch (error) {
      console.log(error);
    }
  }

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
      if (response.status === 200) navigate("/home");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen w-full bg-gray-100 p-8">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-4xl w-full flex relative">
        <button
          className="absolute top-6 right-6 text-gray-600 hover:text-gray-900"
          onClick={() => navigate("/home")}
        >
          <X size={24} />
        </button>

        <img
          src={listingDetails.image || "/default-art.jpg"}
          alt="Artwork"
          className="w-1/2 h-auto object-cover rounded-xl shadow-md"
          loading="lazy"
        />

        <div className="w-1/2 pl-8 flex justify-between flex-col">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {listingDetails.title || "Untitled"}
            </h2>
            <p className="mt-4 text-gray-600 text-md">
              {listingDetails.description || "No description available."}
            </p>
            <div className="mt-6 space-y-3 text-gray-700">
              <p className="font-medium">
                Type:{" "}
                <span className="text-gray-900">
                  {listingDetails.typeOfArt || "N/A"}
                </span>
              </p>
              <p>
                Price:{" "}
                <span className="text-gray-900">
                  {listingDetails.location || "Unknown"}
                </span>
              </p>
            </div>

            {user && (
              <div className="mt-6 space-x-4">
                <button
                  onClick={() =>
                    navigate("/artist-details", {
                      state: { artist: listingDetails.owner },
                    })
                  }
                  className="bg-indigo-600 text-white px-6 py-2.5 rounded-2xl hover:bg-indigo-700 transition"
                >
                  Contact Artist
                </button>
                <button
                  onClick={saveListing}
                  className="bg-[#ad1229] text-white px-6 py-2.5 rounded-2xl hover:bg-[#E60023] transition"
                  loading="lazy"
                >
                  {saved ? "Saved" : "Save"}
                </button>
              </div>
            )}

            {authorized && (
              <div className="flex justify-between mt-6">
                <button
                  onClick={() => navigate("/art-edit")}
                  className="w-1/2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                >
                  Edit
                </button>
                <button
                  onClick={delListing}
                  className="w-1/2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition ml-4"
                >
                  Delete
                </button>
              </div>
            )}

            <div>
              <div className="mt-4 overflow-y-auto max-h-40">
                <h3 className="text-lg font-semibold mb-2">Comments</h3>
                <div className="space-y-3">
                  {listingDetails.comments?.map((comment, index) => (
                    <div key={index} className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm font-medium">
                        {comment.owner.fullname?.firstname}
                      </p>
                      <p className="text-sm text-gray-600">{comment.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <form
              className="mb-4"
              onSubmit={(e) => {
                submitHandler(e);
              }}
            >
              <div className="flex justify-center items-center">
                <input
                  value={comment}
                  onChange={(e) => {
                    setComment(e.target.value);
                  }}
                  type="text"
                  className="w-full border border-r-0 border-black  rounded-l-2xl px-5 py-3 outline-0 placeholder:px-3"
                  placeholder="Add Comment"
                />
                <button className="px-5 py-2 border border-l-0 rounded-r-2xl">
                  <i className="ri-arrow-right-line text-2xl"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtListing;
