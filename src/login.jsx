import { Link, useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (email === "" || password === "") {
      alert("Please enter Email and Password.");
      return;
    }
    navigate("/");
  };

  return (
    <div className="auth-page">
      <div className="auth-grid" aria-hidden="true"></div>

      <div className="auth-box">
        <Link to="/" className="auth-logo">
          <i className="fa-solid fa-shield-halved"></i>
          <span>CyberSentinels</span>
        </Link>

        <h1>Welcome back</h1>
        <p className="auth-sub">Log in to your incident response console.</p>

        <form onSubmit={handleLogin}>
          <div className="input-box">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="you@company.com" required />
          </div>

          <div className="input-box">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="••••••••" required />
          </div>

          <button type="submit" className="auth-primary-btn">Login</button>
        </form>

        <button
          type="button"
          className="auth-ghost-btn"
          onClick={() => navigate("/admin-login")}
        >
          Admin Login
        </button>

        <div className="bottom-text">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
