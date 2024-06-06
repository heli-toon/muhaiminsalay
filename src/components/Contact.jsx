export default function Contact() {
  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          <header className="section-header">
            <div className="section-title">
              <h2>Contacts</h2>
              <span className="line-bar">...</span>
            </div>
            <p>
              I have a proven track record of delivering high-quality results
              that exceed expectations. I&apos;m always up for a new challenge
              Have any questions or feedback? I&apos;d love to hear from you!
              Get in touch with via email at{" "}
              <a href="mailto:abdulkanton2005@gmail.com" className="paralink">
                
              </a>{" "}
              or call me at{" "}
              <a href="tel:+233535760503" className="paralink">
                +233-53-576-0503
              </a>
              . Alternatively, you can fill out the contact form below.
            </p>
          </header>
          <div className="row gy-4">
            <div className="col-lg-6">
              <div className="row gy-4">
                <div className="col-md-6">
                  <div className="info-box glassm glassm-card">
                    <i className="bi bi-geo-alt"></i>
                    <h3>Address</h3>
                    <p>Accra, Ghana</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-box glassm glassm-card">
                    <i className="bi bi-telephone"></i>
                    <h3>Call</h3>
                    <p>
                      <a href="tel:+233535760503" className="paralink2">
                        +233 53 576 0503
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-box glassm glassm-card">
                    <i className="bi bi-envelope"></i>
                    <h3>Email</h3>
                    <p>
                      <a
                        href="mailto:abdulkanton2005@gmail.com"
                        className="paralink2"
                      >
                        helitoon@outlook.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-box glassm glassm-card">
                    <i className="bi bi-clock"></i>
                    <h3>Open At</h3>
                    <p>Monday - Friday</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <form className="email-form glassm glassm-card">
                <div className="row gy-4">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="col-md-6 ">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div className="col-md-12">
                    <textarea
                      className="form-control"
                      name="message"
                      rows="6"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>
                  <div className="col-md-12 text-center">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                    <button type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
