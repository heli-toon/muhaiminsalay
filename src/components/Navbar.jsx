import { useState, useRef, useEffect } from "react";
import logo from "../assets/images/logo.webp";


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
      <nav
        id="navbar"
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        ref={navbarRef}
      >
        <a
          className="navbar-brand justify-content-center logo d-flex flex-row"
          href="#"
          title="Portfolio Home"
        >
          <img src={logo} alt="Muhaimin Salay Logo" />
          {/* h1 > Logo Text */}
        </a>
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
              <a className="nav-link" href="/#hero">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link"  href="/showcase">
                Portfolio
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
    </>
  );
};

export default Navbar;
