import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import Apps from "../pages/Apps.jsx";
import Home from "../pages/Home.jsx";
import Login from "../pages/Login.jsx";
import BlogEdit from "../pages/BlogEdit.jsx";
import ErrorPage from "../pages/Error404.jsx";
import logo from "../assets/images/logo.webp";
import PrivateRoute from "./PrivateRoutes.jsx";
import BlogDetails from "../pages/BlogDetails.jsx";
import BlogCollection from "../pages/BlogCollection.jsx";
import { AuthProvider } from "../context/AuthContext.jsx";

const Navbar = () => {
  const [showNavbarCollapse, setShowNavbarCollapse] = useState(false);
  const navbarRef = useRef(null);
  const navbarIconRef = useRef(null);

  const handleToggleNavbarCollapse = () => {
    setShowNavbarCollapse(!showNavbarCollapse);
  };

  const handleWindowScroll = () => {
    if (window.scrollY > 25) {
      navbarRef.current.classList.add("bg-dg");
    } else {
      navbarRef.current.classList.remove("bg-dg");
    }
  };

  const closeMobileNavbar = () => {
    if (showNavbarCollapse) {
      setShowNavbarCollapse(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleWindowScroll);
    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, []);

  useEffect(() => {
    if (showNavbarCollapse) {
      navbarIconRef.current.classList.add("bi-x");
    } else {
      navbarIconRef.current.classList.remove("bi-x");
    }
  }, [showNavbarCollapse]);

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
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<BlogCollection />} />
            <Route path="#apps" element={<Apps />} />
            <Route path="/blog/:slug" element={<BlogDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/edit/:slug" element={<PrivateRoute><BlogEdit /></PrivateRoute>} />
            <Route path="/add" element={<PrivateRoute><BlogEdit /></PrivateRoute>} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
};

export default Navbar;
