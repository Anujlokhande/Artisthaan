import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ArtistSignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [type, setType] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const navigate = useNavigate();
  function submitHandler(e) {
    e.preventDefault();
    setPassword("");
    setEmail("");
  }
  return (
    <div className="h-screen w-screen bg-[url(https://c1.wallpaperflare.com/preview/630/630/403/rough-ricardo-l-tamayo-art-local-art.jpg)] bg-cover bg-center flex justify-center items-center ">
      <div className="backdrop-blur-xl  w-1/2 h-[85%] flex flex-col items-center justify-evenly border-none rounded-2xl">
        {/*bg-[#604E2F]*/}
        <h1 className="text-4xl font-semibold">LOG IN</h1>
        <div className="w-2/3">
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
            className="w-full flex flex-col items-start"
          >
            <h3 className="text-xl text-[#D4B894] font-medium mb-2">
              Enter Your Name
            </h3>
            <div className="w-full flex gap-4 justify-between">
              <input
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                type="text"
                placeholder="First Name"
                className="rounded-md border-none h-8 bg-white  placeholder:text-base py-2 px-4 w-1/2 mb-3"
              />
              <input
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                type="text"
                placeholder="Last Name"
                className="rounded-md border-none h-8 bg-white  placeholder:text-base py-2 px-4 w-1/2 mb-3"
              />
            </div>
            <h3 className="text-xl text-[#D4B894] font-medium mb-2">
              Enter Your Email
            </h3>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="text"
              placeholder="Email"
              className="rounded-md border-none h-8 bg-white  placeholder:text-base py-2 px-4 w-full mb-3"
            />
            <h3 className="text-xl text-[#D4B894] font-medium mb-2">
              Enter Your Password
            </h3>
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              placeholder="Password"
              className="rounded-md border-none h-8 bg-white  placeholder:text-base py-2 px-4 w-full mb-5 "
            />

            <h3 className="text-xl text-[#D4B894] font-medium mb-2">
              Enter Type Of Art
            </h3>
            <input
              value={type}
              onChange={(e) => {
                setType(e.target.value);
              }}
              type="text"
              placeholder="Type Of Art"
              className="rounded-md border-none h-8 bg-white  placeholder:text-base py-2 px-4 w-full mb-3"
            />

            <h3 className="text-xl text-[#D4B894] font-medium mb-2">
              Enter Your City
            </h3>
            <input
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
              type="text"
              placeholder="City"
              className="rounded-md border-none h-8 bg-white  placeholder:text-base py-2 px-4 w-full mb-3"
            />

            <Link
              to={"/signup"}
              className="w-full border-2 border-[#8E7B61] rounded-md text-white  flex justify-center items-center bg-[#A27B4E] py-1.5 px-5 mb-5"
            >
              Sign Up
            </Link>
            <Link
              to={"/login"}
              className="w-full border-2 border-black rounded-md text-white bg-black py-1.5 px-5 flex justify-center items-center"
            >
              Register As Artist
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ArtistSignUp;
