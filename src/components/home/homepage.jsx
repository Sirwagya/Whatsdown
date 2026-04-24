import React from "react";
import { Outlet } from "react-router-dom";
import Sideslab from "./sideslab";

const Homepage = () => {
  return (
    <div className="flex h-screen">
      <Sideslab />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Homepage;
