import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Preloader from "./components/Preloader";
import AOS from 'aos'

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
    }, 0);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Navbar />
        </>
      )}
    </>
  );
}