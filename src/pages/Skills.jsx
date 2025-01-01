import Footer from "../components/Footer";

export default function Skills() {
  return (
    <>
      <section className="skills">
        <div className="container">
          <div className="section-header">
            <div className="section-title">
              <h2>Skills</h2>
              <span className="line-bar">...</span>
            </div>
            <div className="section-body">
              <h3>Languages</h3>
              <div className="container w-100">
                <div className="row d-flex align-items-center jusitify-content-center">
                  <div className="col-md-2 col-sm-3 col-xs-6">
                    <img src="./skills/python.svg" alt="" className="img-fluid w-50" />
                  </div>
                  <div className="col-md-2 col-sm-3 col-xs-6">
                    <img src="./skills/javascript.svg" alt="" className="img-fluid w-50" />
                  </div>
                  <div className="col-md-2 col-sm-3 col-xs-6">
                    <img src="./skills/html.svg" alt="" className="img-fluid w-50" />
                  </div>
                  <div className="col-md-2 col-sm-3 col-xs-6">
                    <img src="./skills/css.svg" alt="" className="img-fluid w-50" />
                  </div>
                </div>
              </div>
            </div>
            <div className="section-body">
              <h3>Frameworks and Libraries</h3>
              <div className="skill-box">
                
              </div>
            </div>
            <div className="section-body">
              <h3>Tooling & Others</h3>
              <div className="skill-box">
                
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
