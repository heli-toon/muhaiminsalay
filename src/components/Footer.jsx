import logo from "../assets/images/logo.webp";

export default function Footer() {
  return (
    <>
      <footer id="footer" className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-5 col-md-12 footer-info">
                <a href="/" className="logo d-flex align-items-center">
                  <img
                    src={logo}
                    width={70}
                    height={35}
                    alt="Muhaimin Salay Logo"
                  />
                </a>
                <p>
                  Ideas brought to life, with every line of code, every collabration, 
                  every desicion to create something truly remarkable.
                </p>
                <div className="social-links mt-3">
                  <a
                    href="https://x.com/SalayAbdul"
                    className="twitter"
                    title="Twitter Account"
                    target="_blank"
                  >
                    <i className="bi bi-twitter-x"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61552612385341&mibextid=ZbWKwL"
                    className="facebook"
                    title="Facebook Page"
                    target="_blank"
                  >
                    <i className="bi bi-facebook"></i>
                  </a>
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
                    href="https://www.instagram.com/heli.toon/"
                    className="instagram"
                    title="Instagram Page"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a
                    href="https://www.github.com/heli-toon/"
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
                  <a
                    href="mailto:abdulkanton2005@gmail.com"
                    className="envelope"
                    title="Email Address"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bi bi-envelope"></i>
                  </a>
                </div>
              </div>

              <div className="col-lg-2 col-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <a href="/#about">About Me</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <a href="/#portfolio">Portfolio</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <a href="/apps">Apps</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <a href="/blog">Blog</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-2 col-6 footer-links">
                <h4>Services</h4>
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <a href="/apps">Desktop Apps</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <a href="/apps">Web Apps</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <a href="/apps">Websites</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <a href="/apps">APIs</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                <h4>Contact Me</h4>
                <p>
                  Accra,
                  <br />
                  Ghana <br /><br />
                  <strong>Phone: </strong>
                  <a href="tel:+233535760503" className="contlink">
                    +233 53 576 0503
                  </a><br />
                  <strong>Email: </strong>
                  <a href="mailto:abdulkanton2005@gmail.com" className="contlink">
                    abdulkanton2005@gmail.com
                  </a>
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>Salay Kanton</span>
            </strong> {" "}
            2024. All Rights Reserved
          </div>
          <div className="credits">
            Designed by {" "}
            <a href="/" target="_blank">
              SALAY
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}