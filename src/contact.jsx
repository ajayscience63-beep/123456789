import "./carbon-theme.css";
import "./contact.css";

function Contact() {
  return (
    <div className="page-contact carbon-page">
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
            <li><a href="/contact" className="active">Contact</a></li>
          </ul>

          <div className="icons">
            <a href="/admin-login" className="admin-link">Admin Login</a>
            <a href="/login" className="login-btn">Login</a>
            <a href="/signup" className="signup-btn">Sign Up</a>
          </div>
        </nav>
      </header>

      {/* ================= CONTACT INTRO ================= */}
      <section className="contact-hero">
        <div className="section-head">
          <span className="section-eyebrow">// get in touch</span>
          <h1 className="section-title">Contact Us</h1>
          <p className="contact-sub">
            Have an incident to report or a project in mind? Reach out and
            our team will get back to you.
          </p>
        </div>

        <div className="contact-grid">
          <div className="carbon-card contact-card">
            <i className="fa-solid fa-location-dot"></i>
            <h3>Address</h3>
            <p>
              Rsmart, Intellect Science<br />
              Rathinam Global University<br />
              Coimbatore, Tamil Nadu, India
            </p>
          </div>

          <div className="carbon-card contact-card">
            <i className="fa-solid fa-phone"></i>
            <h3>Phone</h3>
            <p>+91 98765 43210</p>
          </div>

          <div className="carbon-card contact-card">
            <i className="fa-solid fa-envelope"></i>
            <h3>Email</h3>
            <p>support@cybersentinels.com</p>
            <div className="social-icons">
              <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#"><i className="fa-brands fa-instagram"></i></a>
              <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
              <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
              <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
              <a href="#"><i className="fa-brands fa-youtube"></i></a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OFFICE HOURS ================= */}
      <section className="office-hours">
        <div className="section-head">
          <span className="section-eyebrow">// availability</span>
          <h2 className="section-title">Office Hours</h2>
        </div>

        <div className="hours-box">
          <div className="hours-row">
            <span>Monday – Friday</span>
            <span>9:00 AM – 6:00 PM</span>
          </div>
          <div className="hours-row">
            <span>Saturday</span>
            <span>10:00 AM – 4:00 PM</span>
          </div>
          <div className="hours-row">
            <span>Sunday</span>
            <span className="closed">Closed</span>
          </div>
        </div>
      </section>

      {/* ================= WHY CONTACT US ================= */}
      <section className="why-contact">
        <div className="section-head">
          <span className="section-eyebrow">// why reach out</span>
          <h2 className="section-title">Why Contact Us?</h2>
        </div>

        <div className="why-contact-grid">
          <div className="carbon-card">
            <i className="fa-solid fa-user-shield"></i>
            <h3>Expert Support</h3>
            <p>Our cybersecurity experts are ready to assist you with security incidents and technical guidance.</p>
          </div>

          <div className="carbon-card">
            <i className="fa-solid fa-bolt"></i>
            <h3>Quick Response</h3>
            <p>Receive timely responses to your cybersecurity concerns and project enquiries.</p>
          </div>

          <div className="carbon-card">
            <i className="fa-solid fa-lock"></i>
            <h3>Trusted Security</h3>
            <p>We provide reliable and secure solutions to protect your digital assets and infrastructure.</p>
          </div>

          <div className="carbon-card">
            <i className="fa-solid fa-headset"></i>
            <h3>24/7 Assistance</h3>
            <p>Our support team is available to help you whenever security issues arise.</p>
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

export default Contact;
