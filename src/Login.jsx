import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css'; // Ensure this path is correct

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      // Update the API endpoint to use HTTPS
      const response = await fetch("https://3.130.60.8/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      let data;
      try {
        data = await response.json();
      } catch (jsonError) {
        console.error("Invalid JSON Response:", jsonError);
        throw new Error("Unexpected server response");
      }

      if (response.ok) {
        onLogin(data.token);
        setSuccess("Login successful! Redirecting...");
        setTimeout(() => navigate("/categories"), 2000);
      } else {
        setError(data?.message || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Login Error:", error);
      setError("Login failed. Please try again.");
    }
  };

  return (
    <div className="login-background">
      <div className="login-container">
        <h2>Login</h2>
        <p>Please enter your username and password to access your account.</p>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;