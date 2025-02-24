import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import axios from "axios";

const UserProtectWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const { user, setUser } = useContext(UserDataContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      console.log("Token Is Not Present");
      navigate("/login");
    }

    try {
      axios
        .get(`${import.meta.env.VITE_BASE_URL}/user/getUser`, {
          headers: `Bearer ${token}`,
        })
        .then((responce) => {
          if (responce.status == 200) {
            const data = responce.data;
            setUser(data.user);
            navigate("/home");
          }
        });
    } catch (err) {
      console.log("err in protect wrapper", err);
    }
  }, [setUser, navigate]);
  return <>{children}</>;
};

export default UserProtectWrapper;
