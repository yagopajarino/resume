import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Projects from "./components/pages/Projects";
import Resume from "./components/pages/Resume";
import Stats from "./components/pages/Stats";
import "./style.css";
import logo from "./static/logo.png";
import WelcomeSection from "./components/welcomeSection";

let icon = document.querySelector("#icon");
icon.href = logo;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<WelcomeSection />} />
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
);
