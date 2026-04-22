import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Loginpage from "./components/login page/loginpage";
import Homepage from "./components/home/homepage";
import ChatInterface from "./components/chat interface/chatInterface";
import Logoutpage from "./components/logout page/logoutpage";
import Errorpage from "./components/error page/errorpage";

function ProtectedRoute(props) {
  const isLogin = props.isLogged;
  const children = props.children;
  if (isLogin) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}

const App = () => {
  const [islogged, setislogged] = useState(false);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute isLogged={islogged}>
              <Homepage setislogged={setislogged} />
            </ProtectedRoute>
          }
        >
          <Route index element={<Homepage setislogged={setislogged} />} />
        </Route>
        <Route
          path="/chat"
          element={
            <ProtectedRoute isLogged={islogged}>
              <ChatInterface setislogged={setislogged} />
            </ProtectedRoute>
          }
        >
          <Route index element={<ChatInterface setislogged={setislogged} />} />
        </Route>
        <Route path="/login" element={<Loginpage setislogged={setislogged} islogged={islogged} />} />
        <Route path="/logout" element={<Logoutpage setislogged={setislogged} />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </>
  );
};

export default App;
