import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

import Footer from "../components/Footer";
import Backtotop from "../components/Backtotop";
import Preloader from "../components/Preloader";

export default function BlogCollection() {
  window.document.title = "Muhaimin Abdul Salay Kanton | Blog";

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "blogs"));
        const blogsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBlogs(blogsData);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const stripHtml = (html) => {
    const tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };
  const getBlogPreview = (content) => {
    const strippedContent = stripHtml(content);
    const maxLength = 250; // Adjust this value based on how much preview wanted
    const startIndex = 22;
    const previewContent = strippedContent.length > startIndex
      ? strippedContent.substring(startIndex, startIndex + maxLength) + "..."
      : strippedContent;
    return previewContent;
  };
  if (loading) {
    return <Preloader />;
  }
  return (
    <>
      <section id="recent-blog-posts" className="recent-blog-posts">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <div className="section-title">
              <h2>Blog</h2>
              <span className="line-bar">...</span>
            </div>
            <p>Explore my vast library of blog posts, covering a wide range of topics and themes in IT. My articles are to educate, inform, spark new ideas &amp; demystify trends. Welcome to my world.</p>
          </div>
          <div className="row">
            {blogs.map((blog, index) => (
              <div key={blog.slug} className="col-lg-4 col-md-6 my-4" data-aos="fade-up" data-aos-delay={`${100 * (index + 1)}`}>
                <div className="post-box bg-dg">
                  <div className="post-img">
                    <img src={blog.imageURL} className="img-fluid" alt={blog.imageDesc || blog.title} />
                  </div>
                  <div className="meta d-flex align-items-center">
                    <div className="meta-date">
                      <i className="bi bi-calendar mx-1"></i>
                      <span className="post-date">{new Date(blog.createdAt.seconds * 1000).toDateString()}</span>
                    </div>
                    <div className="meta-time">
                      <i className="bi bi-clock mx-1"></i>
                      <span className="post-date">{blog.readTime} min read</span>
                    </div>
                  </div>
                  <h3 className="post-title">{blog.title}</h3>
                  <p>{getBlogPreview(blog.content)}</p>
                  <a href={`/blog/${blog.slug}/`} className="readmore btn-get-started">
                    <span>Read More</span>
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <Backtotop />
    </>
  );
}
