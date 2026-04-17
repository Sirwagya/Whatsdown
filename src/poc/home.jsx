import React from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';

const home = (props) => {
    const setislogged = props.setislogged;
    const navigate = useNavigate();
    const handleLogout = async() => {
        await signOut(auth);
        if (setislogged) setislogged(false);
        navigate("/login");
        alert("User logged out");
    }
    const handleChat = () => {
        navigate("/chat");
    }

    
  return (
    <>
      <div>home</div>
      <button onClick={handleChat}>Chat</button>
      <button onClick={handleLogout}>Logout</button>
    </>
  )
}

export default home