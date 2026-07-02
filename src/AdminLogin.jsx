import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./adminlogin.css";

function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Please enter both admin email and password.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setSubmitting(true);
    // NOTE: replace with a real authentication call before shipping this.
    // This currently accepts any well-formed email/password because there
    // is no backend wired up yet.
    navigate("/dashboard");
  };

  return (
    <div className="admin-page">
      <div className="admin-grid" aria-hidden="true"></div>

      <div className="admin-box">
        <Link to="/" className="admin-logo">
          <i className="fa-solid fa-shield-halved"></i>
          <span>CyberSentinels</span>
        </Link>

        <h1>Admin Login</h1>
        <p className="admin-sub">Secure access only.</p>

        {error && <div className="admin-error">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <label htmlFor="admin-email">Admin Email</label>
            <input
              type="email"
              id="admin-email"
              placeholder="admin@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-box">
            <label htmlFor="admin-password">Password</label>
            <input
              type="password"
              id="admin-password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="admin-primary-btn" disabled={submitting}>
            {submitting ? "Signing in…" : "Login"}
          </button>
        </form>

        <div className="bottom-text">
          Back to user login? <Link to="/login">User Login</Link>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
