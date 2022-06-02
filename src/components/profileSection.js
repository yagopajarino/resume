import profilePic from "../static/profilePic.jpeg";
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Footer from "./footer";
import React from "react";

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
    <div className="lat infoContainer">
      <section className="profileResume">
        <div className="profilePic">
          <img src={profilePic} alt="Yago Pajariño"></img>
        </div>
        <h2>YAGO PAJARIÑO</h2>
        <a href="mailto:yagopajarino@outlook.com">
          <p className="link mail">yagopajarino@outlook.com</p>
        </a>
      </section>
      <section className="shortAbout">
        <h3>ABOUT</h3>
        <p>
          Hey! I'm Yago. I like to create things, to work with data and learn
          stuff. &#x1f913; <br></br>I am a{" "}
          <a className="link" href="https://uca.edu.ar/es/home">
            UCA
          </a>{" "}
          business graduate and{" "}
          <a className="link" href="https://www.dc.uba.ar/">
            UBA
          </a>{" "}
          computer science student.
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
