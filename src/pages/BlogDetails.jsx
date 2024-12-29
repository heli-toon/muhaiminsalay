import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // For dynamic routing
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase"; // Firestore initialization

import Footer from "../components/Footer";
import Backtotop from "../components/Backtotop";

export default function BlogDetails() {
  const { slug } = useParams(); // Capture the slug from the route
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [paragraphs, setParagraphs] = useState([]);

  useEffect(() => {
    const paraElements = document.querySelectorAll(".paragraph");
    setParagraphs(paraElements);
  }, []);
  
  const handleSearch = (event) => {
    event.preventDefault();
    const textToSearch = searchText.trim();
    if (textToSearch === "") return;

    const pattern = new RegExp(`${textToSearch}`, "gi");

    paragraphs.forEach((para) => {
      const markedText = para.textContent.replace(
        pattern,
        (match) => `<mark>${match}</mark>`
      );
      para.innerHTML = markedText;
    });
  };

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        // Query the Firestore collection for the blog with the matching slug
        const q = query(collection(db, "blogs"), where("slug", "==", slug));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const blogData = querySnapshot.docs[0].data(); // Get the first matching document

          // Convert Firestore timestamp to JavaScript Date object
          blogData.createdAt = blogData.createdAt.toDate();

          setBlog(blogData);
        } else {
          console.error(`Blog with slug "${slug}" not found.`);
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  if (loading) return <p>Loading...</p>;
  if (!blog)
    return (
      <>
        <div className="breadcrumbs bg-dg">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <h2>Blog Not Found</h2>
              <ol>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/blog/">Blog</a>
                </li>
                <li>Blog Not Found</li>
              </ol>
            </div>
          </div>
        </div>
        <section id="blog" className="blog">
          <div className="container">
            Blog not found.
          </div>
        </section>
      </>
    );

  return (
    <>
      <div className="breadcrumbs bg-dg">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>{blog.title}</h2>
            <ol>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/blog/">Blog</a>
              </li>
              <li>{blog.title}</li>
            </ol>
          </div>
        </div>
      </div>
      <section id="blog" className="blog">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-8">
              <article
                className="blog-details bg-dg"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="post-img">
                  <img
                    src={blog.imageURL}
                    alt="Coders Coding AI Generated Image"
                    className="img-fluid"
                  />
                </div>
                <h2 className="title">
                  {blog.title}
                </h2>
                <div className="meta-top">
                  <ul>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-calendar"></i>{" "}
                      <a href="blog-details.html">
                        <time dateTime={blog.createdAt.toISOString()}>{blog.createdAt.toDateString()}</time>
                      </a>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-clock"></i>{" "}
                      <a href="">
                        <time>{blog.readTime} minutes read</time>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="content" dangerouslySetInnerHTML={{ __html: blog.content }}></div>

                <div className="meta-bottom">
                  <i className="bi bi-tags"></i>
                  <div className="tags">
                    {blog.tags.join(", ")}
                  </div>
                </div>
              </article>
              <div className="post-author bg-dg d-flex align-items-center">
                <img
                  src="/menobackground.png"
                  className="rounded-circle flex-shrink-0"
                  alt=""
                />
                <div>
                  <h4>Salay Abdul Muhaimin Kanton</h4>
                  <div className="social-links">
                    <a href="https://x.com/SalayAbdul">
                      <i className="bi bi-twitter-x"></i>
                    </a>
                    <a href="https://www.facebook.com/muhaiminsalay">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="https://www.instagram.com/muhaiminsalay/">
                      <i className="bi bi-instagram"></i>
                    </a>
                  </div>
                  <p>
                    I&apos;m a passionate web developer dedicated to crafting
                    exceptional online experiences. With expertise in
                    cutting-edge technologies, I create visually stunning and
                    user-friendly websites and apps that drive results.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sidebar">
                <div className="sidebar-item search-form">
                  <h3 className="sidebar-title">Search</h3>
                  <form className="mt-3" onSubmit={handleSearch}>
                    <input
                      type="search"
                      value={searchText}
                      onChange={(e) => setSearchText(e.target.value)}
                      title="Search"
                      placeholder="Search"
                    />
                    <button title="Search" className="btn">
                      <i className="bi bi-search"></i>
                    </button>
                  </form>
                </div>
                <div className="sidebar-item categories">
                  <h3 className="sidebar-title">Categories</h3>
                  <ul className="mt-3">
                    <li>
                      <a href="#">
                        General <span>(25)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Lifestyle <span>(12)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Educaion <span>(14)</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="sidebar-item tags">
                  <h3 className="sidebar-title">Tags</h3>
                  <ul className="mt-3">
                    <li>
                      <a href="#">IT</a>
                    </li>
                    <li>
                      <a href="#">Software</a>
                    </li>
                    <li>
                      <a href="#">Business</a>
                    </li>
                  </ul>
                </div>
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
