import { Outlet, Link } from "react-router-dom";
import ProfileSection from "./profileSection";
import React from "react";

export default function MainFrame() {
  return (
    <div className="container">
      <ProfileSection />
      <Outlet />
    </div>
  );
}
