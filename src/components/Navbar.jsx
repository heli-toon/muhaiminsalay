import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import Home from "../pages/Home.jsx";
import logo from "../assets/images/logo.webp";
import BlogCollection from "../pages/BlogCollection.jsx";
import Apps from "../pages/Apps.jsx";
import Blog0 from "../pages/blogs/Blog0.jsx";
// import Skills from "../pages/Skills.jsx";

const Navbar = () => {
  const [showNavbarCollapse, setShowNavbarCollapse] = useState(false);
  const navbarRef = useRef(null);

  const handleToggleNavbarCollapse = () => {
    setShowNavbarCollapse(!showNavbarCollapse);
  };

  const handleWindowScroll = () => {
    if (window.scrollY > 20) {
      navbarRef.current.classList.add("bg-dg");
    } else {
      navbarRef.current.classList.remove("bg-dg");
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
          <a
            className="navbar-brand justify-content-center logo d-flex flex-row"
            href="/#"
            title="Portfolio Home"
          >
            <img src={logo} width={70} height={35} alt="Muhaimin Salay Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle Navigation"
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
                <a className="nav-link" href="/#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#apps">Apps</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/blog">
                  Blog
                </a>
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
          <Route path="/blog" element={<BlogCollection />} />
          <Route path="#apps" element={<Apps />} />
          {/* <Route path="/skills" element={<Skills />} /> */}
          <Route path="/blog/0" element={<Blog0 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Navbar;
