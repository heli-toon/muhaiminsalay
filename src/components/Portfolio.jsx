import map from "../assets/images/dotted-map-bg.webp";

export default function Portfolio() {
  return (
    <>
      <section className="portfolio" id="portfolio">
        <div className="container">
          <header className="section-header">
            <div className="section-title">
              <h2>Portfolio</h2>
              <span className="line-bar">...</span>
            </div>
            <p>
              A glimpse into my recent work, showcasing innovative solutions and creative problem-solving. 
              Explore a few of my notable randomly selected projects that demonstrate my expertise in web 
              development, API development &amp; desktop application development.
            </p>
          </header>
          <div className="row">
            <div className="col-lg-12">
              <ul id="portfolio-flters">
                <li data-filter="*" className="filter-active">
                  All
                </li>
                <li data-filter=".filter-app">Desktop Apps</li>
                <li data-filter=".filter-card">Web Apps</li>
                <li data-filter=".filter-web">APIs</li>
              </ul>
            </div>
          </div>

          <div className="row portfolio-container" data-aos="fade-up">
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img
                  src={map}
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-links">
                  <a
                    href={map}
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="App 1"
                  >
                    <i className="bi bi-plus"></i>
                  </a>
                  <a href="portfolio-details.html" title="More Details">
                    <i className="bi bi-link"></i>
                  </a>
                </div>
                <div className="portfolio-info">
                  <h4>App 1</h4>
                  <p>App</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-wrap">
                <img
                  src={map}
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-links">
                  <a
                    href={map}
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Web 3"
                  >
                    <i className="bi bi-plus"></i>
                  </a>
                  <a href="portfolio-details.html" title="More Details">
                    <i className="bi bi-link"></i>
                  </a>
                </div>
                <div className="portfolio-info">
                  <h4>Web 3</h4>
                  <p>Web</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img
                  src={map}
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-links">
                  <a
                    href={map}
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="App 2"
                  >
                    <i className="bi bi-plus"></i>
                  </a>
                  <a href="portfolio-details.html" title="More Details">
                    <i className="bi bi-link"></i>
                  </a>
                </div>
                <div className="portfolio-info">
                  <h4>App 2</h4>
                  <p>App</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div className="portfolio-wrap">
                <img
                  src={map}
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-links">
                  <a
                    href={map}
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Card 2"
                  >
                    <i className="bi bi-plus"></i>
                  </a>
                  <a href="portfolio-details.html" title="More Details">
                    <i className="bi bi-link"></i>
                  </a>
                </div>
                <div className="portfolio-info">
                  <h4>Card 2</h4>
                  <p>Card</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-wrap">
                <img
                  src={map}
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-links">
                  <a
                    href={map}
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Web 2"
                  >
                    <i className="bi bi-plus"></i>
                  </a>
                  <a href="portfolio-details.html" title="More Details">
                    <i className="bi bi-link"></i>
                  </a>
                </div>
                <div className="portfolio-info">
                  <h4>Web 2</h4>
                  <p>Web</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img
                  src={map}
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-links">
                  <a
                    href={map}
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="App 3"
                  >
                    <i className="bi bi-plus"></i>
                  </a>
                  <a href="portfolio-details.html" title="More Details">
                    <i className="bi bi-link"></i>
                  </a>
                </div>
                <div className="portfolio-info">
                  <h4>App 3</h4>
                  <p>App</p>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <a href="/apps" className="btn-get-started" title="See All Apps">
                  See All Apps
                </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
