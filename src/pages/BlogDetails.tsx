import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";

import Footer from "../components/Footer";
import Backtotop from "../components/Backtotop";
import Preloader from "../components/Preloader";

type Blog = {
  title: string;
  slug: string;
  imageURL: string;
  imageDesc: string;
  createdAt: Date;
  readTime: number;
  content: string;
  tags: string[];
};

export default function BlogDetails() {
  const { slug } = useParams();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [paragraphs, setParagraphs] = useState<Element[]>([]);
  useEffect(() => {
    const paraElements = document.querySelectorAll(".content .paragraph");
    setParagraphs(Array.from(paraElements));
  }, [blog]);
  interface SearchEvent extends React.FormEvent<HTMLFormElement> {}

  const handleSearch = (event: SearchEvent): void => {
    event.preventDefault();
    const textToSearch: string = searchText.trim();
    if (textToSearch === "") return;
    const pattern: RegExp = new RegExp(`${textToSearch}`, "gi");
    paragraphs.forEach((para: Element) => {
      const markedText: string = para.innerHTML.replace(
        pattern,
        (match: string) => `<mark>${match}</mark>`
      );
      para.innerHTML = markedText;
    });
  };
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const q = query(collection(db, "blogs"), where("slug", "==", slug));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          const blogData = querySnapshot.docs[0].data();
          const mappedBlog: Blog = {
            title: blogData.title,
            slug: blogData.slug,
            imageURL: blogData.imageURL,
            imageDesc: blogData.imageDesc,
            createdAt: blogData.createdAt.toDate(),
            readTime: blogData.readTime,
            content: blogData.content,
            tags: blogData.tags,
          };
          setBlog(mappedBlog);
          window.document.title = `${mappedBlog.title} | Blog`;
        } else {
          console.error(`Blog with slug "${slug}" not found.`);
          window.document.title = "Blog Not Found | Blog";
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [slug]);

  if (loading) return <Preloader />;
  if (!blog)
    return (
      <>
        <div className="breadcrumbs bg-dg">
          <div className="container">
            <div className="d-flex justify-content-between align-items-between">
              <h2>Blog Not Found</h2>
              <ol>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>Blog Not Found</li>
              </ol>
            </div>
          </div>
        </div>
        <section id="blog" className="blog">
          <div className="container">
            <h2>This Blog doesn&apos;t exist</h2>
            <p>No Blog was found.</p>
            <Link to="/blog" className="btned btn">See All blogs</Link>
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
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
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
              <article className="blog-details bg-dg" data-aos="fade-up" data-aos-delay="200">
                <div className="post-img">
                  <img src={blog.imageURL} alt={blog.imageDesc} className="img-fluid" />
                </div>
                <h2 className="title">
                  {blog.title}
                </h2>
                <div className="meta-top">
                  <ul>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-calendar"></i>{" "}
                      <a href="">
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
                    <input type="search" value={searchText} onChange={(e) => setSearchText(e.target.value)} title="Search" placeholder="Search" />
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