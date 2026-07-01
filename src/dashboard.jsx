import { Link } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="container">
      <aside className="sidebar">
        <div className="logo">CyberSentinels</div>
        <ul className="menu">
          <li><Link to="/dashboard"><i className="fa-solid fa-gauge-high"></i> Dashboard</Link></li>
          <li><Link to="/security"><i className="fa-solid fa-shield-halved"></i> Security</Link></li>
          <li><Link to="/projects"><i className="fa-solid fa-diagram-project"></i> Projects</Link></li>
          <li><Link to="/users"><i className="fa-solid fa-users"></i> Users</Link></li>
          <li><Link to="/messages"><i className="fa-solid fa-envelope"></i> Messages</Link></li>
        </ul>
        <div className="logout">
          <Link to="/login"><i className="fa-solid fa-right-from-bracket"></i> Logout</Link>
        </div>
      </aside>

      <main className="main">
        <div className="topbar">
          <div className="search">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search..." />
          </div>
          <div className="profile">
            <i className="fa-solid fa-bell"></i>
            <i className="fa-solid fa-circle-user"></i>
          </div>
        </div>

        <div className="banner">
          <h1>Welcome back!</h1>
          <p>Here's what's happening with your security incidents today.</p>
        </div>

        <div className="cards">
          <div className="card">
            <h3>Open Incidents</h3>
            <p>12</p>
          </div>
          <div className="card">
            <h3>Resolved</h3>
            <p>48</p>
          </div>
          <div className="card">
            <h3>Vulnerabilities</h3>
            <p>7</p>
          </div>
          <div className="card">
            <h3>Active Users</h3>
            <p>230</p>
          </div>
        </div>

        <div className="bottom-grid">
          <div className="box large">
            <h3>Incident Trends</h3>
            <div className="bars">
              <div className="bar active" style={{ height: "60%" }}></div>
              <div className="bar" style={{ height: "40%" }}></div>
              <div className="bar active" style={{ height: "80%" }}></div>
              <div className="bar" style={{ height: "30%" }}></div>
              <div className="bar active" style={{ height: "55%" }}></div>
            </div>
          </div>

          <div className="box payment">
            <h3>Resolution Rate</h3>
            <div className="circle">
              <div className="inner-circle">70%</div>
            </div>
            <div className="legend">
              <p><span className="blue"></span>Resolved</p>
              <p><span className="green"></span>Pending</p>
            </div>
            <button className="view-btn">View Report</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
