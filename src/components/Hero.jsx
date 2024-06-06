import map from "../assets/images/dotted-map-bg.webp";
export default function Hero() {
  return (
    <>
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="hero-description col-lg-6 d-flex flex-column justify-content-center">
              <h1>Salay Abdul Muhaimin Kanton</h1>
              <p>
                I punctiliously craft websites with expertise and passion. I
                don&apos;t just build websites, I create digital masterpieces
                with innovative web experiences.
              </p>
              <div className="d-flex justify-content-center justify-content-lg-start">
                <a href="#about" className="btn-get-started scrollto">
                  Learn More <i className="bi bi-chevron-right"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-6 hero-graph d-flex flex-column align-items-center justify-content-center">
              <div className="hero-img-conatiner glassm glassm-card">
                <img
                  src={map}
                  className="img-fluid"
                  alt="Salay Abdul Muhaimin Kanton"
                />
              </div>
              <div className="glassm glassm-card social-links">
                <a
                  href="https://www.linkedin.com/in/muhaimin-salay-a653b6299/"
                  className="linkedin"
                  title="LinkedIn Account"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
                <a
                  href="mailto:abdulkanton2005@gmail.com"
                  className="envelope"
                  title="Email Address"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-envelope"></i>
                </a>
                <a
                  href="https://www.github.com/heli-toon"
                  className="github"
                  title="GitHub Profile"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-github"></i>
                </a>
                <a
                  href="https://www.wa.me/233535760503"
                  className="whatsapp"
                  title="WhatsApp Number"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
