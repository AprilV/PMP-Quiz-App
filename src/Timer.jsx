import React, { useState, useEffect } from "react";

function Timer({ initialTime }) {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <div className="timer">
      Time Remaining: {timeLeft} seconds
    </div>
  );
}

export default Timer;
