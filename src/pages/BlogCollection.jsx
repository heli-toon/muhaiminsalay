import Footer from "../components/Footer";
import verba from "../assets/images/verba.png"

export default function BlogCollection() {
  return (
    <>
      <section id="recent-blog-posts" className="recent-blog-posts">
        <div className="container">
          <div className="section-header">
            <h2>Blog</h2>
            <p>Recent posts form my Blog</p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="post-box glassm">
                <div className="post-img">
                  <img src={verba} className="img-fluid" alt="" />
                </div>
                <div className="meta">
                  <span className="post-date">Tue, December 12</span>
                </div>
                <h3 className="post-title">
                  Eum ad dolor et. Autem aut fugiat debitis voluptatem
                  consequuntur sit
                </h3>
                <p>
                  Illum voluptas ab enim placeat. Adipisci enim velit nulla. Vel
                  omnis laudantium. Asperiores eum ipsa est officiis. Modi
                  cupiditate exercitationem qui magni est...
                </p>
                <a href="blog-details.html" className="readmore btn-get-started">
                  <span>Read More</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="post-box glassm">
                <div className="post-img">
                  <img
                    src={verba}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="meta">
                  <span className="post-date">Fri, September 05</span>
                </div>
                <h3 className="post-title">
                  Et repellendus molestiae qui est sed omnis voluptates magnam
                </h3>
                <p>
                  Voluptatem nesciunt omnis libero autem tempora enim ut ipsam
                  id. Odit quia ab eum assumenda. Quisquam omnis aliquid
                  necessitatibus tempora...
                </p>
                <a href="blog-details.html" className="readmore btn-get-started">
                  <span>Read More</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="post-box glassm">
                <div className="post-img">
                  <img
                    src={verba}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="meta">
                  <span className="post-date">Tue, July 27</span>
                </div>
                <h3 className="post-title">
                  Quia assumenda est et veritatis aut quae
                </h3>
                <p>
                  Quia nam eaque omnis explicabo similique eum quaerat similique
                  laboriosam. Quis omnis repellat sed quae consectetur magnam
                  veritatis...
                </p>
                <a href="blog-details.html" className="readmore btn-get-started">
                  <span>Read More</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
