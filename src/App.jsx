import { useState, useEffect } from "react";
import "./App.css";
import "./assets/bootstrap.min.css";
import "./assets/bootstrap-icons.min.css";
import Navbar from "./components/Navbar";
import Preloader from "./components/Preloader";
import FadeInAnimation from "./components/FadeInAnimation";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Navbar />
          <FadeInAnimation />
        </>
      )}
    </>
  );
}