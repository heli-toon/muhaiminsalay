import { useState, useEffect } from "react";
import "./assets/bootstrap-icons.min.css";
import "./assets/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Preloader from "./components/Preloader";

export default function App() {
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