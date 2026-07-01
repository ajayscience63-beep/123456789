<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>CyberSentinels - Login</title>

<style>

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Arial, Helvetica, sans-serif;
}

body{
height:100vh;
display:flex;
justify-content:center;
align-items:center;
background:url("cybsentinels.jpeg") center/cover no-repeat;
position:relative;
overflow:hidden;
}

body::before{
content:"";
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
background:rgba(0,0,0,.72);
}

.login-box{
position:relative;
z-index:1;
width:400px;
padding:40px;
background:rgba(15,20,40,.45);
backdrop-filter:blur(12px);
border-radius:15px;
border:1px solid rgba(255,255,255,.2);
box-shadow:0 0 25px rgba(0,0,0,.5);
text-align:center;
color:white;
}

.login-box h1{
font-size:42px;
margin-bottom:10px;
}

.login-box p{
margin-bottom:30px;
color:#ddd;
}

.input-box{
margin-bottom:18px;
}

.input-box input{
width:100%;
padding:14px;
border-radius:8px;
border:1px solid #3c8cff;
background:rgba(255,255,255,.05);
color:white;
font-size:16px;
outline:none;
}

.input-box input::placeholder{
color:#ccc;
}

button{
width:100%;
padding:14px;
border:none;
border-radius:8px;
background:#1565ff;
color:white;
font-size:18px;
cursor:pointer;
transition:.3s;
}

button:hover{
background:#0b4fd8;
}

.bottom-text{
margin-top:20px;
color:#ddd;
}

.bottom-text a{
color:#1e90ff;
text-decoration:none;
}

.bottom-text a:hover{
text-decoration:underline;
}

</style>
</head>

<<body onload="welcomeUser()">

<div class="login-box">

<h1>Login</h1>

<p>Welcome Back!</p>


<div class="input-box">
<input type="email" id="email" placeholder="Email" required>
</div>

<div class="input-box">
<input type="password" id="password" placeholder="Password" required>
</div>


<button type="button" onclick="loginUser()">
    Login
</button>

<br><br>

<button type="button" onclick="openAdmin()">
    Admin Login
</button>
<div class="bottom-text">
Don't have an account?
<a href="signup.html">Sign Up</a>
</div>

<form action="index.html"></form>
</form>

</div>

<script src="script.js"></script>

</body>
</html>

</div>

</html>