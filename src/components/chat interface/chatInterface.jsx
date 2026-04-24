import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { auth } from "../../../firebase";
import { signOut } from "firebase/auth";


const ChatInterface = (props) => {
  const param = useParams();
  const setislogged = props.setislogged;
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <>
      <div>chatInterface</div>
      <div className="flex gap-4">
        <button
          className="text-white h-12 w-24 bg-sky-500 hover:bg-sky-700 rounded-xl"
          onClick={() => navigate("/")}
        >
          Home
        </button>
        <button
          className="text-white h-12 w-24 bg-sky-500 hover:bg-sky-700 rounded-xl"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default ChatInterface;
