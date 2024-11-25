import map from "/menobackground.png";
export default function Hero() {
  const handleContextMenu = (e) =>{
    e.preventDefault()
  }
  return (
    <>
      <section id="hero" className="d-flex align-items-center" data-aos="zoom-out">
        <div className="container" data-aos="zoom-out">
          <div className="row">
            <div className="hero-description col-lg-6 d-flex flex-column justify-content-center">
              <h1>Salay Abdul Muhaimin Kanton</h1>
              <p>
                Welcome to my digital studio! I&apos;m a passionate web developer 
                dedicated to crafting exceptional online experiences. With 
                expertise in cutting-edge technologies, I create visually stunning
                and user-friendly websites and apps that drive results. Let&apos;s bring
                your vision to life.
              </p>
              <div className="d-flex justify-content-center justify-content-lg-start">
                <a href="/#apps" className="btn-get-started scrollto">
                  Explore My Work <i className="bi bi-chevron-right"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-6 hero-graph d-flex flex-column align-items-center justify-content-center" data-aos="fade-up" data-aos-delay="200">
              <div className="hero-img-conatiner bg-dg bg-dg-card">
                <img
                  src={map}
                  className="img-fluid"
                  alt="Salay Abdul Muhaimin Kanton Photo"
                  draggable="false"
                  onContextMenu={handleContextMenu}
                />
              </div>
              <div className="bg-dg bg-dg-card social-links">
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
                  href="https://www.wa.me/233535760503/"
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
