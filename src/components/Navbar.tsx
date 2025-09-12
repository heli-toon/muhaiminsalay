import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [showNavbarCollapse, setShowNavbarCollapse] = useState(false);
  const navbarRef = useRef<HTMLElement | null>(null);
  const navbarIconRef = useRef<HTMLElement | null>(null);

  const handleToggleNavbarCollapse = () => {
    setShowNavbarCollapse(!showNavbarCollapse);
  };

  const handleWindowScroll = () => {
    if (navbarRef.current) {
      if (window.scrollY > 25) {
        navbarRef.current.classList.add("bg-dg");
      } else {
        navbarRef.current.classList.remove("bg-dg");
      }
    }
  };

  const closeMobileNavbar = () => {
    if (showNavbarCollapse) setShowNavbarCollapse(false)
  };

  useEffect(() => {
    window.addEventListener("scroll", handleWindowScroll);
    return () => {window.removeEventListener("scroll", handleWindowScroll);};
  }, []);
  
  useEffect(() => {
    if (navbarIconRef.current) {
      if (showNavbarCollapse) {
        navbarIconRef.current.classList.add("bi-x");
      } else {
        navbarIconRef.current.classList.remove("bi-x");
      }
    }
  }, [showNavbarCollapse]);

  return (
    <header id="header" className="fixed-top" ref={navbarRef}>
      <div className="header-wrapper container d-flex align-items-center justify-content-lg-between space-between">
        <div className="d-flex flex-row align-items-center justify-content-center">
          <Link className="logo me-auto me-lg-0" title="Home" to="/">
            <img src={"/images/logo.webp"} width="48" height="48" className="img-fluid" alt="Muhaimin Salay Logo" />
          </Link>
        </div>
        <nav id="navbar" className={`navbar order-last order-lg-0 ${showNavbarCollapse ? "navbar-mobile" : ""}`}>
          <ul>
            <li className="nav-item active">
              <Link className="nav-link" to="/" onClick={closeMobileNavbar}> Home </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#about" onClick={closeMobileNavbar}> About </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#apps" onClick={closeMobileNavbar}> Apps </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/skills" onClick={closeMobileNavbar}> Skills </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog" onClick={closeMobileNavbar}> Blog </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#contact" onClick={closeMobileNavbar}> Contact </a>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle" ref={navbarIconRef} onClick={handleToggleNavbarCollapse}></i>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
