import React from 'react'
import { useNavigate } from 'react-router-dom';

const chat = (props) => {
    const setislogged = props.setislogged;
    const navigate = useNavigate();
    const handleLogout = () => {
        if (setislogged) setislogged(false);
        navigate("/login");
        alert("User logged out");
    }
  return (
    <>
    <div>chat</div>
    <button onClick={() => navigate("/")}>Home</button>
    <button onClick={handleLogout}>Logout</button>
    </>
  )
}

export default chat