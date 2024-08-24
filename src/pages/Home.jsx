import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import Backtotop from "../components/Backtotop";
import Expertise from "../components/Expertise";
import Resume from "../components/Resume";

export default function Home() {
  window.document.title = "Muhaimin Abdul Salay Kanton | Home";
  return (
    <>
      <Hero />
      <About />
      <Resume />
      <Expertise />
      <Portfolio />
      <Contact />
      <Footer />
      <Backtotop />
    </>
  );
}
