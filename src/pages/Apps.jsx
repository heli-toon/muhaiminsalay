import React from "react";
import AppCard from "../components/AppCard";
import Footer from "../components/Footer";
import WebCard from "../components/WebCard";

const Apps = () => {
  window.document.title = "Applications | Muhaimin Abdul Salay Kanton";
  window.document.querySelector('meta[name="description"]').setAttribute('content', "Discover all of Muhaimin's projects & creations. Download and experience innovation.")
  const [data, setData] = React.useState([]);
  const [data2, setData2] = React.useState([]);

  React.useEffect(() => {
    fetch("apps.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  React.useEffect(() => {
    fetch("web.json")
      .then((response) => response.json())
      .then((data) => setData2(data));
  }, []);

  return (
    <>
      <section className="apps">
        <div className="container">
          <header className="section-header">
            <div className="section-title">
              <h1>Apps</h1>
              <span className="line-bar">...</span>
            </div>
            <p>
              Explore my app portfolio, featuring a range of desktop, mobile and
              browser extension projects. From completed solutions to ongoing 
              endeavours, I showcase my passion for innovative software development. 
              Browse through my projects to see my skills in action!
            </p>
          </header>
        </div>
      </section>
      <section className="app-projects">
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
            <div className="section-title">
              <h1>Websites</h1>
              <span className="line-bar">...</span>
            </div>
            <p>
              Explore my app portfolio, featuring a range of desktop, mobile and
              browser extension projects. From completed solutions to ongoing 
              endeavours, I showcase my passion for innovative software development. 
              Browse through my projects to see my skills in action!
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
      <Footer />
    </>
  );
};

export default Apps;
