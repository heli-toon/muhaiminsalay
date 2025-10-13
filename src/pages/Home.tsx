import { salayverseApps } from "../data/salayverseApps";
import Expertise from "../components/Expertise";
import Contact from "../components/Contact";
import Resume from "../components/Resume";
import About from "../components/About";
import Hero from "../components/Hero";
import Apps from "../components/Apps";
import RecentBlogPosts from "../components/RecentBlogs";

export default function Home() {
  window.document.title = "Muhaimin Abdul Salay Kanton | Home";
  return (
    <>
      <Hero />
      <About />
      <Resume />
      <Expertise />
      <Apps apps={salayverseApps} maxItems={6} />
      <RecentBlogPosts maxPosts={3} />
      <Contact />
    </>
  );
}
