import { useState, useEffect } from "react";
import { HashRouter, Routes, Route } from 'react-router-dom'
import AOS from 'aos'

import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar.tsx"
import Home from "./pages/Home.tsx"
import BlogCollection from './pages/BlogCollection.tsx'
import BlogDetails from './pages/BlogDetails.tsx'
import Skills from './pages/Skills.tsx'
import Login from './pages/Login.tsx'
import BlogEdit from './pages/BlogEdit.tsx'
import ErrorPage from './pages/Error404.tsx'
import PrivateRoute from './components/PrivateRoutes.tsx'
import { AuthProvider } from './context/AuthContext.tsx'

import "bootstrap-icons/font/bootstrap-icons.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'aos/dist/aos.css'
import "./App.css";

export default function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <HashRouter>
          <AuthProvider>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/blog" element={<BlogCollection />} />
              <Route path="/blog/:slug" element={<BlogDetails />} />
              <Route path="/login" element={<Login />} />
              <Route path="/add" element={<PrivateRoute><BlogEdit /></PrivateRoute>} />
              <Route path="/edit/:slug" element={<PrivateRoute><BlogEdit /></PrivateRoute>} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </AuthProvider>
        </HashRouter>
      )}
    </>
  );
}