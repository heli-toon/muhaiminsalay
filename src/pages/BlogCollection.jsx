import Footer from "../components/Footer";
import Backtotop from "../components/Backtotop";
import verba from "../assets/images/verba.png"

export default function BlogCollection() {
  window.document.title = "Blog | Muhaimin Abdul Salay Kanton";
  window.document.querySelector('meta[name="description"]').setAttribute('content', "Dive into my thoughts on software development and more. Read my latest articles, insights, and musings on my blog")
  return (
    <>
      <section id="recent-blog-posts" className="recent-blog-posts">
        <div className="container">
          <div className="section-header">
            <div className="section-title">
              <h2>Blog</h2>
              <span className="line-bar">...</span>
            </div>
            <p>Explore my vast library of blog posts, covering a wide range of topics and themes in IT. My articles are to educate, inform, spark new ideas &amp; demystifying trends. Welcome to my world</p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 my-4">
              <div className="post-box glassm">
                <div className="post-img">
                  <img src={verba} className="img-fluid" alt="" />
                </div>
                <div className="meta d-flex align-items-center">
                  <div className="meta-date">
                    <i className="bi bi-calendar mx-1"></i>
                    <span className="post-date">Tue, June 25, 2024</span>
                  </div>
                  <div className="meta-time">
                    <i className="bi bi-clock mx-1"></i>
                    <span className="post-date">2.1 min read</span>
                  </div>
                </div>
                <h3 className="post-title">
                  Coding vs Programming: Unraveling the Mysteries of Software Development
                </h3>
                <p>
                  In the world of software development, two terms are often used interchangeably: coding and programming. 
                  While they are related, they have distinct differences...
                </p>
                <a href="/blog/0/" className="readmore btn-get-started">
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
                <div className="meta d-flex align-items-center">
                  <div className="meta-date">
                      <i className="bi bi-calendar mx-1"></i>
                      <span className="post-date">Tue, June 25, 2024</span>
                    </div>
                    <div className="meta-time">
                      <i className="bi bi-clock mx-1"></i>
                      <span className="post-date">2.5 min read</span>
                  </div>
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
                <div className="meta d-flex align-items-center">
                  <div className="meta-date">
                      <i className="bi bi-calendar mx-1"></i>
                      <span className="post-date">Tue, June 25, 2024</span>
                    </div>
                    <div className="meta-time">
                      <i className="bi bi-clock mx-1"></i>
                      <span className="post-date">2.5 min read</span>
                  </div>
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
      <Backtotop />
    </>
  );
}
