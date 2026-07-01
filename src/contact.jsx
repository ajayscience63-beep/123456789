import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <div className="page-contact">
        <nav className="navbar">
            <div className="logo">
                <img src="/cybersentinels.jpeg" alt="Logo" />
                <h2>CyberSentinels</h2>
            </div>

            <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>

        <h1 style={{textAlign: 'center', marginTop: '40px'}}>
        Contact Us
        </h1>

        <div style={{display: 'flex', justifyContent: 'center', gap: '30px', marginTop: '40px', flexWrap: 'wrap'}}>

        <div style={{width: '300px', padding: '30px', boxShadow: '0 0 10px rgba(0,0,0,0.2)', textAlign: 'center'}}>

        <h2>📍 Address</h2>

        <p>
        Rsmart, Intellect Science<br />
        Rathinam Global University<br />
        Coimbatore, Tamil Nadu, India
        </p>

        </div>

        <div style={{width: '300px', padding: '30px', boxShadow: '0 0 10px rgba(0,0,0,0.2)', textAlign: 'center'}}>

        <h2>📞 Phone</h2>

        <p>+91 98765 43210</p>

        </div>

        <div style={{width: '300px', padding: '30px', boxShadow: '0 0 10px rgba(0,0,0,0.2)', textAlign: 'center'}}>

        <h2>✉ Email</h2>

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

        {/* ================= OFFICE HOURS ================= */}

        <section className="office-hours">

            <h2>🕒 Office Hours</h2>

            <div className="hours-box">
                <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</p>
                <p><strong>Saturday:</strong> 10:00 AM - 4:00 PM</p>
                <p><strong>Sunday:</strong> Closed</p>
            </div>

        </section>

        {/* ================= WHY CONTACT US ================= */}

        <section className="why-contact">

            <h2>Why Contact us?</h2>

            <div className="why-container">

                <div className="why-box">
                    <h3>🛡️ Expert Support</h3>
                    <p>Our cybersecurity experts are ready to assist you with security incidents and technical guidance.</p>
                </div>

                <div className="why-box">
                    <h3>⚡ Quick Response</h3>
                    <p>Receive timely responses to your cybersecurity concerns and project enquiries.</p>
                </div>

                <div className="why-box">
                    <h3>🔒 Trusted Security</h3>
                    <p>We provide reliable and secure solutions to protect your digital assets and infrastructure.</p>
                </div>

                <div className="why-box">
                    <h3>📞 24/7 Assistance</h3>
                    <p>Our support team is available to help you whenever security issues arise.</p>
                </div>

            </div>

        </section>
      </div>
    </>
  );
}

export default Contact;
