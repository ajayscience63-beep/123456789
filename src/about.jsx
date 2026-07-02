import "./carbon-theme.css";
import "./about.css";

function About() {
  return (
    <div className="page-about carbon-page">
      {/* ================= HEADER ================= */}
      <header>
        <nav className="navbar">
          <div className="logo">
            <i className="fa-solid fa-shield-halved logo-icon"></i>
            <h2>CyberSentinels</h2>
          </div>

          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about" className="active">About</a></li>
            <li><a href="/#services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>

          <div className="icons">
            <a href="/admin-login" className="admin-link">Admin Login</a>
            <a href="/login" className="login-btn">Login</a>
            <a href="/signup" className="signup-btn">Sign Up</a>
          </div>
        </nav>
      </header>

      {/* ================= INTRO ================= */}
      <section className="about-hero">
        <div className="about-hero-grid">
          <div className="about-hero-copy">
            <span className="section-eyebrow">// about us</span>
            <h1>Built to defend, designed to scale</h1>
            <p>
              CyberSentinels is a cybersecurity incident response and
              vulnerability tracking system designed to help organizations
              detect, monitor and resolve security threats efficiently.
            </p>
            <p>
              Our platform centralizes incident reporting, vulnerability
              management, remediation tracking, compliance monitoring and
              security analytics in one secure dashboard.
            </p>
          </div>

          <div className="about-hero-panel">
            <div className="panel-row">
              <span className="panel-label">Uptime SLA</span>
              <span className="panel-value">99.9%</span>
            </div>
            <div className="panel-row">
              <span className="panel-label">Avg. detection time</span>
              <span className="panel-value">&lt; 4 min</span>
            </div>
            <div className="panel-row">
              <span className="panel-label">Encryption</span>
              <span className="panel-value">AES-256</span>
            </div>
            <div className="panel-row">
              <span className="panel-label">Auth</span>
              <span className="panel-value">JWT + RBAC</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BENEFITS OF US ================= */}
      <section className="benefits">
        <div className="section-head">
          <span className="section-eyebrow">// why it works</span>
          <h2 className="section-title">Benefits of Us</h2>
        </div>

        <p className="benefits-text">
          CyberSentinels provides a reliable and secure platform for managing
          cybersecurity incidents and protecting valuable digital assets. Our
          system enables real-time threat detection, vulnerability
          assessment, secure authentication, and continuous monitoring to
          minimize security risks. With an easy-to-use interface, advanced
          analytics, and proactive incident management, we help
          organizations strengthen their cybersecurity posture, improve
          operational efficiency, and ensure business continuity in today's
          rapidly evolving digital landscape.
        </p>

        <div className="benefit-grid">
          <div className="carbon-card">
            <i className="fa-solid fa-bolt"></i>
            <h3>Real-Time Detection</h3>
            <p>Threats are surfaced the moment they're flagged, not after the fact.</p>
          </div>
          <div className="carbon-card">
            <i className="fa-solid fa-layer-group"></i>
            <h3>Unified Platform</h3>
            <p>Incidents, vulnerabilities, and compliance in a single dashboard.</p>
          </div>
          <div className="carbon-card">
            <i className="fa-solid fa-user-shield"></i>
            <h3>Role-Based Access</h3>
            <p>Admins, analysts and users each see exactly what they need.</p>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer>
        <div className="footer-container">
          <div className="footer-box">
            <h3>CyberSentinels</h3>
            <p>
              Cybersecurity Incident Response & Vulnerability Tracking System
              designed to strengthen digital security through real-time
              monitoring and incident management.
            </p>
          </div>

          <div className="footer-box">
            <h3>Quick Links</h3>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/#services">Services</a>
            <a href="/contact">Contact</a>
          </div>

          <div className="footer-box">
            <h3>Legal</h3>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms & Conditions</a>
          </div>

          <div className="footer-box">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
              <a href="#"><i className="fab fa-x-twitter"></i></a>
              <a href="#"><i className="fab fa-github"></i></a>
            </div>
          </div>
        </div>

        <hr />

        <div className="copyright">
          <p>© 2026 CyberSentinels. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default About;
