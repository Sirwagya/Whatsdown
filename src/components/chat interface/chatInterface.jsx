import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const ChatInterface = (props) => {
  const param = useParams();
  const setislogged = props.setislogged;
  const navigate = useNavigate();

  const handleLogout = () => {
    if (setislogged) setislogged(false);
    navigate("/login");
    alert("User logged out");
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
