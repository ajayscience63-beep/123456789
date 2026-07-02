import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signup.css";

function Signup() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!fullName.trim() || !email.trim() || !password || !confirmPassword) {
      setError("Please fill in every field.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setSubmitting(true);
    // NOTE: replace with a real account-creation API call before shipping
    // this. There is no backend wired up yet, so this just moves the user
    // on to the login page.
    navigate("/login");
  };

  return (
    <div className="signup-page">
      <div className="signup-grid" aria-hidden="true"></div>

      <div className="signup-box">
        <Link to="/" className="signup-logo">
          <i className="fa-solid fa-shield-halved"></i>
          <span>CyberSentinels</span>
        </Link>

        <h1>Sign Up</h1>
        <p className="signup-sub">Create your account to get started.</p>

        {error && <div className="signup-error">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <label htmlFor="full-name">Full Name</label>
            <input
              type="text"
              id="full-name"
              placeholder="Jane Doe"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          <div className="input-box">
            <label htmlFor="signup-email">Email</label>
            <input
              type="email"
              id="signup-email"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-box">
            <label htmlFor="signup-password">Password</label>
            <input
              type="password"
              id="signup-password"
              placeholder="At least 8 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="input-box">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="signup-primary-btn" disabled={submitting}>
            {submitting ? "Creating account…" : "Sign Up"}
          </button>
        </form>

        <div className="bottom-text">
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
