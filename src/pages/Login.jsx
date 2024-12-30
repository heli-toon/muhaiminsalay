import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { googleLogin } = useAuth();
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
    <>
        <section>
            <h2>Login</h2>
            <button onClick={handleLogin} className="btned btn"><i className="bi bi-google"></i> Sign in with Google</button>
        </section>
    </>
  );
}
