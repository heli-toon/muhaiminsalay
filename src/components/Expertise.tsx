function Expertise() {
  return (
    <>
      <section className='services' id='services'>
        <div className="container" data-aos="fade-up">
          <header className="section-header">
            <div className="section-title">
              <h2>Expertise</h2>
              <span className="line-bar">...</span>
            </div>
            <p>
              As a versatile web developer, I offer a range of services to help individuals and businesses establish a strong online presence:
            </p>
          </header>
          <div className="row">
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                <div className="icon-box bg-dg bg-dg-card">
                  <div className="icon"><i className="bi bi-code-slash"></i></div>
                  <h4><a href="/#apps">Web Development</a></h4>
                  <p>From concept to launch, I design and develop custom websites tailored to your needs.</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="fade-up" data-aos-delay="100">
                <div className="icon-box bg-dg bg-dg-card">
                  <div className="icon"><i className="bi bi-paint-bucket"></i></div>
                  <h4><a href="/#apps">Frontend Website Redesigns</a></h4>
                  <p>Breathe new life into your existing website with a modern, user-friendly redesign to boost your online presence.</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="200">
                <div className="icon-box bg-dg bg-dg-card">
                  <div className="icon"><i className="bi bi-controller"></i></div>
                  <h4><a href="/#apps">Simple Web Apps & Games</a></h4>
                  <p>Create engaging, robust, interactive web games & applications for entertainment or marketing purposes.</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="fade-up" data-aos-delay="200">
                <div className="icon-box bg-dg bg-dg-card">
                  <div className="icon"><i className="bi bi-images"></i></div>
                  <h4><a href="/#apps">Showcase & Landing Pages</a></h4>
                  <p>Showcase your products, services, or art with conversion-driven landing pages to boost your marketing efforts.</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="fade-up" data-aos-delay="300">
                <div className="icon-box bg-dg bg-dg-card">
                  <div className="icon"><i className="bi bi-person-lines-fill"></i></div>
                  <h4><a href="/#apps">CRM Tools</a></h4>
                  <p>Streamline customer relationships with offline / online custom Customer Relationship Management solutions.</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="fade-up" data-aos-delay="300">
                <div className="icon-box bg-dg bg-dg-card">
                  <div className="icon"><i className="bi bi-server"></i></div>
                  <h4><a href="/#apps">Django & Flask Backend</a></h4>
                  <p>Leverage the power of Django / Flask to build robust, scalable backend solutions that drive buisness growth and innovation.</p>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Expertise