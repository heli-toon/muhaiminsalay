import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { collection, doc, addDoc, getDoc, updateDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../lib/firebase";
import { useAuth } from "../context/AuthContext";
import Preloader from "../components/Preloader";

type AuthContextType = {
  logout: () => Promise<void>;
};

export default function BlogEdit() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { logout } = useAuth() as AuthContextType;

  const [slug2, setSlug2] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [imageDesc, setImageDesc] = useState("");
  const [readTime, setReadTime] = useState("");
  const [tags, setTags] = useState("");
  const [loading, setLoading] = useState(true);
  const [docId, setDocId] = useState<string | null>(null); // track the actual Firestore doc id

  useEffect(() => {
    const fetchBlog = async () => {
      if (!slug) {
        setLoading(false);
        return;
      }
      try {
        // Try fetching by document ID first
        const byIdRef = doc(db, "blogs", slug);
        const byIdSnap = await getDoc(byIdRef);

        if (byIdSnap.exists()) {
          const blog = byIdSnap.data();
          setDocId(byIdSnap.id);
          setSlug2(blog.slug ?? "");
          setTitle(blog.title ?? "");
          setContent(blog.content ?? "");
          setImageURL(blog.imageURL ?? "");
          setImageDesc(blog.imageDesc ?? "");
          setReadTime(blog.readTime ?? "");
          setTags(Array.isArray(blog.tags) ? blog.tags.join(", ") : "");
          return;
        }

        const q = query(collection(db, "blogs"), where("slug", "==", slug));
        const snap = await getDocs(q);
        if (!snap.empty) {
          const d = snap.docs[0];
          const blog = d.data();
          setDocId(d.id);
          setSlug2(blog.slug ?? "");
          setTitle(blog.title ?? "");
          setContent(blog.content ?? "");
          setImageURL(blog.imageURL ?? "");
          setImageDesc(blog.imageDesc ?? "");
          setReadTime(blog.readTime ?? "");
          setTags(Array.isArray(blog.tags) ? blog.tags.join(", ") : "");
        } else {
          console.error("Blog not found");
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [slug]);

  interface BlogData {
    slug: string;
    title: string;
    content: string;
    imageURL: string;
    imageDesc: string;
    readTime: string;
    tags: string[];
    createdAt: Date;
  }

  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const parsedTags = tags.split(",").map((t) => t.trim()).filter(Boolean);

    try {
      if (docId) {
        await updateDoc(doc(db, "blogs", docId), {
          slug: slug2,
          title,
          content,
          imageURL,
          imageDesc,
          readTime,
          tags: parsedTags,
          updatedAt: new Date(),
        });
        alert("Blog updated successfully!");
      } else {
        const blogData: BlogData = {
          slug: slug2,
          title,
          content,
          imageURL,
          imageDesc,
          readTime,
          tags: parsedTags,
          createdAt: new Date(),
        };
        await addDoc(collection(db, "blogs"), blogData);
        alert("Blog added successfully!");
      }
      navigate("/blog");
    } catch (error) {
      alert("Error saving blog: " + error);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Failed to log out", error);
      alert("Failed to log out. Please try again.");
    }
  };

  if (loading) return <Preloader />;

  return (
    <section className="bg-gray-900/40 py-12 pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            {slug ? "Edit Blog" : "Add New Blog"}
          </h2>
          <button
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-md transition-colors hover:cursor-pointer"
            onClick={handleLogout}
          >
            <i className="bi bi-door-open-fill" /> Sign Out
          </button>
        </div>

        <form onSubmit={handleSave} className="bg-gray-950/95 border-gray-900 border rounded-lg p-6 grid grid-cols-1 gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Slug</label>
            <input
              type="text"
              title="Slug"
              value={slug2}
              onChange={(e) => setSlug2(e.target.value)}
              className="w-full rounded-md bg-gray-900 border border-gray-700 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#f6700d]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Title</label>
            <input
              type="text"
              title="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-md bg-gray-900 border border-gray-700 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#f6700d]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Content</label>
            <textarea
              title="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full min-h-[160px] rounded-md bg-gray-900 border border-gray-700 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#f6700d]"
              required
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Image URL</label>
              <input
                type="text"
                title="Image URL"
                value={imageURL}
                onChange={(e) => setImageURL(e.target.value)}
                className="w-full rounded-md bg-gray-900 border border-gray-700 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#f6700d]"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Image Description</label>
              <input
                type="text"
                title="Image Description"
                value={imageDesc}
                onChange={(e) => setImageDesc(e.target.value)}
                className="w-full rounded-md bg-gray-900 border border-gray-700 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#f6700d]"
                required
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Read Time (in minutes)</label>
              <input
                type="number"
                title="Read Time"
                value={readTime}
                onChange={(e) => setReadTime(e.target.value)}
                className="w-full rounded-md bg-gray-900 border border-gray-700 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#f6700d]"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Tags (comma separated)</label>
              <input
                type="text"
                title="Tags"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                className="w-full rounded-md bg-gray-900 border border-gray-700 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#f6700d]"
                required
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-[#f6700d] hover:bg-orange-600 text-black font-semibold px-5 py-2.5 rounded-md transition-colors hover:cursor-pointer"
            >
              <i className="bi bi-plus-circle-fill" />
              {slug ? "Update Blog" : "Add Blog"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
