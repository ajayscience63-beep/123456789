<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>CyberSentinels | Cybersecurity Incident Response System</title>

    <!-- CSS -->
    <link rel="stylesheet" href="style.css">

    <!-- Font Awesome -->
    <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
</head>

<body>

    <!-- ================= HEADER ================= -->

    <header>

        <nav class="navbar">

            <div class="logo">
                <img src="cybsentinels.jpeg" alt="CyberSentinels Logo">
                <h2>CyberSentinels</h2>
            </div>

            <ul class="nav-links">

  <li><a href="index.html">Home</a></li>
<li><a href="about.html">About</a></li>
<li><a href="services.html">Services</a></li>
<li><a href="contact.html">Contact</a></li>

</ul>
            <div class="search-box">

                <input type="text" placeholder="Search...">

                <button>
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>

            </div>

            <div class="icons">

                <a href="cart.html" class="cart-icon">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <span id="cart-count">76</span>
                </a>

                <a href="login.html" class="login-btn">Login</a>
                <a href="signup.html" class="signup-btn">Sign Up</a>
                <a href="admin.html" class="signup-btn">Admin Signup</a>

                <a href="dashboard.html" class="dashboard-icon">
    <i class="fa-solid fa-gauge-high"></i>
    <span>Dashboard</span>
</a>

                
                
                <button id="theme-toggle" class="theme-btn">🌙 Dark Mode
                </button>
                

            </div>

        </nav>

    </header>

    <!-- ================= BANNER SLIDER ================= -->

    <section class="banner-slider">

        <div class="slide active"
            style="background-image:url('domain.jpg');">

            <div class="slide-text">
                <h2>Protect Your Digital World</h2>
                <p>Advanced Cybersecurity Solutions for Modern Organizations</p>
            </div>

        </div>

        <div class="slide"
            style="background-image:url('domain2.jpg');">

            <div class="slide-text">
                <h2>Advanced Threat Detection</h2>
                <p>Monitor, Detect and Respond to Security Threats</p>
            </div>

        </div>

        <div class="slide"
            style="background-image:url('domain3.jpg');">

            <div class="slide-text">
                <h2>Secure. Monitor. Defend.</h2>
                <p>Your Trusted Cybersecurity Incident Response Platform</p>
            </div>

        </div>

        <div class="slider-dots">

            <span class="dot active"></span>
            <span class="dot"></span>
            <span class="dot"></span>

        </div>

    </section>

    <!-- ================= WHY CHOOSE US ================= -->

    <section class="why-us">

        <h2 class="section-title">
            Why Choose Us
        </h2>

        <div class="why-container">

            <div class="why-card">

                <i class="fa-solid fa-shield-halved"></i>

                <h3>Advanced Security</h3>

                <p>
                    Protect sensitive organizational data using secure
                    authentication and role-based access.
                </p>

            </div>

            <div class="why-card">

                <i class="fa-solid fa-bug"></i>

                <h3>Vulnerability Tracking</h3>

                <p>
                    Track vulnerabilities from detection to remediation
                    with complete lifecycle management.
                </p>

            </div>

            <div class="why-card">

                <i class="fa-solid fa-chart-line"></i>

                <h3>Analytics Dashboard</h3>

                <p>
                    Monitor incidents using interactive dashboards,
                    charts and reports.
                </p>

            </div>

            <div class="why-card">

                <i class="fa-solid fa-users"></i>

                <h3>Role-Based Access</h3>

                <p>
                    Admins, Analysts and Users have different permissions
                    for improved security.
                </p>

            </div>

        </div>

    </section>
    <!-- ================= OUR FEATURES ================= -->

<section class="features" id="services">

    <h2 class="section-title">
        Our Features
    </h2>

    <div class="feature-container">

        <div class="feature-card">
            <i class="fa-solid fa-triangle-exclamation"></i>
            <h3>Incident Management</h3>
            <p>
                Create, assign and monitor cybersecurity incidents
                in real time.
            </p>
        </div>

        <div class="feature-card">
            <i class="fa-solid fa-database"></i>
            <h3>Secure Database</h3>
            <p>
                Store incident and vulnerability information
                securely with encrypted access.  
            </p>
        </div>

        <div class="feature-card">
            <i class="fa-solid fa-lock"></i>
            <h3>JWT Authentication</h3>
            <p>
                Secure login and authorization using
                Django REST Framework JWT.
            </p>
        </div>

        <div class="feature-card">
            <i class="fa-solid fa-bell"></i>
            <h3>Instant Alerts</h3>
            <p>
                Receive notifications whenever new threats
                or incidents are reported.
            </p>
        </div>

        <div class="feature-card">
            <i class="fa-solid fa-cloud"></i>
            <h3>Cloud Ready</h3>
            <p>
                Deploy your application securely
                on cloud infrastructure.
            </p>
        </div>

        <div class="feature-card">
            <i class="fa-solid fa-file-shield"></i>
            <h3>Compliance Reports</h3>
            <p>
                Generate security reports and maintain
                audit logs for compliance.
            </p>
        </div>

    </div>

</section>
-->
<section class="enquiry">

    <h2>Project Enquiry Form</h2>

    <form id="enquiryForm">

        <input type="text" id="name" name="name" placeholder="Enter Your Name" required>

        <input type="email" id="email" name="email" placeholder="Enter Your Email" required>

        <input type="text" id="project" name="project" placeholder="Project Title" required>

        <textarea id="message" name="message" rows="5" placeholder="Project Description"></textarea>

        <button type="button" onclick="submitEnquiry()">
            Submit Enquiry
        </button>

    </form>

</section>
    

<!-- ================= NEWSLETTER ================= -->

<section class="newsletter">

    <h2>Subscribe to Our Newsletter</h2>

    <p>
        Get cybersecurity tips and security updates directly to your inbox.
    </p>

    <form class="newsletter-form">

        <input
            type="email"
            placeholder="Enter your email"
            required>

        <button type="submit">
            Subscribe
        </button>

    </form>

</section>


<!-- ================= FOOTER ================= -->

<footer>

    <div class="footer-container">

        <!-- Company -->

        <div class="footer-box">

            <h3>CyberSentinels</h3>

            <p>
                Cybersecurity Incident Response &
                Vulnerability Tracking System designed
                to strengthen digital security through
                real-time monitoring and incident
                management.
            </p>

        </div>

        <!-- Quick Links -->

        <div class="footer-box">

            <h3>Quick Links</h3>

            <a href="#">🛖 Home</a>
            <a href="#about"> 📝 About</a>
            <a href="#services"> 💻 Services</a>
            <a href="#contact">📞 Contact</a>

        </div>

        <!-- Services -->

        <div class="footer-box">

            <h3>Our Services</h3>

            <a href="#"> ● Incident Response</a>
            <a href="#">● Threat Detection</a>
            <a href="#">● Cloud Security</a>
            <a href="#">● Security Analytics</a>

        </div>
        <div class="footer-links">
           <a href="privacy.html">Privacy Policy</a>
        <a href="terms.html">Terms & Conditions</a>
        
</div>

        <!-- Follow Us -->

        <div class="footer-box">

            <h3>Follow Us</h3>

            <div class="social-icons">

                <a href="#"><i class="fab fa-facebook-f"></i></a>

                <a href="#"><i class="fab fa-instagram"></i></a>

                <a href="#"><i class="fab fa-linkedin-in"></i></a>

                <a href="#"><i class="fab fa-x-twitter"></i></a>

                <a href="#"><i class="fab fa-github"></i></a>

            </div>

        </div>

    </div>

    <hr>

    <div class="copyright">

        <p>
            © 2026 CyberSentinels. All Rights Reserved.
        </p>

    </div>

</footer>

<!-- ================= JAVASCRIPT ================= -->

<script src="script.js"></script>

</body>

</html>