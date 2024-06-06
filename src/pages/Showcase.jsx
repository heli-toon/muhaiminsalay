import jayshoecare from "../assets/images/jayshoecare.png";
import verba from "../assets/images/verba.png"
import Footer from "../components/Footer";
export default function Showcase() {
  return (
    <>
      <section className="portfolio-detail">
        <div className="container">
          <header className="section-header">
            <div className="section-title">
              <h1>Portfolio</h1>
              <span className="line-bar">...</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
              quis sit tempora, ducimus quas labore dolor, error maxime nisi
              eius similique vero! Similique id deleniti nam odit hic blanditiis
              aspernatur.
            </p>
          </header>
        </div>
      </section>
      <section id="websites" className="portfolio-websites">
        <div className="container d-flex align-items-center flex-column">
          <div className="section-title">
            <h2>Websites</h2>
            <span className="line-bar">...</span>
          </div>
          <div className="project-item d-flex justify-content-center align-items-center flex-column">
            <div className="project-img glassm card">
              <a href="https://jayshoecare.netlify.app" target="_blank" rel="noreferrer">
                <img
                  src={jayshoecare}
                  className="card"
                  alt="Jayshoecare Website"
                />
              </a>
            </div>
            <div className="project-detail glassm card">
              <div className="project-info">
                <h3>Jay&apos;s Shoecare</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </div>
              <div className="project-tagsnbtns d-flex">
                <div className="project-tags">
                  <span className="tag htmlcssjs">HTML+CSS+JS</span>
                </div>
                <div className="project-btns">
                  <a href="https://jayshoecare.netlify.app" target="_blank" rel="noreferrer">
                    <i className="bi-eye-fill"></i> View
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="webapps" className="portfolio-webapps">
        <div className="container d-flex align-items-center flex-column">
          <div className="section-title">
            <h2>Web Apps</h2>
            <span className="line-bar">...</span>
          </div>
          <div className="project-item d-flex justify-content-center align-items-center flex-column">
            <div className="project-img glassm card">
              <a href="https://verba.netlify.app" target="_blank" rel="noreferrer">
                <img
                  src={verba}
                  className="card verba"
                  alt="Verba Dictionary"
                />
              </a>
            </div>
            <div className="project-detail glassm card">
              <div className="project-info">
                <h3>Verba</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </div>
              <div className="project-tagsnbtns d-flex">
                <div className="project-tags">
                  <span className="tag htmlcssjs">React</span>
                </div>
                <div className="project-btns">
                  <a href="https://verba.netlify.app" target="_blank" rel="noreferrer">
                    <i className="bi-eye-fill"></i> View
                  </a>
                  <a href="https://github.com/heli-toon/verba" target="_blank" rel="noreferrer">
                    <i className="bi-link-45deg"></i> Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="other" className="portfolio-other">
        <div className="container d-flex align-items-center flex-column">
          <div className="section-title">
            <h2>Other Projects</h2>
            <span className="line-bar">...</span>
          </div>
          <div className="project-item d-flex justify-content-center align-items-center flex-column">
            <div className="project-detail glassm card">
              <div className="project-info">
                <h3>QR Code API</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </div>
              <div className="project-tagsnbtns d-flex">
                <div className="project-tags">
                  <span className="tag htmlcssjs">Flask</span>
                </div>
                <div className="project-btns">
                  <a href="https://github.com/heli-toon/qrcode-api" target="_blank" rel="noreferrer">
                    <i className="bi-link-45deg"></i> Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
