import profilePic from "../static/profilePic.jpeg";
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Footer from "./footer";

export default function ProfileSection() {
  const [profileBtn, setProfileBtn] = useState(["LEARN MORE", "./resume"]);

  function changeBtn() {
    if (profileBtn[0] == "LEARN MORE") {
      setProfileBtn(["ABOUT ME", "./about"]);
    } else {
      setProfileBtn(["LEARN MORE", "./resume"]);
    }
  }

  return (
    <div className="infoContainer">
      <section className="profileResume">
        <div className="profilePic">
          <img src={profilePic} alt="Yago Pajariño"></img>
        </div>
        <h1>YAGO PAJARIÑO</h1>
        <a href="mailto:yagopajarino@outlook.com">
          <p className="link mail">yagopajarino@outlook.com</p>
        </a>
      </section>
      <section className="shortAbout">
        <h3>ABOUT</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget
          laoreet ex, in pretium nulla. Fusce scelerisque, lacus ut gravida
          pretium, dui turpis efficitur eros, vitae condimentum odio risus nec
          arcu.
        </p>
        <div className="padDiv" style={{ margin: "1em 0" }}>
          <Link to={profileBtn[1]} className="button" onClick={changeBtn}>
            {profileBtn[0]}
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
