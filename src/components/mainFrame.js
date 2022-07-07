import { Outlet, Link } from "react-router-dom";
import ProfileSection from "./ProfileSection";
import React from "react";

export default function MainFrame() {
  return (
    <div className="container">
      <ProfileSection />
      <Outlet />
    </div>
  );
}
