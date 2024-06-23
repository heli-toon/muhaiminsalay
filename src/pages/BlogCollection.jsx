import Footer from "../components/Footer";
import verba from "../assets/images/verba.png"

export default function BlogCollection() {
  window.document.title = "Blog | Muhaimin Abdul Salay Kanton";
  return (
    <>
      <section id="recent-blog-posts" className="recent-blog-posts">
        <div className="container">
          <div className="section-header">
            <div className="section-title">
              <h2>Blog</h2>
              <span className="line-bar">...</span>
            </div>
            <p>Recent posts form my Blog</p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 my-4">
              <div className="post-box glassm">
                <div className="post-img">
                  <img src={verba} className="img-fluid" alt="" />
                </div>
                <div className="meta">
                  <i className="bi bi-clock mx-1"></i>
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
                <a href="/blog/" className="readmore btn-get-started">
                  <span>Read More</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 my-4">
              <div className="post-box glassm">
                <div className="post-img">
                  <img
                    src={verba}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="meta">
                  <i className="bi bi-clock mx-1"></i>
                  <span className="post-date">Mon, June 24</span>
                </div>
                <h3 className="post-title">
                  Et repellendus molestiae qui est sed omnis voluptates magnam
                </h3>
                <p>
                  Voluptatem nesciunt omnis libero autem tempora enim ut ipsam
                  id. Odit quia ab eum assumenda. Quisquam omnis aliquid
                  necessitatibus tempora...
                </p>
                <a href="/blog/" className="readmore btn-get-started">
                  <span>Read More</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 my-4">
              <div className="post-box glassm">
                <div className="post-img">
                  <img
                    src={verba}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="meta">
                  <i className="bi bi-clock mx-1"></i>
                  <span className="post-date">Sun, June 30</span>
                </div>
                <h3 className="post-title">
                  Quia assumenda est et veritatis aut quae
                </h3>
                <p>
                  Quia nam eaque omnis explicabo similique eum quaerat similique
                  laboriosam. Quis omnis repellat sed quae consectetur magnam
                  veritatis...
                </p>
                <a href="/blog/" className="readmore btn-get-started">
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
