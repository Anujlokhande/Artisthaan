import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserSignUp from "./pages/UserSignUp";
import UserLogIn from "./pages/UserLogIn";
import ArtistLogIn from "./pages/ArtistLogIn";
import ArtistSignUp from "./pages/ArtistSignUp";
import ProtectWrapper from "./pages/ProtectWrapper";
import Main from "./pages/Main";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/home"
          element={
            <ProtectWrapper>
              <Home />
            </ProtectWrapper>
          }
        />
        <Route path="/login" element={<UserLogIn />} />
        <Route path="/signup" element={<UserSignUp />} />
        <Route path="/artist-login" element={<ArtistLogIn />} />
        <Route path="/artist-signup" element={<ArtistSignUp />} />
      </Routes>
    </div>
  );
}

export default App;
