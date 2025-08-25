import Backtotop from "../components/Backtotop";
import Expertise from "../components/Expertise";
import Contact from "../components/Contact";
import Resume from "../components/Resume";
import Footer from "../components/Footer";
import About from "../components/About";
import Hero from "../components/Hero";
import Apps from "./Apps";

export default function Home() {
  window.document.title = "Muhaimin Abdul Salay Kanton | Home";
  return (
    <>
      <Hero />
      <About />
      <Resume />
      <Expertise />
      <Apps />
      <Contact />
      <Footer />
      <Backtotop />
    </>
  );
}
