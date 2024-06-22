import React from "react";
import AppCard from "../components/AppCard";
import Footer from "../components/Footer";

const Apps = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("apps.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <section className="apps">
        <div className="container">
          <header className="section-header">
            <div className="section-title">
              <h1>Apps</h1>
              <span class="line-bar">...</span>
            </div>
            <p>
              Explore my app portfolio, featuring a range of desktop, mobile and
              browser extension projects. From completed endeavours, I showcase
              my passion for innovative software development. Browse through my
              projects to see my skills in action!
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
      <Footer />
    </>
  );
};

export default Apps;
