import React from "react";

function ProgressTracker({ currentQuestion, totalQuestions }) {
  return (
    <div className="progress-tracker">
      Question {currentQuestion} of {totalQuestions}
    </div>
  );
}

export default ProgressTracker;
