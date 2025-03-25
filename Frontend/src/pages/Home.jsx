import React, { useContext, useEffect, useState } from "react";
import NavBar from "./NavBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ArtListing from "./ArtListing";
import { ListingDataContext } from "../context/ListingContext";
import { ArtistDataContext } from "../context/AristContext";

const Home = () => {
  const [listing, setListing] = useState([]);
  const { listingDetails, setListingDetails } = useContext(ListingDataContext);
  const [selectedCategory, setSelectedCategory] = useState("");
  const { artist } = useContext(ArtistDataContext);

  const navigate = useNavigate();

  const getDetail = async (id) => {
    try {
      const responce = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/artist/show/${id}`
      );
      if (responce.status == 200) {
        setListingDetails(responce.data);
        navigate("/art-details");
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
          <NavBar setSelectedCategory={setSelectedCategory} />
        </div>

        <div>
          <div className="columns-1 sm:columns-2 md:columns-4 gap-4 p-4 space-y-4 ">
            {listing
              .filter((item) =>
                selectedCategory ? item.typeOfArt === selectedCategory : true
              )
              .map((item) => (
                <img
                  onClick={() => getDetail(item._id)}
                  key={item._id}
                  src={item.image}
                  className="w-full object-cover rounded-lg break-inside-avoid hover:cursor-pointer"
                />
              ))}
          </div>
        </div>
        {/* footer  */}
        <div></div>
      </div>
    </>
  );
};

export default Home;
