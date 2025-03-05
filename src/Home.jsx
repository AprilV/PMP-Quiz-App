import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./Home.css"; // Import Home.css

const Home = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle button click
  const handleGetStarted = () => {
    navigate("/categories"); // Redirect to the Categories page
  };

  return (
    <div className="home-background">
      <div className="home-container">
        <h1 className="home-title">Welcome to the PMP Quiz App</h1>
        <p className="home-subtitle">
          Prepare for your PMP exam with our practice questions.
        </p>
        <button className="home-button" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;