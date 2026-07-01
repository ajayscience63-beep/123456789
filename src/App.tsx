import { Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import AdminLogin from "./AdminLogin.jsx";
import Dashboard from "./Dashboard.jsx";
import Security from "./Security.jsx";
import User from "./User.jsx";
import Project from "./Project.jsx";
import Message from "./Message.jsx";
import PrivacyPolicy from "./PrivacyPolicy.jsx";
import Terms from "./Terms.jsx";
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
