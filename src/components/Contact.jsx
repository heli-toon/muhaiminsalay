import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <>
      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
          <header className="section-header">
            <div className="section-title">
              <h2>Contacts</h2>
              <span className="line-bar">...</span>
            </div>
            <p>
              I have a proven track record of delivering high-quality results
              that always exceed expectations. I&apos;m always up for a new challenge
              Have any questions or feedback? I&apos;d love to hear from you!
              Get in touch with via email at{" "}
              <a href="mailto:abdulkanton2005@gmail.com" className="paralink">
                abdulkanton2005@gmail.com
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
                <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                  <div className="info-box bg-dg bg-dg-card">
                    <i className="bi bi-geo-alt"></i>
                    <h3>Address</h3>
                    <p>Accra, Ghana</p>
                  </div>
                </div>
                <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                  <div className="info-box bg-dg bg-dg-card">
                    <i className="bi bi-telephone"></i>
                    <h3>Call</h3>
                    <p>
                      <a href="tel:+233535760503" className="paralink2">
                        +233 53 576 0503
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                  <div className="info-box bg-dg bg-dg-card">
                    <i className="bi bi-envelope"></i>
                    <h3>Email</h3>
                    <p>
                      <a href="mailto:abdulkanton2005@gmail.com" className="paralink2 small">
                        abdulkanton2005@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                  <div className="info-box bg-dg bg-dg-card">
                    <i className="bi bi-clock"></i>
                    <h3>Freelance</h3>
                    <p>Unavailable</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
