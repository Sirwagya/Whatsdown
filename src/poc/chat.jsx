import React from "react";
import { useNavigate } from "react-router-dom";

const chat = (props) => {
  const setislogged = props.setislogged;
  const navigate = useNavigate();
  const handleLogout = () => {
    if (setislogged) setislogged(false);
    navigate("/login");
    alert("User logged out");
  };
  return (
    <>
      <div>chat</div>
      <div class="flex gap-4">
        <button
          class="text-white h-12 w-24 bg-sky-500 hover:bg-sky-700 rounded-xl "
          onClick={() => navigate("/")}
        >
          Home
        </button>
        <button
          class="text-white h-12 w-24 bg-sky-500 hover:bg-sky-700 rounded-xl "
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default chat;
