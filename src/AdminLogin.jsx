import { Link, useNavigate } from "react-router-dom";

function AdminLogin() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <>
      <style>{`
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
background:url("/cybersentinels.jpeg") center/cover no-repeat;
position:relative;
overflow:hidden;
}

/* dark overlay */
body::before{
content:"";
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
background:rgba(0,0,0,.75);
}

.admin-box{
position:relative;
z-index:1;
width:400px;
padding:40px;
background:rgba(15,20,40,.55);
backdrop-filter:blur(14px);
border-radius:15px;
border:1px solid rgba(255,255,255,.2);
box-shadow:0 0 25px rgba(0,0,0,.6);
text-align:center;
color:white;
}

.admin-box h1{
font-size:38px;
margin-bottom:10px;
color:#ff3b3b;
}

.admin-box p{
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
border:1px solid #ff3b3b;
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
background:#ff3b3b;
color:white;
font-size:18px;
cursor:pointer;
transition:.3s;
}

button:hover{
background:#d62828;
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
`}</style>
      <div className="page-adminlogin">
        <div className="admin-box">

        <h1>Admin Login</h1>
        <p>Secure Access Only</p>

        <form onSubmit={handleSubmit}>

        <div className="input-box">
        <input type="email" placeholder="Admin Email" required />
        </div>

        <div className="input-box">
        <input type="password" placeholder="Password" required />
        </div>

        <button type="submit">Login</button>

        <div className="bottom-text">
        Back to User Login?
        <a href="/login">User Login</a>
        </div>

        </form>

        </div>
      </div>
    </>
  );
}

export default AdminLogin;
