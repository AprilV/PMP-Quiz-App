import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
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
import ProtectedRoute from "./ProtectedRoute"; // ✅ Import ProtectedRoute
import "./App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );

  // Log isAuthenticated state
  console.log("🔍 isAuthenticated:", isAuthenticated); // Debugging line

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("token");
      setIsAuthenticated(!!token); // ✅ Ensures React state updates properly
    };

    checkAuth(); // ✅ Run immediately on page load
    window.addEventListener("storage", checkAuth);

    // Clear token on page unload (close or refresh)
    const handleBeforeUnload = () => {
      localStorage.removeItem("token"); // Clear token when the app is closed
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    // Cleanup
    return () => {
      window.removeEventListener("storage", checkAuth);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
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
      <div>
        <header>
          <MyAppNav isAuthenticated={isAuthenticated} onLogout={handleLogout} />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/resources" element={<Resources />} />

          {/* ✅ Pass `isAuthenticated` to `ProtectedRoute` */}
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
