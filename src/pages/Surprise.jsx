import Confetti from "react-confetti";
import { useEffect, useState } from "react";
import MessageCard from "../components/MessageCard";
import BackgroundMusic from "../components/BackgroundMusic";

export default function Surprise() {
  const [confetti, setConfetti] = useState(true);
  const [heavierConfetti, setHeavierConfetti] = useState(false);

  useEffect(() => {
    // Stop first burst after 6s
    const stop1 = setTimeout(() => setConfetti(false), 6000);
    return () => clearTimeout(stop1);
  }, []);

  // Trigger heavier confetti when last line starts
  const handleLastPhaseStart = () => {
    setHeavierConfetti(true);
    setTimeout(() => setHeavierConfetti(false), 7000); // 7s heavy confetti
  };

  return (
    <div style={wrap}>
      <BackgroundMusic />

      {/* Initial light confetti */}
      {confetti && <Confetti gravity={0.15} numberOfPieces={200} recycle={false} />}

      {/* Heavier confetti for last line */}
      {heavierConfetti && <Confetti gravity={0.12} numberOfPieces={400} recycle={false} />}

      <MessageCard onLastPhaseStart={handleLastPhaseStart} />
    </div>
  );
}

const wrap = {
  minHeight: "100vh",
  padding: "24px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
