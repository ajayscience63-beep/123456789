<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Users - CyberSentinels</title>

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

.card{
    background:#fff;
    padding:20px;
    border-radius:15px;
    box-shadow:0 2px 8px rgba(0,0,0,.1);
}

table{
    width:100%;
    border-collapse:collapse;
    margin-top:20px;
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
    padding:5px 10px;
    border-radius:20px;
    color:white;
    font-size:14px;
}

.active-status{
    background:green;
}

.inactive-status{
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
<i class="fas fa-home"></i>
Dashboard
</a>
</li>

<li class="active">
<a href="users.html">
<i class="fas fa-users"></i>
Users
</a>
</li>

<li>
<a href="projects.html">
<i class="fas fa-folder"></i>
Projects
</a>
</li>

<li>
<a href="messages.html">
<i class="fas fa-envelope"></i>
Messages
</a>
</li>

<li>
<a href="security.html">
<i class="fas fa-shield-alt"></i>
Security
</a>
</li>

<li>
<a href="reports.html">
<i class="fas fa-chart-line"></i>
Reports
</a>
</li>

<li>
<a href="settings.html">
<i class="fas fa-cog"></i>
Settings
</a>
</li>

<li class="logout">
<a href="login2.html">
<i class="fas fa-sign-out-alt"></i>
Logout
</a>
</li>

</ul>

</div>

<div class="main">

<div class="header">
<h1>Users</h1>

<input type="text" class="search" placeholder="Search users...">

</div>

<div class="card">

<h2>Registered Users</h2>

<table>

<thead>

<tr>
<th>ID</th>
<th>Name</th>
<th>Email</th>
<th>Role</th>
<th>Status</th>
</tr>

</thead>

<tbody>

<tr>
<td>001</td>
<td>Shree</td>
<td>shree@example.com</td>
<td>Admin</td>
<td><span class="status active-status">Active</span></td>
</tr>

<tr>
<td>002</td>
<td>Rahul</td>
<td>rahul@example.com</td>
<td>User</td>
<td><span class="status active-status">Active</span></td>
</tr>

<tr>
<td>003</td>
<td>Priya</td>
<td>priya@example.com</td>
<td>Manager</td>
<td><span class="status inactive-status">Inactive</span></td>
</tr>

<tr>
<td>004</td>
<td>Arun</td>
<td>arun@example.com</td>
<td>User</td>
<td><span class="status active-status">Active</span></td>
</tr>

<tr>
<td>005</td>
<td>Kavin</td>
<td>kavin@example.com</td>
<td>Security</td>
<td><span class="status active-status">Active</span></td>
</tr>

</tbody>

</table>

</div>

</div>

</body>
</html>