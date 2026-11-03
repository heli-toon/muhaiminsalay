import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { googleLogin, googleRedirectLogin, currentUser } = useAuth() || {};
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const adminEmail = "muhaiminsalay@gmail.com";

  useEffect(() => {
    if (currentUser) {
      if (currentUser.email === adminEmail) {
        navigate("/add", { replace: true });
      } else {
        setErrorMsg(
          `Signed in as ${currentUser.email}, but this account is not authorized as admin. Please sign in with ${adminEmail}.`
        );
      }
    }
  }, [currentUser, navigate]);

  const handlePopupLogin = async () => {
    setLoading(true);
    setErrorMsg(null);
    try {
      if (googleLogin) {
        await googleLogin();
      }
    } catch (error: any) {
      console.error("Popup sign-in error", error);
      setErrorMsg(
        error?.message || "Popup sign-in was blocked or interrupted. Try the redirect sign-in button below."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleRedirectLogin = async () => {
    setLoading(true);
    setErrorMsg(null);
    try {
      if (googleRedirectLogin) {
        await googleRedirectLogin();
      }
    } catch (error: any) {
      console.error("Redirect sign-in error", error);
      setErrorMsg(error?.message || "Redirect sign-in failed. Please try again.");
      setLoading(false);
    }
  };

  return (
    <section className="bg-black/40 min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 px-4">
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

        {errorMsg && (
          <div className="mb-4 p-3 rounded-md bg-red-950/60 border border-red-800 text-red-200 text-xs leading-relaxed">
            <div className="flex items-start gap-2">
              <i className="bi bi-exclamation-triangle-fill text-red-400 mt-0.5 flex-shrink-0" />
              <span>{errorMsg}</span>
            </div>
          </div>
        )}

        <div className="space-y-3">
          <button
            type="button"
            disabled={loading}
            onClick={handlePopupLogin}
            className="w-full inline-flex items-center justify-center gap-2 bg-orange-500 text-white hover:bg-orange-600 disabled:opacity-50 hover:cursor-pointer hover:text-black font-semibold rounded-md px-4 py-2.5 transition-colors"
            aria-label="Continue with Google"
          >
            {loading ? (
              <span className="inline-block animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
            ) : (
              <i className="bi bi-google text-lg" />
            )}
            <span>Continue with Google</span>
          </button>

          <button
            type="button"
            disabled={loading}
            onClick={handleRedirectLogin}
            className="w-full inline-flex items-center justify-center gap-2 border border-gray-700 bg-gray-900/60 hover:bg-gray-800 text-gray-300 hover:text-white disabled:opacity-50 hover:cursor-pointer font-medium text-xs rounded-md px-4 py-2.5 transition-colors"
            title="Redirect login avoids popup and Cross-Origin-Opener-Policy issues completely"
          >
            <i className="bi bi-arrow-repeat text-sm" />
            <span>Sign in via Redirect (Bypasses popup blocker)</span>
          </button>
        </div>
      </div>
    </section>
  );
}
