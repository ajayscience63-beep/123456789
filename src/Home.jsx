import { useState, useEffect } from "react";
import "./carbon-theme.css";
import "./home.css";

function Home() {
  const slideCount = 3;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scanTime, setScanTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideCount);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const clock = setInterval(() => setScanTime(new Date()), 1000);
    return () => clearInterval(clock);
  }, []);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const email = e.target.elements[0].value.trim();
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (pattern.test(email)) {
      alert("Subscribed Successfully!");
      e.target.reset();
    } else {
      alert("Please enter a valid email address.");
    }
  };

  const handleEnquirySubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const project = e.target.elements.project.value;
    if (name === "" || email === "" || project === "") {
      alert("Please fill all required fields.");
      return;
    }
    alert("Project Enquiry Submitted Successfully!");
    e.target.reset();
  };

  const slides = [
    {
      tag: "THREAT_SURFACE.MAP",
      title: "Protect Your Digital World",
      text: "Advanced cybersecurity solutions for modern organizations.",
    },
    {
      tag: "DETECTION_ENGINE.RUN",
      title: "Advanced Threat Detection",
      text: "Monitor, detect and respond to security threats in real time.",
    },
    {
      tag: "RESPONSE_PROTOCOL.SYS",
      title: "Secure. Monitor. Defend.",
      text: "Your trusted cybersecurity incident response platform.",
    },
  ];

  const timeStr = scanTime.toLocaleTimeString("en-US", { hour12: false });

  return (
    <div className="page-home carbon-page">
      {/* ================= HEADER ================= */}
      <header>
        <nav className="navbar">
          <div className="logo">
            <i className="fa-solid fa-shield-halved logo-icon"></i>
            <h2>CyberSentinels</h2>
          </div>

          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/#services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>

          <div className="search-box">
            <input type="text" placeholder="Search..." />
            <button aria-label="Search">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>

          <div className="icons">
            <a href="/admin-login" className="admin-link">Admin Login</a>
            <a href="/login" className="login-btn">Login</a>
            <a href="/signup" className="signup-btn">Sign Up</a>
          </div>
        </nav>
      </header>

      {/* ================= HERO / HUD ================= */}
      <section className="hero-hud">
        <div className="hud-grid" aria-hidden="true"></div>
        <div className="hud-frame">
          <span className="corner tl"></span>
          <span className="corner tr"></span>
          <span className="corner bl"></span>
          <span className="corner br"></span>
        </div>

        <div className="hud-statusbar">
          <span className="status-live">
            <span className="pulse-dot"></span> SYSTEM ONLINE
          </span>
          <span className="status-clock">{timeStr} UTC</span>
        </div>

        <div className="hud-body">
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`hud-slide${currentSlide === i ? " active" : ""}`}
            >
              <span className="hud-eyebrow">&gt;&gt; {slide.tag}</span>
              <h1>{slide.title}</h1>
              <p>{slide.text}</p>
            </div>
          ))}

          <div className="hud-cta">
            <a href="/signup" className="btn-primary">Request Access</a>
            <a href="/#services" className="btn-ghost">View Platform</a>
          </div>
        </div>

        <div className="hud-progress">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`bar${currentSlide === i ? " active" : ""}`}
              onClick={() => setCurrentSlide(i)}
            ></span>
          ))}
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="why-us">
        <div className="section-head">
          <span className="section-eyebrow">// capabilities</span>
          <h2 className="section-title">Why Choose Us</h2>
        </div>

        <div className="why-container">
          <div className="why-card">
            <span className="card-index">01</span>
            <i className="fa-solid fa-shield-halved"></i>
            <h3>Advanced Security</h3>
            <p>Protect sensitive organizational data using secure authentication and role-based access.</p>
          </div>

          <div className="why-card">
            <span className="card-index">02</span>
            <i className="fa-solid fa-bug"></i>
            <h3>Vulnerability Tracking</h3>
            <p>Track vulnerabilities from detection to remediation with complete lifecycle management.</p>
          </div>

          <div className="why-card">
            <span className="card-index">03</span>
            <i className="fa-solid fa-chart-line"></i>
            <h3>Analytics Dashboard</h3>
            <p>Monitor incidents using interactive dashboards, charts and reports.</p>
          </div>

          <div className="why-card">
            <span className="card-index">04</span>
            <i className="fa-solid fa-users"></i>
            <h3>Role-Based Access</h3>
            <p>Admins, Analysts and Users have different permissions for improved security.</p>
          </div>
        </div>
      </section>

      {/* ================= OUR FEATURES ================= */}
      <section className="features" id="services">
        <div className="section-head">
          <span className="section-eyebrow">// platform modules</span>
          <h2 className="section-title">Our Features</h2>
        </div>

        <div className="feature-container">
          <div className="feature-card">
            <div className="feature-icon"><i className="fa-solid fa-triangle-exclamation"></i></div>
            <h3>Incident Management</h3>
            <p>Create, assign and monitor cybersecurity incidents in real time.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon"><i className="fa-solid fa-database"></i></div>
            <h3>Secure Database</h3>
            <p>Store incident and vulnerability information securely with encrypted access.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon"><i className="fa-solid fa-lock"></i></div>
            <h3>JWT Authentication</h3>
            <p>Secure login and authorization using Django REST Framework JWT.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon"><i className="fa-solid fa-bell"></i></div>
            <h3>Instant Alerts</h3>
            <p>Receive notifications whenever new threats or incidents are reported.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon"><i className="fa-solid fa-cloud"></i></div>
            <h3>Cloud Ready</h3>
            <p>Deploy your application securely on cloud infrastructure.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon"><i className="fa-solid fa-file-shield"></i></div>
            <h3>Compliance Reports</h3>
            <p>Generate security reports and maintain audit logs for compliance.</p>
          </div>
        </div>
      </section>

      {/* ================= ENQUIRY ================= */}
      <section className="enquiry">
        <div className="section-head">
          <span className="section-eyebrow">// get started</span>
          <h2>Project Enquiry Form</h2>
        </div>

        <form id="enquiryForm" onSubmit={handleEnquirySubmit}>
          <input type="text" id="name" name="name" placeholder="Enter Your Name" required />
          <input type="email" id="email" name="email" placeholder="Enter Your Email" required />
          <input type="text" id="project" name="project" placeholder="Project Title" required />
          <textarea id="message" name="message" rows="5" placeholder="Project Description"></textarea>
          <button type="submit">Submit Enquiry</button>
        </form>
      </section>

      {/* ================= NEWSLETTER ================= */}
      <section className="newsletter">
        <span className="section-eyebrow">// stay informed</span>
        <h2>Subscribe to Our Newsletter</h2>
        <p>Get cybersecurity tips and security updates directly to your inbox.</p>

        <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
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
            <h3>Our Services</h3>
            <a href="/#services">Incident Response</a>
            <a href="/#services">Threat Detection</a>
            <a href="/#services">Cloud Security</a>
            <a href="/#services">Security Analytics</a>
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

export default Home;
