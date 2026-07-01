<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Messages - CyberSentinels</title>

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

.card{
    background:#fff;
    border-radius:15px;
    padding:20px;
    box-shadow:0 2px 8px rgba(0,0,0,.1);
}

.message{
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:15px;
    border-bottom:1px solid #eee;
}

.message:last-child{
    border-bottom:none;
}

.name{
    font-weight:bold;
}

.time{
    color:gray;
    font-size:13px;
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

<li class="active">
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
<h1>Messages</h1>

<input type="text" class="search" placeholder="Search messages...">
</div>

<div class="card">

<div class="message">
<div>
<div class="name">Shree</div>
<div>Please review the latest security report.</div>
</div>
<div class="time">10:15 AM</div>
</div>

<div class="message">
<div>
<div class="name">Rahul</div>
<div>Project documentation has been uploaded.</div>
</div>
<div class="time">09:40 AM</div>
</div>

<div class="message">
<div>
<div class="name">Priya</div>
<div>The server maintenance is completed.</div>
</div>
<div class="time">Yesterday</div>
</div>

<div class="message">
<div>
<div class="name">Arun</div>
<div>Please approve the new firewall settings.</div>
</div>
<div class="time">Yesterday</div>
</div>

<div class="message">
<div>
<div class="name">Kavin</div>
<div>Security audit meeting at 3:00 PM.</div>
</div>
<div class="time">2 Days Ago</div>
</div>

</div>

</div>

</body>
</html>