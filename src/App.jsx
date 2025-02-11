import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyAppNav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import Categories from "./Categories";
import Resources from "./Resources";
import PracticeExam from "./PracticeExam";
import QuestionsPage from "./QuestionsPage"; // Ensure this import is correct
import "./App.css";

function App() {
  return (
    <Router basename="/PMP-Quiz-App"> {/* Ensure base path is correct */}
      <div>
        <header>
          <MyAppNav />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/practice-exam" element={<PracticeExam />} />
          <Route path="/quiz/:category" element={<QuestionsPage />} /> {/* Updated route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;