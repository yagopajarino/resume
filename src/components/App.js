import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <nav>
        <Link to="/" className="navNombre">
          YAGO PAJARIÑO
        </Link>
        <Link to="/about" className="navlink">
          ABOUT
        </Link>
        <Link to="/resume" className="navlink">
          RESUME
        </Link>
        <Link to="/projects" className="navlink">
          PROJECTS
        </Link>
        <Link to="/stats" className="navlink">
          STATS
        </Link>
        <Link to="/contact" className="navlink">
          CONTACT
        </Link>
      </nav>
      <div className="mainContainer">
        <div className="infoContainer">
          <div className="profileResume">
            <div className="profilePic">
              <img alt="Yago Pajariño"></img>
            </div>
            <h1>Yago Pajariño</h1>
            <a href="mailto:yagopajarino@outlook.com">
              <h2>yagopajarino@outlook.com</h2>
            </a>
          </div>
          <div className="shortAbout">
            <h3>ABOUT</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              eget laoreet ex, in pretium nulla. Fusce scelerisque, lacus ut
              gravida pretium, dui turpis efficitur eros, vitae condimentum odio
              risus nec arcu.
            </p>
            <div className="learnMoreBtn">LEARN MORE</div>
          </div>
          <footer>
            <div className="links">
              <a href="/">github</a>
              <a href="/">instagram</a>
              <a href="/">linkedin</a>
              <a href="/">twitter</a>
              <a href="/">mail</a>
            </div>
            <p>2022 Yago Pajariño</p>
          </footer>
        </div>
        <div id="routerContainer">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
