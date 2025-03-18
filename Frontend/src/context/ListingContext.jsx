import React, { createContext, useState } from "react";

export const ListingDataContext = createContext();

const ListingContext = ({ children }) => {
  const [listingDetails, setListingDetails] = useState(null);
  return (
    <>
      <ListingDataContext.Provider
        value={{ listingDetails, setListingDetails }}
      >
        {children}
      </ListingDataContext.Provider>
    </>
  );
};

export default ListingContext;
