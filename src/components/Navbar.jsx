import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import Home from "../pages/Home.jsx";
import logo from "../assets/images/logo.webp";
import BlogCollection from "../pages/BlogCollection.jsx";
import Apps from "../pages/Apps.jsx";
import ErrorPage from "../pages/Error404.jsx";
import BlogDetails from "../pages/BlogDetails.jsx";
// import Skills from "../pages/Skills.jsx";

const Navbar = () => {
  const [showNavbarCollapse, setShowNavbarCollapse] = useState(false);
  const navbarRef = useRef(null);
  const navbarIconRef = useRef(null)

  const handleToggleNavbarCollapse = () => {
    setShowNavbarCollapse(!showNavbarCollapse);
    if (showNavbarCollapse == false){
      navbarIconRef.current.classList.add('bi-x')
    }else{
      navbarIconRef.current.classList.remove('bi-x')
    }
  };

  const handleWindowScroll = () => {
    if (window.scrollY > 25) {
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

  useEffect(() => {
    window.addEventListener("scroll", handleWindowScroll);
    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, []);

  return (
    <>
      <BrowserRouter>
        <header id="header" className="fixed-top" ref={navbarRef}>
          <div className="header-wrapper container d-flex align-items-center justify-content-lg-between space-between">
            <div className="d-flex flex-row align-items-center justify-content-center">
              <a className="logo me-auto me-lg-0" title="Home" href="/">
                <img src={logo} width={56} height={56} className="img-fluid" alt="Muhaimin Salay Logo" />
              </a>
            </div>
            <nav id="navbar" className={`navbar order-last order-lg-0 ${showNavbarCollapse ? "navbar-mobile" : ""}`} >
              <ul>
              <li className="nav-item active">
                <Link className="nav-link" to="/#">Home</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#apps">Apps</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#contact">
                  Contact
                </a>
              </li>
              </ul>
              <i className="bi bi-list mobile-nav-toggle" ref={navbarIconRef} onClick={handleToggleNavbarCollapse}></i>
            </nav>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogCollection />} />
          <Route path="#apps" element={<Apps />} />
          {/* <Route path="/skills" element={<Skills />} /> */}
          <Route path="/blog/:slug" element={<BlogDetails />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Navbar;
