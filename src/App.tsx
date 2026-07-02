import { Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import About from "./about.jsx";
import Contact from "./contact.jsx";
import Login from "./login.jsx";
import Signup from "./signup.jsx";
import AdminLogin from "./AdminLogin.jsx";
import Dashboard from "./dashboard.jsx";
import Security from "./security.jsx";
import User from "./user.jsx";
import Project from "./project.jsx";
import Message from "./message.jsx";
import PrivacyPolicy from "./PrivacyPolicy.jsx";
import Terms from "./terms.jsx";
import "./App.css";
import "./style.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/security" element={<Security />} />
      <Route path="/users" element={<User />} />
      <Route path="/projects" element={<Project />} />
      <Route path="/messages" element={<Message />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<Terms />} />
    </Routes>
  );
}

export default App;
