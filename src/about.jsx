import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div className="page-about">
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

        <section style={{padding: '50px', maxWidth: '1000px', margin: 'auto'}}>
            <img src="/cybersentinels.jpeg" width="500" />
            <br /><br />

            <h1>About CyberSentinels</h1>
            <br /><br />

            <p>
                CyberSentinels is a Cybersecurity Incident Response &
                Vulnerability Tracking System designed to help organizations
                detect, monitor and resolve security threats efficiently.
            </p>

            <p>
                Our platform centralizes incident reporting,
                vulnerability management, remediation tracking,
                compliance monitoring and security analytics
                in one secure dashboard.
            </p>

            {/* ================= BENEFITS OF US ================= */}

        <section className="benefits">

            <h2>Benefits of Us</h2>

            <p className="benefits-text">
                CyberSentinels provides a reliable and secure platform for managing
                cybersecurity incidents and protecting valuable digital assets. Our
                system enables real-time threat detection, vulnerability assessment,
                secure authentication, and continuous monitoring to minimize security
                risks. With an easy-to-use interface, advanced analytics, and
                proactive incident management, we help organizations strengthen their
                cybersecurity posture, improve operational efficiency, and ensure
                business continuity in today's rapidly evolving digital landscape.
            </p>


    
        </section>


        </section>
      </div>
    </>
  );
}

export default About;
