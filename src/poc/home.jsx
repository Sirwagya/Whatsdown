import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";

const home = (props) => {
  const setislogged = props.setislogged;
  const navigate = useNavigate();
  const handleLogout = async () => {
    await signOut(auth);
    if (setislogged) setislogged(false);
    navigate("/login");
    alert("User logged out");
  };
  const handleChat = () => {
    navigate("/chat");
  };

  return (
    <>
      <div>home</div>
      <div class="flex gap-4">
        <button
          class="text-white h-12 w-24 bg-sky-500 hover:bg-sky-700 rounded-xl m-9"
          onClick={handleChat}
        >
          Chat
        </button>
        <button
          class="text-white h-12 w-24 bg-sky-500 hover:bg-sky-700 rounded-xl m-9"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default home;
