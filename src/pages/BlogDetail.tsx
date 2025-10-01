import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase";
import AOS from "aos";
import TagChips from "../components/TagChips"; // added

type Blog = {
  title: string;
  slug: string;
  imageURL: string;
  imageDesc: string;
  createdAt: Date;
  readTime: number;
  content: string;
  tags?: string[]; // added
};

export default function BlogDetail() {
  const { slug } = useParams();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [paragraphs, setParagraphs] = useState<Element[]>([]);

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-out" });
    
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
            tags: Array.isArray(blogData.tags) ? blogData.tags : [], // added
          };
          setBlog(mappedBlog);
          window.document.title = `${mappedBlog.title} | Blog`;
        } else {
          setBlog(null);
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

  useEffect(() => {
    const contentElement = document.querySelector(".blog-content");
    if (contentElement) {
      const paraElements = contentElement.querySelectorAll("p, h1, h2, h3, h4, h5, h6, li");
      setParagraphs(Array.from(paraElements));
    }
  }, [blog]);

  const handleSearch = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const textToSearch = searchText.trim();
    
    if (textToSearch === "") return;

    // Remove previous highlights
    paragraphs.forEach((para) => {
      para.innerHTML = para.innerHTML.replace(/<mark>(.*?)<\/mark>/gi, "$1");
    });

    // Apply new highlights
    const pattern = new RegExp(`(${textToSearch})`, "gi");
    paragraphs.forEach((para) => {
      const markedText = para.innerHTML.replace(
        pattern,
        (match) => `<mark class="bg-orange-500 text-white px-1 rounded">${match}</mark>`
      );
      para.innerHTML = markedText;
    });
  };

  const clearSearch = () => {
    setSearchText("");
    paragraphs.forEach((para) => {
      para.innerHTML = para.innerHTML.replace(/<mark[^>]*>(.*?)<\/mark>/gi, "$1");
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-orange-500 mb-4"></div>
          <p className="text-gray-400">Loading post...</p>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="bg-black/40 min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-400 mb-4">Post not found</p>
          <Link to="/blog" className="text-orange-500 hover:text-orange-600">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black/40 min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <Link
          to="/blog"
          className="inline-flex items-center text-orange-500 hover:text-orange-600 mb-8 transition-colors duration-300"
        >
          <i className="bi bi-arrow-left mr-2"></i>
          Back to Blog
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <article data-aos="fade-up">
              <img
                src={blog.imageURL}
                alt={blog.imageDesc}
                className="w-full h-96 object-cover rounded-lg mb-8"
              />
              
              <div className="mb-6">
                <p className="text-gray-500 text-sm mb-4 flex items-center gap-4 flex-wrap">
                  <span className="flex items-center gap-2">
                    <i className="bi bi-calendar text-orange-500"></i>
                    {blog.createdAt.toDateString()}
                  </span>
                  <span className="flex items-center gap-2">
                    <i className="bi bi-clock text-orange-500"></i>
                    {blog.readTime} min read
                  </span>
                </p>
                <TagChips tags={blog.tags} className="mt-2" />
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {blog.title}
                </h1>
              </div>

              <div
                className="blog-content prose prose-invert prose-lg max-w-none mb-12
                  prose-headings:text-white prose-headings:font-bold prose-headings:mt-8 prose-headings:mb-4
                  prose-h1:text-4xl prose-h2:text-3xl prose-h2:text-orange-500 prose-h3:text-2xl prose-h4:text-xl
                  prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-lg
                  prose-a:text-orange-500 prose-a:no-underline hover:prose-a:text-orange-600 hover:prose-a:underline
                  prose-strong:text-white prose-strong:font-semibold
                  prose-em:text-gray-300 prose-em:italic
                  prose-code:text-orange-400 prose-code:bg-gray-950/95 prose-code:border-gray-900 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
                  prose-pre:bg-gray-950/95 prose-pre:border-gray-900 prose-pre:border prose-pre:border-gray-700 prose-pre:rounded-lg prose-pre:p-4 prose-pre:overflow-x-auto
                  prose-blockquote:border-l-4 prose-blockquote:border-orange-500 prose-blockquote:bg-gray-950/95 prose-:border-gray-900 prose-blockquote:pl-6 prose-blockquote:py-4 prose-blockquote:italic prose-blockquote:text-gray-300 prose-blockquote:rounded-r-lg
                  prose-ul:text-gray-300 prose-ul:list-disc prose-ul:ml-6 prose-ul:mb-6
                  prose-ol:text-gray-300 prose-ol:list-decimal prose-ol:ml-6 prose-ol:mb-6
                  prose-li:mb-2 prose-li:leading-relaxed
                  prose-img:rounded-lg prose-img:shadow-lg prose-img:my-8
                  prose-hr:border-gray-700 prose-hr:my-8
                  prose-table:w-full prose-table:border-collapse prose-table:my-8
                  prose-th:bg-gray-800 prose-th:text-white prose-th:font-semibold prose-th:p-3 prose-th:border prose-th:border-gray-700
                  prose-td:text-gray-300 prose-td:p-3 prose-td:border prose-td:border-gray-700"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />

              <style>{`
                .blog-content h1 {
                  font-size: 2.25rem;
                  font-weight: 700;
                  color: white;
                  margin-top: 2rem;
                  margin-bottom: 1rem;
                  line-height: 1.2;
                }
                .blog-content h2 {
                  font-size: 1.875rem;
                  font-weight: 700;
                  color: #f97316;
                  margin-top: 2rem;
                  margin-bottom: 1rem;
                  line-height: 1.3;
                }
                .blog-content h3 {
                  font-size: 1.5rem;
                  font-weight: 700;
                  color: #f97316;
                  margin-top: 1.5rem;
                  margin-bottom: 0.75rem;
                  line-height: 1.4;
                }
                .blog-content h4 {
                  font-size: 1.25rem;
                  font-weight: 600;
                  color: white;
                  margin-top: 1.5rem;
                  margin-bottom: 0.75rem;
                }
                .blog-content p {
                  color: #d1d5db;
                  font-size: 1rem;
                  line-height: 1.5;
                  margin-bottom: 1.5rem;
                }
                .blog-content a {
                  color: #f97316;
                  text-decoration: none;
                  transition: color 0.2s;
                }
                .blog-content a:hover {
                  color: #ea580c;
                  text-decoration: underline;
                }
                .blog-content strong {
                  color: white;
                  font-weight: 600;
                }
                .blog-content em {
                  font-style: italic;
                  color: #d1d5db;
                }
                .blog-content code {
                  background-color: #1f2937;
                  color: #fb923c;
                  padding: 0.25rem 0.5rem;
                  border-radius: 0.25rem;
                  font-size: 0.875rem;
                  font-family: monospace;
                }
                .blog-content pre {
                  background-color: #1f2937;
                  border: 1px solid #374151;
                  border-radius: 0.5rem;
                  padding: 1rem;
                  overflow-x: auto;
                  margin: 1.5rem 0;
                }
                .blog-content pre code {
                  background: none;
                  padding: 0;
                  color: #d1d5db;
                }
                .blog-content blockquote {
                  border-left: 4px solid #f97316;
                  background-color: #1f2937;
                  padding: 1rem 1.5rem;
                  margin: 1.5rem 0;
                  font-style: italic;
                  color: #d1d5db;
                  border-radius: 0 0.5rem 0.5rem 0;
                }
                .blog-content ul, .blog-content ol {
                  color: #d1d5db;
                  margin-left: 1.5rem;
                  margin-bottom: 1.5rem;
                  font-size: 1rem;
                }
                .blog-content ul {
                  list-style-type: disc;
                }
                .blog-content ol {
                  list-style-type: decimal;
                }
                .blog-content li {
                  margin-bottom: 0.5rem;
                }
                .blog-content img {
                  border-radius: 0.5rem;
                  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3);
                  margin: 2rem 0;
                  max-width: 100%;
                  height: auto;
                }
                .blog-content hr {
                  border: none;
                  border-top: 1px solid #374151;
                  margin: 2rem 0;
                }
                .blog-content table {
                  width: 100%;
                  border-collapse: collapse;
                  margin: 2rem 0;
                }
                .blog-content th {
                  background-color: #1f2937;
                  color: white;
                  font-weight: 600;
                  padding: 0.75rem;
                  border: 1px solid #374151;
                  text-align: left;
                }
                .blog-content td {
                  color: #d1d5db;
                  padding: 0.75rem;
                  border: 1px solid #374151;
                }
                .blog-content mark {
                  background-color: #f97316;
                  color: white;
                  padding: 0 0.25rem;
                  border-radius: 0.25rem;
                }
              `}</style>

              {/* Author Section */}
              <div className="bg-gray-950/95 border border-gray-900 rounded-lg p-6 flex flex-col sm:flex-row items-start gap-6">
                <img
                  src="/menobackground.png"
                  className="w-24 h-24 rounded-full object-cover flex-shrink-0"
                  alt="Author"
                />
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-orange-500 mb-2">
                    Salay Abdul Muhaimin Kanton
                  </h4>
                  <div className="flex gap-3 mb-3">
                    <a
                      href="https://x.com/SalayAbdul"
                      className="text-gray-400 hover:text-orange-500 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-twitter-x text-lg"></i>
                    </a>
                    <a
                      href="https://www.facebook.com/muhaiminsalay"
                      className="text-gray-400 hover:text-orange-500 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-facebook text-lg"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/muhaiminsalay/"
                      className="text-gray-400 hover:text-orange-500 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-instagram text-lg"></i>
                    </a>
                  </div>
                  <p className="text-gray-400 text-sm italic">
                    I'm a passionate web developer dedicated to crafting
                    exceptional online experiences. With expertise in
                    cutting-edge technologies, I create visually stunning and
                    user-friendly websites and apps that drive results.
                  </p>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28">
              {/* Search Widget */}
              <div className="bg-gray-950/95 border border-gray-900 rounded-lg p-6 mb-6" data-aos="fade-left">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Search in Post
                </h3>
                <form onSubmit={handleSearch} className="space-y-3">
                  <div className="relative">
                    <input
                      type="search"
                      value={searchText}
                      onChange={(e) => setSearchText(e.target.value)}
                      placeholder="Search keywords..."
                      className="w-full bg-gray-900 text-white px-4 py-3 pr-12 rounded-lg border border-gray-700 focus:outline-none focus:border-orange-500 transition-colors"
                    />
                    <button
                      type="submit"
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded transition-colors"
                      title="Search"
                    >
                      <i className="bi bi-search"></i>
                    </button>
                  </div>
                  {searchText && (
                    <button
                      type="button"
                      onClick={clearSearch}
                      className="w-full text-sm text-gray-400 hover:text-orange-500 transition-colors"
                    >
                      Clear highlights
                    </button>
                  )}
                </form>
                <p className="text-xs text-gray-500 mt-3">
                  Search and highlight text within this blog post
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}