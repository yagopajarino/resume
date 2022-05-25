import { Outlet, Link } from "react-router-dom";
import ProfileSection from "./profileSection";

export default function MainFrame() {
  return (
    <div className="mainContainer">
      <ProfileSection />
      <div id="routerContainer">
        <Outlet />
      </div>
    </div>
  );
}
