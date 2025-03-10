import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./App.css";

function MyAppNav() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("authToken");
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("authToken");
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-link" end>
        Home
      </NavLink>
      <NavLink to="/categories" className="nav-link" end>
        PMP Test Categories
      </NavLink>
      <NavLink to="/practice-exam" className="nav-link">
        PMP Practice Exam
      </NavLink>
      <NavLink to="/resources" className="nav-link">
        Resources
      </NavLink>

      {isAuthenticated ? (
        <button onClick={handleLogout} className="nav-link logout-button">
          Logout
        </button>
      ) : (
        <>
          <NavLink to="/login" className="nav-link">
            Login
          </NavLink>
          <NavLink to="/register" className="nav-link">
            Register
          </NavLink>
        </>
      )}

      <motion.svg
        className="react-logo"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 841.9 595.3"
        width="40"
        height="40"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      >
        <g fill="none" stroke="white" strokeWidth="20">
          <ellipse cx="420.9" cy="296.5" rx="120.9" ry="296.5" />
          <ellipse cx="420.9" cy="296.5" rx="120.9" ry="296.5" transform="rotate(60,420.9,296.5)" />
          <ellipse cx="420.9" cy="296.5" rx="120.9" ry="296.5" transform="rotate(-60,420.9,296.5)" />
        </g>
        <circle cx="420.9" cy="296.5" r="35" fill="white" />
      </motion.svg>
    </nav>
  );
}

export default MyAppNav;
