import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import MyAppNav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import Categories from "./Categories";
import Resources from "./Resources";
import PracticeExam from "./PracticeExam";
import QuestionsPage from "./QuestionsPage";
import Login from "./Login";
import Register from "./Register";
import ProtectedRoute from "./ProtectedRoute";
import "./App.css";

// ✅ Google Analytics Initialization
function initGoogleAnalytics() {
  if (!window.gtag) {
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-QM6RLSW31N";
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      window.gtag = gtag;
      gtag("js", new Date());
      gtag("config", "G-QM6RLSW31N");
      console.log("✅ Google Analytics Initialized");
    };
  }
}

// ✅ Google Analytics Page Tracking (Fixed)
function TrackPageView() {
  const location = useLocation();

  useEffect(() => {
    const waitForGA = setInterval(() => {
      if (window.gtag) {
        console.log("✅ Google Analytics is now available.");
        window.gtag("config", "G-QM6RLSW31N", {
          page_path: location.pathname,
        });
        clearInterval(waitForGA);
      } else {
        console.warn("⏳ Waiting for Google Analytics to initialize...");
      }
    }, 500); // Check every 500ms

    return () => clearInterval(waitForGA);
  }, [location]);

  return null;
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );

  useEffect(() => {
    initGoogleAnalytics(); // ✅ Ensures GA is initialized
    const checkAuth = () => {
      const token = localStorage.getItem("token");
      setIsAuthenticated(!!token);
    };

    checkAuth();
    window.addEventListener("storage", checkAuth);
    return () => window.removeEventListener("storage", checkAuth);
  }, []);

  const handleLogin = (token) => {
    localStorage.setItem("token", token);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <Router basename="/PMP-Quiz-App">
      <TrackPageView />
      <div>
        <header>
          <MyAppNav isAuthenticated={isAuthenticated} onLogout={handleLogout} />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/resources" element={<Resources />} />
          <Route
            path="/categories"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Categories />
              </ProtectedRoute>
            }
          />
          <Route
            path="/practice-exam"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <PracticeExam />
              </ProtectedRoute>
            }
          />
          <Route
            path="/quiz/:category"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <QuestionsPage />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
