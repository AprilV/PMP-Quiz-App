import React from "react";
import "./Resources.css"; // Ensure we use the right CSS file for resources styling

function Resources() {
  return (
    <div className="content">
      <h1 className="page-title">Study Resources</h1>
      <p>Here are some helpful materials and tips to prepare for the PMP exam.</p>
      <ul className="study-tools">
        <li>
          <a
            href="https://www.pmi.org/certifications/project-management-pmp"
            target="_blank"
            rel="noopener noreferrer"
          >
            PMP Certification Info
          </a>
        </li>
        <li>
          <a
            href="https://www.mockexam.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mock Exam Practice
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Resources;
