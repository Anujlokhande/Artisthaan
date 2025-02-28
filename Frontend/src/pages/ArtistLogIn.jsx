import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArtistDataContext } from "../context/AristContext";

const ArtistLogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { artist, setArtist } = useContext(ArtistDataContext);

  const navigate = useNavigate();
  function submitHandler(e) {
    e.preventDefault();
    const artist = {
      email,
      password,
    };
    try {
      const responce = axios.post(
        `${import.meta.env.VITE_BASE_URL}/artist/login}`,
        artist
      );

      if (responce.status == 200) {
        const data = responce.data;
        setArtist(data.artist);
        const expirationTime = new Date().getTime() + 60 * 60 * 1000; // 60 minutes from now
        localStorage.setItem("token", data.token);
        localStorage.setItem("tokenExpiration", expirationTime.toString());
        navigate("/home");
      }
    } catch (err) {
      console.log(err);
    }
    setPassword("");
    setEmail("");
  }
  return (
    <div className="h-screen w-screen bg-[url(https://c1.wallpaperflare.com/preview/630/630/403/rough-ricardo-l-tamayo-art-local-art.jpg)] bg-cover bg-center flex justify-center items-center ">
      <div className="backdrop-blur-xl  w-1/3 h-2/3 flex flex-col items-center justify-evenly border-none rounded-2xl">
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
              required
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
              required
            />

            <Link
              to={"/home"}
              className="w-full border-2 border-[#8E7B61] rounded-md text-white  flex justify-center items-center bg-[#A27B4E] py-1.5 px-5 mb-5"
            >
              Log In
            </Link>
            <Link
              to={"/login"}
              className="w-full border-2 border-black rounded-md text-white bg-black py-1.5 px-5 flex justify-center items-center"
            >
              Log In As User
            </Link>
          </form>
          <p className="mt-3">
            Don't Have An Account{" "}
            <Link to={"/signup"} className="underline">
              Register Here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArtistLogIn;
