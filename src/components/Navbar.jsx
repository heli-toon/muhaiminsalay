import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import Home from "./Home.jsx";
import Showcase from "./Showcase.jsx";
import logo from "../assets/images/logo.webp";
import About from "./About.jsx";

const Navbar = () => {
  const [showNavbarCollapse, setShowNavbarCollapse] = useState(false);
  const navbarRef = useRef(null);

  const handleToggleNavbarCollapse = () => {
    setShowNavbarCollapse(!showNavbarCollapse);
  };

  const handleWindowScroll = () => {
    if (window.scrollY > 25) {
      navbarRef.current.classList.add("glassm");
    } else {
      navbarRef.current.classList.remove("glassm");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleWindowScroll);
    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, []);

  return (
    <>
      <BrowserRouter>
        <nav
          id="navbar"
          className="navbar navbar-expand-lg navbar-dark fixed-top"
          ref={navbarRef}
        >
          <Link
            element="true"
            className="navbar-brand justify-content-center logo d-flex flex-row"
            to="/"
            title="Portfolio Home"
          >
            <img src={logo} width={70} height={35} alt="Muhaimin Salay Logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleToggleNavbarCollapse}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${
              showNavbarCollapse ? "show" : ""
            }`}
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/" element="true">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/showcase" element="true">
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/showcase" element={<Showcase />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Navbar;
