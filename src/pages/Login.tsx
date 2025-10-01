import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { googleLogin } = useAuth() as { googleLogin: () => Promise<void> };
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await googleLogin();
      navigate("/add");
    } catch (error) {
      console.error("Failed to log in", error);
      alert("Failed to log in. Please try again.");
    }
  };

  return (
    <section className="bg-black/40 min-h-[calc(100vh-4rem)] flex items-center justify-center py-12">
      <div className="bg-gray-950/95 border-gray-900 w-full max-w-md mx-auto border rounded-lg p-6 shadow-lg">
        <div className="flex items-center justify-center mb-6">
          <img
            src="/images/logo.webp"
            alt="Muhaimin Salay Logo"
            className="h-10 w-10 object-contain rounded"
            width={40}
            height={40}
          />
        </div>
        <h1 className="text-2xl font-bold text-white text-center mb-2">Welcome back</h1>
        <p className="text-gray-400 text-sm text-center mb-6">Sign in to continue</p>

        <button
          type="button"
          onClick={handleLogin}
          className="w-full inline-flex items-center justify-center gap-2 bg-orange-500 text-white hover:bg-orange-600 hover:cursor-pointer hover:text-black font-semibold rounded-md px-4 py-2.5 transition-colors"
          aria-label="Continue with Google"
        >
          <i className="bi bi-google text-lg" />
          Continue with Google
        </button>
      </div>
    </section>
  );
}
