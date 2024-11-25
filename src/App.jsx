import { useState, useEffect } from "react";
import "./assets/bootstrap-icons.min.css";
import "./assets/bootstrap.min.css";
import 'aos/dist/aos.css'
import AOS from 'aos'
import "./App.css";
import Navbar from "./components/Navbar";
import Preloader from "./components/Preloader";


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