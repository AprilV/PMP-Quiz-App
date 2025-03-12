import React from "react";
import Confetti from "react-confetti";

export default function ConfettiComponent() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    >
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        numberOfPieces={200}
        recycle={false} // Stop confetti after a while
        colors={["#FF5733", "#33FF57", "#5733FF", "#FCEEB5", "#EE786E"]}
      />
    </div>
  );
}
