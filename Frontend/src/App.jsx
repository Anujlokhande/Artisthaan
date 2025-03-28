import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserSignUp from "./pages/UserSignUp";
import UserLogIn from "./pages/UserLogIn";
import ArtistLogIn from "./pages/ArtistLogIn";
import ArtistSignUp from "./pages/ArtistSignUp";
import ProtectWrapper from "./pages/ProtectWrapper";
import ArtistProfile from "./pages/ArtistProfile";
import ArtListing from "./pages/ArtListing";
import LandingPage from "./pages/LandingPage";
import ArtSubmissionForm from "./pages/ArtSubmissionForm";
import ArtEditForm from "./pages/ArtEditForm";
import Artistarts from "./pages/Artistarts";
import Saved from "./pages/Saved";
import Help from "./pages/Help";
import About from "./pages/About";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
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
        <Route path="/art-details" element={<ArtListing />} />
        <Route path="/artist-details" element={<ArtistProfile />} />
        <Route path="/art-submission" element={<ArtSubmissionForm />} />
        <Route path="/art-edit" element={<ArtEditForm />} />
        <Route path="/artist-art" element={<Artistarts />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/help" element={<Help />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
