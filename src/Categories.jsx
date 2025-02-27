import React from "react";
import { Link } from "react-router-dom";
import "./Categories.css";

function Categories() {
  const categories = [
    { name: "Scope Management", icon: "📋" },
    { name: "Cost Management", icon: "💰" },
    { name: "Time Management", icon: "⏰" },
    { name: "Quality Management", icon: "✅" },
    { name: "Risk Management", icon: "⚠️" },
    { name: "Procurement Management", icon: "📦" },
    { name: "Communication Management", icon: "📢" },
    { name: "Stakeholder Management", icon: "👥" },
  ];

  return (
    <div className="categories-page">
      {/* Hero Section */}
      <div className="categories-hero">
        <h1>Select Your Study Category</h1>
        <p>Choose a category to start your practice questions.</p>
      </div>

      {/* Categories Grid */}
      <div className="categories-grid">
        {categories.map((category, index) => (
          <Link
            to={`/quiz/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
            key={index}
            className="category-link"
          >
            <div className="category-card">
              <span role="img" aria-label={category.name} className="category-icon">
                {category.icon}
              </span>
              <h3 className="category-name">{category.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Categories;

