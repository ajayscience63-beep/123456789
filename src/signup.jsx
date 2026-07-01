import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/login");
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
    background:url("/cybersentinels.jpeg") no-repeat center center/cover;
    position:relative;
    overflow:hidden;
}

/* Dark Overlay */
body::before{
    content:"";
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.70);
}

/* Signup Box */
.signup-box{
    position:relative;
    z-index:1;
    width:400px;
    padding:40px;
    background:rgba(15,20,40,0.45);
    border:1px solid rgba(255,255,255,0.15);
    backdrop-filter:blur(12px);
    border-radius:15px;
    text-align:center;
    color:white;
    box-shadow:0 0 25px rgba(0,0,0,.5);
}

.signup-box h1{
    margin-bottom:10px;
    font-size:42px;
}

.signup-box p{
    color:#d8d8d8;
    margin-bottom:30px;
}

/* Input */

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

/* Button */

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
`}</style>
      <div className="page-signup">
        <div className="signup-box">

        <h1>Sign Up</h1>

        <p>Create your account to get started</p>

        <form onSubmit={handleSubmit}>

        <div className="input-box">
        <input type="text" placeholder="Full Name" required />
        </div>

        <div className="input-box">
        <input type="email" placeholder="Email" required />
        </div>

        <div className="input-box">
        <input type="password" placeholder="Password" required />
        </div>

        <div className="input-box">
        <input type="password" placeholder="Confirm Password" required />
        </div>

        <button type="submit">Sign Up</button>

        <div className="bottom-text">
        Already have an account?
        <Link to="/login">Login</Link>
        </div>

        </form>

        </div>
      </div>
    </>
  );
}

export default Signup;
