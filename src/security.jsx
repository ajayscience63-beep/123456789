<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Security - CyberSentinels</title>

<link rel="stylesheet" href="style.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">

<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial, Helvetica, sans-serif;
}

body{
    display:flex;
    background:#f5f7fb;
}

.sidebar{
    width:250px;
    height:100vh;
    background:#fff;
    position:fixed;
    left:0;
    top:0;
    border-right:1px solid #ddd;
}

.logo{
    text-align:center;
    padding:25px;
    color:#3b5bdb;
}

.menu{
    list-style:none;
    padding:15px;
}

.menu li{
    margin:10px 0;
}

.menu li a{
    display:flex;
    align-items:center;
    gap:15px;
    text-decoration:none;
    color:#333;
    padding:12px;
    border-radius:10px;
    transition:.3s;
}

.menu li a:hover,
.menu li.active a{
    background:#3b5bdb;
    color:#fff;
}

.logout{
    position:absolute;
    bottom:20px;
    width:88%;
}

.main{
    margin-left:250px;
    width:100%;
    padding:30px;
}

.header{
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:25px;
}

.search{
    width:300px;
    padding:10px;
    border:1px solid #ccc;
    border-radius:20px;
}

.cards{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
    gap:20px;
    margin-bottom:30px;
}

.card{
    background:#fff;
    border-radius:15px;
    padding:20px;
    box-shadow:0 2px 8px rgba(0,0,0,.1);
}

.card h3{
    color:#3b5bdb;
    margin-bottom:10px;
}

table{
    width:100%;
    border-collapse:collapse;
    background:#fff;
    border-radius:15px;
    overflow:hidden;
    box-shadow:0 2px 8px rgba(0,0,0,.1);
}

th{
    background:#3b5bdb;
    color:white;
}

th,td{
    padding:15px;
    border-bottom:1px solid #ddd;
    text-align:left;
}

tr:hover{
    background:#f1f5ff;
}

.status{
    padding:5px 12px;
    border-radius:20px;
    color:#fff;
    font-size:13px;
}

.safe{
    background:#28a745;
}

.warning{
    background:#ffc107;
    color:#000;
}

.danger{
    background:#dc3545;
}
</style>

</head>

<body>

<div class="sidebar">

<h2 class="logo">CyberSentinels</h2>

<ul class="menu">

<li>
<a href="dashboard.html">
<i class="fas fa-home"></i> Dashboard
</a>
</li>

<li>
<a href="users.html">
<i class="fas fa-users"></i> Users
</a>
</li>

<li>
<a href="projects.html">
<i class="fas fa-folder"></i> Projects
</a>
</li>

<li>
<a href="messages.html">
<i class="fas fa-envelope"></i> Messages
</a>
</li>

<li class="active">
<a href="security.html">
<i class="fas fa-shield-alt"></i> Security
</a>
</li>

<li>
<a href="reports.html">
<i class="fas fa-chart-line"></i> Reports
</a>
</li>

<li>
<a href="settings.html">
<i class="fas fa-cog"></i> Settings
</a>
</li>

<li class="logout">
<a href="login.html">
<i class="fas fa-sign-out-alt"></i> Logout
</a>
</li>

</ul>

</div>

<div class="main">

<div class="header">
<h1>Security Dashboard</h1>

<input type="text" class="search" placeholder="Search security logs...">
</div>

<div class="cards">

<div class="card">
<h3>Threats Blocked</h3>
<h2>1,254</h2>
</div>

<div class="card">
<h3>Firewall Status</h3>
<h2>Active</h2>
</div>

<div class="card">
<h3>System Health</h3>
<h2>98%</h2>
</div>

<div class="card">
<h3>Alerts Today</h3>
<h2>12</h2>
</div>

</div>

<table>

<thead>

<tr>
<th>ID</th>
<th>Security Event</th>
<th>Date</th>
<th>Status</th>
</tr>

</thead>

<tbody>

<tr>
<td>SEC001</td>
<td>Firewall Updated</td>
<td>30 Jun 2026</td>
<td><span class="status safe">Completed</span></td>
</tr>

<tr>
<td>SEC002</td>
<td>Unauthorized Login Attempt</td>
<td>30 Jun 2026</td>
<td><span class="status warning">Blocked</span></td>
</tr>

<tr>
<td>SEC003</td>
<td>Malware Scan</td>
<td>29 Jun 2026</td>
<td><span class="status safe">Clean</span></td>
</tr>

<tr>
<td>SEC004</td>
<td>Suspicious Network Activity</td>
<td>29 Jun 2026</td>
<td><span class="status danger">Investigating</span></td>
</tr>

<tr>
<td>SEC005</td>
<td>Password Policy Updated</td>
<td>28 Jun 2026</td>
<td><span class="status safe">Completed</span></td>
</tr>

</tbody>

</table>

</div>

</body>
</html>