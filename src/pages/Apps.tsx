import { useEffect, useState } from "react";
import AppCard from "../components/AppCard";
import WebCard from "../components/WebCard";

type AppType = {
  title: string;
  status: string;
  icon: string;
  size: string;
  downloads: { [platform: string]: string[] };
  description: string;
};

type WebType = {
  title: string;
  status: string;
  icon: string;
  downloads: { [platform: string]: string[] };
  description: string;
};

const Apps = () => {
  // window.document.title = "Applications | Muhaimin Abdul Salay Kanton";
  // window.document
  //   .querySelector('meta[name="description"]')
  //   .setAttribute(
  //     "content",
  //     "Discover all of Muhaimin's projects & creations. Download and experience innovation."
  //   );
  const [data, setData] = useState<AppType[]>([]);
  const [data2, setData2] = useState<WebType[]>([]);

  useEffect(() => {
    fetch("apps.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  useEffect(() => {
    fetch("web.json")
      .then((response) => response.json())
      .then((data) => setData2(data));
  }, []);

  return (
    <>
      <section className="app-projects" id="apps">
        <div className="container">
          <header className="section-header">
            <div className="section-title text-center">
              <h2>Apps</h2>
              <span className="line-bar">...</span>
            </div>
            <p className="text-center">
              Explore my app portfolio, featuring a range of desktop, mobile and
              browser extension projects. From completed solutions to ongoing
              endeavours, I showcase my passion for innovative software
              development. Browse through my projects to see my skills in
              action!
            </p>
          </header>
        </div>
        <div className="container">
          <div className="row apps-container">
            {data.map((app) => (
              <AppCard key={app.title} app={app} />
            ))}
          </div>
        </div>
      </section>
      <section className="app-projects">
        <div className="container">
          <header className="section-header">
            <div className="section-title text-center">
              <h2>Websites</h2>
              <span className="line-bar">...</span>
            </div>
            <p className="text-center">
              Explore my website portfolio, featuring a range of landing pages,
              portfolio websites and simple e-commerce solution projects. 
            </p>
          </header>
        </div>
        <div className="container">
          <div className="row apps-container">
            {data2.map((web) => (
              <WebCard key={web.title} web={web} />
            ))}
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
};

export default Apps;
