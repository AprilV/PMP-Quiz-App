import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Import Link
import "./Register.css";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match. Please try again.");
      return;
    }

    try {
      const response = await fetch("https://3.130.60.8/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      let data;
      try {
        data = await response.json();
      } catch (jsonError) {
        console.error("Invalid JSON Response:", jsonError);
        throw new Error("Unexpected server response");
      }

      if (response.ok) {
        setSuccess("Registration successful. You can now log in.");
        setTimeout(() => navigate("/login"), 2000);
      } else {
        setError(data?.message || "Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Registration Error:", error);
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <div className="register-background">
      <div className="register-container">
        <h2>Register</h2>
        <p>Create a new account by filling in the details below.</p>
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
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          <div className="input-group">
            <label>Confirm Password:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="register-button">
            Register
          </button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login here</Link>.
        </p>
      </div>
    </div>
  );
}

export default Register;
