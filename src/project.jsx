<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Projects - CyberSentinels</title>

<link rel="stylesheet" href="style.css">

<link rel="stylesheet"
href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">

<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial,Helvetica,sans-serif;
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
    padding:25px;
    color:#3b5bdb;
    text-align:center;
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
    padding:10px 15px;
    width:300px;
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
    padding:20px;
    border-radius:15px;
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
    text-align:left;
    border-bottom:1px solid #ddd;
}

tr:hover{
    background:#f2f2f2;
}

.status{
    padding:6px 12px;
    border-radius:20px;
    color:white;
    font-size:13px;
}

.completed{
    background:green;
}

.progress{
    background:orange;
}

.pending{
    background:red;
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

<li class="active">
<a href="projects.html">
<i class="fas fa-folder"></i> Projects
</a>
</li>

<li>
<a href="messages.html">
<i class="fas fa-envelope"></i> Messages
</a>
</li>

<li>
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
<h1>Projects</h1>

<input type="text" class="search" placeholder="Search Projects...">
</div>

<div class="cards">

<div class="card">
<h3>Total Projects</h3>
<h1>25</h1>
</div>

<div class="card">
<h3>Completed</h3>
<h1>18</h1>
</div>

<div class="card">
<h3>In Progress</h3>
<h1>5</h1>
</div>

<div class="card">
<h3>Pending</h3>
<h1>2</h1>
</div>

</div>

<table>

<thead>

<tr>
<th>Project ID</th>
<th>Project Name</th>
<th>Team</th>
<th>Deadline</th>
<th>Status</th>
</tr>

</thead>

<tbody>

<tr>
<td>P001</td>
<td>Cyber Threat Detection</td>
<td>Security Team</td>
<td>15 Jul 2026</td>
<td><span class="status completed">Completed</span></td>
</tr>

<tr>
<td>P002</td>
<td>Network Monitoring</td>
<td>Infrastructure</td>
<td>30 Jul 2026</td>
<td><span class="status progress">In Progress</span></td>
</tr>

<tr>
<td>P003</td>
<td>Firewall Upgrade</td>
<td>IT Team</td>
<td>05 Aug 2026</td>
<td><span class="status pending">Pending</span></td>
</tr>

<tr>
<td>P004</td>
<td>Cloud Security Audit</td>
<td>Cloud Team</td>
<td>12 Aug 2026</td>
<td><span class="status progress">In Progress</span></td>
</tr>

<tr>
<td>P005</td>
<td>Data Encryption</td>
<td>Security Team</td>
<td>20 Aug 2026</td>
<td><span class="status completed">Completed</span></td>
</tr>

</tbody>

</table>

</div>

</body>
</html>