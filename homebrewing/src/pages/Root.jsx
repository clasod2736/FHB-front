import React from "react";
import "./Root.css";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import HomeBtn from "../components/HomeBtn";

export default function Root() {
  return (
    <div className="rootContainer">
      <Navbar />
      <Outlet />
      <HomeBtn />
    </div>
  );
}
