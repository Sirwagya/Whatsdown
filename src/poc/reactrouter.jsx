import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./home";
import Login from "./loginpage";
import Chat from "./chat";


const reactrouter = () => {
  const [islogged, setislogged] = useState(false);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute isLogged={islogged}>
              <Home setislogged={setislogged} />
            </ProtectedRoute>
          }
        >
          <Route index element={<Home setislogged={setislogged} />} />
        </Route>
        <Route
          path="/chat"
          element={
            <ProtectedRoute isLogged={islogged}>
              <Chat setislogged={setislogged} />
            </ProtectedRoute>
          }
        >
          <Route index element={<Chat setislogged={setislogged} />} />
        </Route>
        <Route path="/login" element={<Login setislogged={setislogged} islogged={islogged} />} />
      </Routes>
    </>
  );
};
function ProtectedRoute(props) {
  const isLogin = props.isLogged;
  const children = props.children;
  if (isLogin) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}
export default reactrouter;
