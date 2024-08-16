function Expertise() {
  return (
    <>
      <section className='services' id='services'>
        <div className="container">
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
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="icon-box bg-dg bg-dg-card">
                  <div className="icon"><i className="bi bi-code-slash"></i></div>
                  <h4><a href="">Web Development</a></h4>
                  <p>From concept to launch, I design and develop custom websites tailored to your needs.</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                <div className="icon-box bg-dg bg-dg-card">
                  <div className="icon"><i className="bi bi-paint-bucket"></i></div>
                  <h4><a href="">Frontend Website Redesigns</a></h4>
                  <p>Breathe new life into your existing website with a modern, user-friendly redesign to boost your online presence.</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                <div className="icon-box bg-dg bg-dg-card">
                  <div className="icon"><i className="bi bi-controller"></i></div>
                  <h4><a href="">Simple Web Apps & Games</a></h4>
                  <p>Create engaging, robust, interactive web games & applications for entertainment or marketing purposes.</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                <div className="icon-box bg-dg bg-dg-card">
                  <div className="icon"><i className="bi bi-images"></i></div>
                  <h4><a href="">Showcase & Landing Pages</a></h4>
                  <p>Showcase your products, services, or art with conversion-driven landing pages to boost your marketing efforts.</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                <div className="icon-box bg-dg bg-dg-card">
                  <div className="icon"><i className="bi bi-person-lines-fill"></i></div>
                  <h4><a href="">CRM Tools</a></h4>
                  <p>Streamline customer relationships with offline / online custom Customer Relationship Management solutions.</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                <div className="icon-box bg-dg bg-dg-card">
                  <div className="icon"><i className="bi bi-server"></i></div>
                  <h4><a href="">Django Backend</a></h4>
                  <p>Leverage the power of Django to build robust, scalable backend solutions that drive buisness growth and innovation.</p>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Expertise