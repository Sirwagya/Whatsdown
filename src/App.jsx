import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Loginpage from "./components/login page/loginpage";
import Homepage from "./components/home/homepage";
import ChatInterface from "./components/chat interface/chatInterface";
import Logoutpage from "./components/logout page/logoutpage";
import Errorpage from "./components/error page/errorpage";
import { useAuth } from "./components/AuthContext";

function ProtectedRoute(props) {
  const { userData, loading } = useAuth();
  const children = props.children;

  if (loading) {
    return <div className="h-screen w-screen flex items-center justify-center bg-gray-100">Loading...</div>;
  }

  if (userData) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}

const App = () => {
  const { userData, loading } = useAuth();

  if (loading) {
    return <div className="h-screen w-screen flex items-center justify-center bg-gray-100">Loading...</div>;
  }

  const islogged = !!userData;

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Homepage />
            </ProtectedRoute>
          }
        >
          <Route path="chat/:userId" element={<ChatInterface />} />
        </Route>
        <Route path="/login" element={<Loginpage islogged={islogged} />} />
        <Route path="/logout" element={<Logoutpage />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </>
  );
};

export default App;
