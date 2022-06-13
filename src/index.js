import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Projects from "./components/pages/Projects";
import Resume from "./components/pages/Resume";
import Stats from "./components/pages/Stats";
import logo from "./static/logo.png";
import Welcome from "./components/pages/Welcome";

import "./style/root.css";
import "./style/markdown.css";
import "./style/nav.css";
import "./style/info-container.css";
import "./style/article-header.css";
import React from "react";

let icon = document.querySelector("#icon");
icon.href = logo;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Welcome />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="Projects" element={<Projects />} />
          <Route path="resume" element={<Resume />} />
          <Route path="stats" element={<Stats />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
