import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import axios from "axios";

const Home = () => {
  const [listing, setListing] = useState([]);

  const getDetail = async (id) => {
    try {
      const responce = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/artist/show/${id}`,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JlMDFhNTg0M2Q2ODQxMGI5NTcwZDIiLCJpYXQiOjE3NDA1MDU1MDksImV4cCI6MTc0MDU5MTkwOX0.llUHAo8HSE60gStqzbWW5oaDgX547VBV5k6pCIFnU4E`,
          },
        }
      );
      if (responce.status == 200) {
        console.log(responce.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await axios.get("http://localhost:8080/artist/show");

        setListing(response.data);
      } catch (error) {
        console.error("Error fetching artists:", error);
      }
    };

    fetchListings();
  }, []);

  return (
    <>
      <div>
        <div className="h-[10vh] w-full flex items-center justify-between px-6">
          <NavBar />
        </div>
        {/* Main */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 p-4 space-y-4">
          {listing.map((listing) => (
            <img
              onClick={() => {
                getDetail(listing._id);
              }}
              key={listing._id}
              src={listing.image}
              className="w-full object-cover rounded-lg break-inside-avoid"
            />
          ))}
        </div>
        {/* footer  */}
        <div></div>
      </div>
    </>
  );
};

export default Home;
