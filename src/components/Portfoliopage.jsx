import Navbar from "./Navbar";
import Footer from "./Footer";
export default function Portfoliopage() {
  return (
    <>
      <Navbar />
      <section className="portfolio-detail">
        <div className="container">
          <header className="section-header">
            <div className="section-title">
              <h2>Portfolio</h2>
              <span className="line-bar">...</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
              quis sit tempora, ducimus quas labore dolor, error maxime nisi
              eius similique vero! Similique id deleniti nam odit hic blanditiis
              aspernatur.
            </p>
          </header>
        </div>
      </section>
      <Footer />
    </>
  );
}
