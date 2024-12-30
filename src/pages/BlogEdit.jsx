import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { collection, doc, addDoc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../context/AuthContext";
import Preloader from "../components/Preloader";

export default function BlogEdit() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [imageDesc, setImageDesc] = useState("");
  const [readTime, setReadTime] = useState("");
  const [tags, setTags] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      if (!slug) {
        setLoading(false);
        return;
      }

      try {
        const docRef = doc(db, "blogs", slug);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const blog = docSnap.data();
          setTitle(blog.title);
          setContent(blog.content);
          setImageURL(blog.imageURL);
          setImageDesc(blog.imageDesc);
          setReadTime(blog.readTime);
          setTags(blog.tags.join(", "));
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

  const handleSave = async (e) => {
    e.preventDefault();

    const blogData = {
      title,
      content,
      imageURL,
      imageDesc,
      readTime,
      tags: tags.split(",").map((tag) => tag.trim()),
      createdAt: new Date(),
    };

    try {
      if (slug) {
        // Update existing blog
        const docRef = doc(db, "blogs", slug);
        await updateDoc(docRef, blogData);
        console.log("Blog updated successfully!");
      } else {
        // Add new blog
        await addDoc(collection(db, "blogs"), blogData);
        console.log("Blog added successfully!");
      }
      navigate("/");
    } catch (error) {
      console.error("Error saving blog:", error);
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
    <>
      <section className="">
        <div className="container mt-5">
          <div className="row d-flex">
            <div className="col text-start">
              <h2>{slug ? "Edit Blog" : "Add New Blog"}</h2>
            </div>
            <div className="col text-end">
              <button className="btn btn-danger" onClick={handleLogout}>
                <i className="bi bi-door-open-fill"></i> Sign Out
              </button>
            </div>
          </div>
          <form onSubmit={handleSave} className="mt-3">
            <div className="mb-3">
              <label className="form-label text-left">Title</label>
              <input
                type="text"
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Content</label>
              <textarea
                className="form-control"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Image URL</label>
              <input
                type="text"
                className="form-control"
                value={imageURL}
                onChange={(e) => setImageURL(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Image Description</label>
              <input
                type="text"
                className="form-control"
                value={imageDesc}
                onChange={(e) => setImageDesc(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Read Time (in minutes)</label>
              <input
                type="number"
                className="form-control"
                value={readTime}
                onChange={(e) => setReadTime(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Tags (comma separated)</label>
              <input
                type="text"
                className="form-control"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btned btn">
                <i className="bi bi-plus-circle-fill"></i> {" "}
                {slug ? "Update Blog" : "Add Blog"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
