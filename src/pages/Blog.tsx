import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase";
import Preloader from "../components/Preloader";
import AOS from "aos";
import TagChips from "../components/TagChips"; // added

export default function Blog() {
  window.document.title = "Muhaimin Abdul Salay Kanton | Blog";

  type Blog = {
    id: string;
    slug: string;
    imageURL: string;
    imageDesc?: string;
    title: string;
    content: string;
    createdAt: { seconds: number };
    readTime: number;
    tags?: string[]; // added
  };

  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
    });

    const fetchBlogs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "blogs"));
        const blogsData = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            slug: data.slug,
            imageURL: data.imageURL,
            imageDesc: data.imageDesc,
            title: data.title,
            content: data.content,
            createdAt: data.createdAt,
            readTime: data.readTime,
            tags: Array.isArray(data.tags) ? data.tags : [], // added
          } as Blog;
        });
        setBlogs(blogsData);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const stripHtml = (html: string) => {
    const tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  const getBlogPreview = (content: string): string => {
    const strippedContent: string = stripHtml(content);
    const maxLength: number = 150;
    const startIndex: number = 22;
    return strippedContent.length > startIndex
      ? strippedContent.substring(startIndex, startIndex + maxLength) + "..."
      : strippedContent;
  };

  if (loading) {
    return <Preloader />;
  }

  return (
    <div className="bg-black/40 min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div data-aos="fade-up" className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">Blog</h1>
          <p className="text-xl text-gray-400">
            Explore my articles on IT, web development, and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={blog.slug}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-gray-950/95 border-gray-900 border rounded-lg overflow-hidden hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:border-orange-500 group"
            >
              <img
                src={blog.imageURL}
                alt={blog.imageDesc || blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                  <span className="flex items-center gap-1">
                    <i className="bi bi-calendar"></i>
                    {new Date(blog.createdAt.seconds * 1000).toDateString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <i className="bi bi-clock"></i>
                    {blog.readTime} min read
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-orange-500 transition-colors duration-300">
                  {blog.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4">
                  {getBlogPreview(blog.content)}
                </p>

                <TagChips tags={blog.tags} className="mb-4" /> {/* added */}

                <Link
                  to={`/blog/${blog.slug}`}
                  className="text-orange-500 hover:text-orange-600 text-sm font-semibold transition-colors duration-300 flex items-center gap-1"
                >
                  Read More <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
