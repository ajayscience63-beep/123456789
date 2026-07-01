import { useState, useEffect } from "react";

function Home() {
  const slideCount = 3;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideCount);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

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
      gradient: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
      title: "Protect Your Digital World",
      text: "Advanced Cybersecurity Solutions for Modern Organizations",
    },
    {
      gradient: "linear-gradient(135deg, #1a2980, #26d0ce)",
      title: "Advanced Threat Detection",
      text: "Monitor, Detect and Respond to Security Threats",
    },
    {
      gradient: "linear-gradient(135deg, #16222a, #3a6073)",
      title: "Secure. Monitor. Defend.",
      text: "Your Trusted Cybersecurity Incident Response Platform",
    },
  ];

  return (
    <div className="page-home">
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
            <button>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>

          <div className="icons">
            <a href="/login" className="login-btn">Login</a>
            <a href="/signup" className="signup-btn">Sign Up</a>
            <a href="/admin-login" className="signup-btn">Admin Login</a>

            <a href="/dashboard" className="dashboard-icon">
              <i className="fa-solid fa-gauge-high"></i>
              <span>Dashboard</span>
            </a>

            <button
              id="theme-toggle"
              className="theme-btn"
              onClick={() => setDarkMode((prev) => !prev)}
            >
              {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>
          </div>
        </nav>
      </header>

      {/* ================= BANNER SLIDER ================= */}
      <section className="banner-slider">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`slide${currentSlide === i ? " active" : ""}`}
            style={{ background: slide.gradient }}
          >
            <div className="slide-text">
              <h2>{slide.title}</h2>
              <p>{slide.text}</p>
            </div>
          </div>
        ))}

        <div className="slider-dots">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`dot${currentSlide === i ? " active" : ""}`}
              onClick={() => setCurrentSlide(i)}
            ></span>
          ))}
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="why-us">
        <h2 className="section-title">Why Choose Us</h2>

        <div className="why-container">
          <div className="why-card">
            <i className="fa-solid fa-shield-halved"></i>
            <h3>Advanced Security</h3>
            <p>Protect sensitive organizational data using secure authentication and role-based access.</p>
          </div>

          <div className="why-card">
            <i className="fa-solid fa-bug"></i>
            <h3>Vulnerability Tracking</h3>
            <p>Track vulnerabilities from detection to remediation with complete lifecycle management.</p>
          </div>

          <div className="why-card">
            <i className="fa-solid fa-chart-line"></i>
            <h3>Analytics Dashboard</h3>
            <p>Monitor incidents using interactive dashboards, charts and reports.</p>
          </div>

          <div className="why-card">
            <i className="fa-solid fa-users"></i>
            <h3>Role-Based Access</h3>
            <p>Admins, Analysts and Users have different permissions for improved security.</p>
          </div>
        </div>
      </section>

      {/* ================= OUR FEATURES ================= */}
      <section className="features" id="services">
        <h2 className="section-title">Our Features</h2>

        <div className="feature-container">
          <div className="feature-card">
            <i className="fa-solid fa-triangle-exclamation"></i>
            <h3>Incident Management</h3>
            <p>Create, assign and monitor cybersecurity incidents in real time.</p>
          </div>

          <div className="feature-card">
            <i className="fa-solid fa-database"></i>
            <h3>Secure Database</h3>
            <p>Store incident and vulnerability information securely with encrypted access.</p>
          </div>

          <div className="feature-card">
            <i className="fa-solid fa-lock"></i>
            <h3>JWT Authentication</h3>
            <p>Secure login and authorization using Django REST Framework JWT.</p>
          </div>

          <div className="feature-card">
            <i className="fa-solid fa-bell"></i>
            <h3>Instant Alerts</h3>
            <p>Receive notifications whenever new threats or incidents are reported.</p>
          </div>

          <div className="feature-card">
            <i className="fa-solid fa-cloud"></i>
            <h3>Cloud Ready</h3>
            <p>Deploy your application securely on cloud infrastructure.</p>
          </div>

          <div className="feature-card">
            <i className="fa-solid fa-file-shield"></i>
            <h3>Compliance Reports</h3>
            <p>Generate security reports and maintain audit logs for compliance.</p>
          </div>
        </div>
      </section>

      {/* ================= ENQUIRY ================= */}
      <section className="enquiry">
        <h2>Project Enquiry Form</h2>

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
            <a href="/">🏠 Home</a>
            <a href="/about">📝 About</a>
            <a href="/#services">💻 Services</a>
            <a href="/contact">📞 Contact</a>
          </div>

          <div className="footer-box">
            <h3>Our Services</h3>
            <a href="/#services">● Incident Response</a>
            <a href="/#services">● Threat Detection</a>
            <a href="/#services">● Cloud Security</a>
            <a href="/#services">● Security Analytics</a>
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