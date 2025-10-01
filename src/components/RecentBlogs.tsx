import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "../lib/firebase";
import AOS from "aos";

type Blog = {
  id: string;
  slug: string;
  imageURL: string;
  imageDesc?: string;
  title: string;
  content: string;
  createdAt: { seconds: number };
  readTime: number;
};

interface RecentBlogPostsProps {
  maxPosts?: number;
}

function RecentBlogPosts({ maxPosts = 3 }: RecentBlogPostsProps) {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-out" });

    const fetchRecentBlogs = async () => {
      try {
        const q = query(
          collection(db, "blogs"),
          orderBy("createdAt", "desc"),
          limit(maxPosts)
        );
        const querySnapshot = await getDocs(q);
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
          } as Blog;
        });
        setBlogs(blogsData);
      } catch (error) {
        console.error("Error fetching recent blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecentBlogs();
  }, [maxPosts]);

  const stripHtml = (html: string) => {
    const tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  const getBlogPreview = (content: string): string => {
    const strippedContent = stripHtml(content);
    const maxLength = 100;
    const startIndex = 22;
    return strippedContent.length > startIndex
      ? strippedContent.substring(startIndex, startIndex + maxLength) + "..."
      : strippedContent;
  };

  if (loading) {
    return (
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/40">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
            <p className="text-gray-400 mt-4">Loading recent posts...</p>
          </div>
        </div>
      </section>
    );
  }

  if (blogs.length === 0) {
    return null;
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/40">
      <div className="container mx-auto max-w-7xl">
        <div data-aos="fade-up">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Recent Blog Posts
            </h2>
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="w-12 h-1 bg-orange-500 rounded-full"></span>
              <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
              <span className="w-12 h-1 bg-orange-500 rounded-full"></span>
            </div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Latest insights and articles from my blog
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {blogs.map((blog, index) => (
              <Link
                key={blog.slug}
                to={`/blog/${blog.slug}`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group bg-gray-950/95 rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-500/10 border border-gray-800 hover:border-orange-500"
              >
                {/* Blog Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={blog.imageURL}
                    alt={blog.imageDesc || blog.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                </div>

                {/* Blog Content */}
                <div className="p-6">
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <i className="bi bi-calendar text-orange-500"></i>
                      {new Date(blog.createdAt.seconds * 1000).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <i className="bi bi-clock text-orange-500"></i>
                      {blog.readTime} min read
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2">
                    {blog.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {getBlogPreview(blog.content)}
                  </p>

                  {/* Read More Link */}
                  <div className="flex items-center text-orange-500 font-semibold text-sm">
                    <span className="mr-2">Read More</span>
                    <i className="bi bi-arrow-right group-hover:translate-x-2 transition-transform duration-300"></i>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center" data-aos="fade-up" data-aos-delay="400">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30"
            >
              <span>View All Posts</span>
              <i className="bi bi-arrow-right transition-transform duration-300"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RecentBlogPosts;