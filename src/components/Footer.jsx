import logo from "../assets/images/logo.webp";

export default function Footer() {
    return (
    <>
      <footer id="footer" className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-5 col-md-12 footer-info">
                <a href="index.html" className="logo d-flex align-items-center">
                  <img src={logo} alt="Muhaimin Salay Logo"/>
                  {/* <span>Salay Kanton</span> */}
                </a>
                <p>
                  Transforming ideas into innovative web experiences. Turning ideas to reality.
                </p>
                <div className="social-links mt-3">
                  <a href="#" className="twitter" title="Twitter Account" target="_blank"><i className="bi bi-twitter-x"></i></a>
                  <a href="#" className="facebook"title="Facebook Page" target="_blank"><i className="bi bi-facebook"></i></a>
                  <a href="https://www.linkedin.com/in/muhaimin-salay-a653b6299/" className="linkedin"title="LinkedIn Account" target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i></a>
                  <a href="https://www.instagram.com/heli.toon" className="instagram"title="Instagram Page" target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i></a>
                  <a href="https://www.github.com/heli-toon" className="github"title="GitHub Profile" target="_blank" rel="noreferrer"><i className="bi bi-github"></i></a>
                  <a href="https://www.wa.me/233535760503" className="whatsapp"title="WhatsApp Number" target="_blank" rel="noreferrer"><i className="bi bi-whatsapp"></i></a>
                  <a href="mailto:helitoon@outlook.com" className="envelope"title="Email Address" target="_blank" rel="noreferrer"><i className="bi bi-envelope"></i></a>
                </div>
              </div>
  
              <div className="col-lg-2 col-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i> <a href="/#about">About Me</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <a href="/#portfolio">Portfolio</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <a href="/#">Blog</a>
                  </li>
                </ul>
              </div>
  
              <div className="col-lg-2 col-6 footer-links">
                <h4>Services</h4>
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i> 
                    <a href="/#">Web Apps</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <a href="/#">Websites</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <a href="/#">Extensions</a>
                  </li>
                </ul>
              </div>
  
              <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                <h4>Contact Me</h4>
                <p>
                  Accra, GH 0000<br />
                  Ghana <br />
                  <strong>Phone: </strong><a href="tel:+233535760503" className="contlink">+233 53 576 0503</a> <br />
                  <strong>Email: </strong><a href="mailto:helitoon@outlook.com" className="contlink">helitoon@outlook.com</a><br />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            &copy; Copyright <strong><span>Salay Kanton</span></strong> 2023. All Rights Reserved
          </div>
          <div className="credits">
            Designed by <a href="#" target="_blank">SALAY</a>
          </div>
        </div>
      </footer>
    </>
    );
}