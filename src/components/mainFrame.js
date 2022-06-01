import { Outlet, Link } from "react-router-dom";
import ProfileSection from "./profileSection";
import WelcomeSection from "./welcomeSection";
import React from "react";

export default function MainFrame() {
  return (
    <div className="container">
      <ProfileSection />
      <article className="main" id="routerContainer">
        <Outlet />
      </article>
    </div>
  );
}
