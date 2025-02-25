import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import axios from "axios";

const Home = () => {
  const [listing, setListing] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await axios.get("http://localhost:8080/artist/show");
        console.log(response.data);

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
        <div className="h-[10vh] w-screen flex items-center justify-evenly bg-[#040D12]">
          <NavBar />
        </div>
        {/* Main */}
        <div className="bg-[#93B1A6] w-screen h-[90vh] grid grid-cols-3 gap-4 p-4">
          {listing.map((listing) => (
            <img
              key={listing._id}
              src={listing.image}
              className="w-full h-64 object-cover rounded-lg"
            />
          ))}
        </div>
        <div className="bg-[#93B1A6] w-screen h-[90vh]"></div>
        {/* footer  */}
        <div></div>
      </div>
    </>
  );
};

export default Home;
