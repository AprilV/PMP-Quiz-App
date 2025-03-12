import React, { useState } from "react";
import "./Resources.css"; // Ensure we use the right CSS file for resources styling

function Resources() {
  const [selectedItem, setSelectedItem] = useState(null);

  // List of resource links
  const resources = [
    {
      title: "PMP Certification Info",
      link: "https://www.pmi.org/certifications/project-management-pmp",
      description:
        "Official PMI page for PMP certification details, including eligibility requirements, exam content, and application process.",
    },
    {
      title: "PMBOK Guide 7th Edition",
      link: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok",
      description:
        "The official PMBOK Guide 7th Edition, which is the primary reference for the PMP exam. Covers principles, performance domains, and tailoring.",
    },
    {
      title: "PMP Exam Prep Resources",
      link: "https://www.pmi.org/learning/library/pmp-exam-prep-resources-11766",
      description:
        "A collection of study resources, including articles, webinars, and practice questions, curated by PMI.",
    },
    {
      title: "Udemy PMP Course (35 Contact Hours)",
      link: "https://www.udemy.com/course/pmp-certification-exam-prep-course-pmbok-6th-edition/?couponCode=ST10MT30325G2",
      description:
        "A comprehensive Udemy course that fulfills the 35 contact hours requirement and includes video lectures, practice exams, and study materials.",
    },
    {
      title: "YouTube PMP Prep Playlist",
      link: "https://www.youtube.com/results?search_query=pmp+prep+playlist",
      description:
        "A curated YouTube playlist with free video tutorials, tips, and tricks for PMP exam preparation.",
    },
  ];

  return (
    <div className="resources-background">
      <div className="content">
        <h1 className="page-title">PMP Test Categories</h1>
        <p className="intro-text">
          <strong>
            Here are some helpful materials and tips to prepare for the PMP exam
            (PMBOK 7th Edition).
          </strong>
        </p>
        <ul className="study-tools">
          {resources.map((resource, index) => (
            <li
              key={index}
              className={selectedItem === index ? "selected" : ""}
              onClick={() => setSelectedItem(index)}
            >
              <a href={resource.link} target="_blank" rel="noopener noreferrer">
                {resource.title}
              </a>
              <p>{resource.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Resources;
