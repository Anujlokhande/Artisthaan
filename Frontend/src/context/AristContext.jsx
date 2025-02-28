import React, { createContext, useState } from "react";
export const ArtistDataContext = createContext();

const ArtistContext = ({ children }) => {
  const [artist, setArtist] = useState({
    fullname: {
      firstname: "",
      lastname: "",
    },
    email: "",
    password: "",
    city: "",
    profilePic: "",
    phone: "",
  });
  return (
    <div>
      <ArtistDataContext.Provider value={{ artist, setArtist }}>
        {children}
      </ArtistDataContext.Provider>
    </div>
  );
};

export default ArtistContext;
