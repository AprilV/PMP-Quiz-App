import React, { useState, useEffect } from "react";
import Timer from "./Timer";
import Confetti from "./Confetti";
import "./PracticeExam.css"; // Import the new CSS file

const API_URL = "https://3.137.111.153/api/questions";


const PracticeExam = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [quizOver, setQuizOver] = useState(false);
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(0);
  const [testStarted, setTestStarted] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Failed to fetch questions");
        }
        const data = await response.json();
        setQuestions(data.slice(0, 180)); // Ensure 180 questions
        setLoading(false);
      } catch (err) {
        console.error("Error fetching questions:", err);
        setLoading(false);
      }
    };
    fetchQuestions();
  }, []);

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectedOption(null);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
      setSelectedOption(null);
    }
  };

  const handleOptionSelect = (index) => {
    setSelectedOption(index);
    if (questions[currentQuestionIndex].answers.includes(index)) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  const autoSubmit = () => {
    setQuizOver(true);
  };

  const endTest = () => {
    setQuizOver(true);
  };

  if (loading) return <div className="practice-exam-container">Loading questions...</div>;

  if (!testStarted) {
    return (
      <div className="practice-exam-background">
        <div className="practice-exam-container">
          <h2>Welcome to the PMP Practice Exam</h2>
          <p>
            This exam consists of 180 questions and will last for 3 hours and 50 minutes. You can navigate between questions using the Next and Previous buttons. The test will automatically submit when time runs out or you can end it manually.
          </p>
          <button className="start-test-button" onClick={() => setTestStarted(true)}>
            Start Test
          </button>
        </div>
      </div>
    );
  }

  if (quizOver) {
    const percentageScore = ((score / 180) * 100).toFixed(2);
    return (
      <div className="quiz-over">
        <Confetti />
        <div className="quiz-over-card fancy-score-display">
          <h2 className="quiz-over-title">🎉 Exam Completed! 🎉</h2>
          <p className="quiz-over-score">Your Score: <strong>{score} / 180</strong></p>
          <p className="quiz-over-percentage" style={{ color: 'black' }}>Percentage: <strong>{percentageScore}%</strong></p>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="questions-container">
      <h2>Practice Exam</h2>
      <p className="timer-label">Time Remaining:</p>
      <Timer initialTime={13800} onTimeUp={autoSubmit} />
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
      <p className="question-text">{currentQuestion.question}</p>
      <ul className="options-list">
        {currentQuestion.options.map((option, index) => (
          <li
            key={index}
            className={`option ${selectedOption === index ? "selected" : ""}`}
            onClick={() => handleOptionSelect(index)}
          >
            {option}
          </li>
        ))}
      </ul>
      <div className="quiz-buttons">
        <button onClick={handlePrev} disabled={currentQuestionIndex === 0}>Previous</button>
        <button onClick={handleNext} disabled={currentQuestionIndex === questions.length - 1}>Next</button>
        <button onClick={endTest} className="end-test-button">End Test</button>
      </div>
    </div>
  );
};

export default PracticeExam;