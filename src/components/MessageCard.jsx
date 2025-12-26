import { useEffect, useState } from "react";
import useTypewriter from "../hooks/useTypewriter";

const phases = [
  "Surpriseee! 🎉\n\nHAPPY NEW YEAR 2026! 💫\n\n",
  "Wishing you a year filled with joy, adventure and all your heart's desires! 🌈\n\n",
  "May your dreams turn into plans and your goals into achievements 🥳\n\n",
  "Here's to new beginnings, fresh starts and making unforgettable memories! 🎈",
];

export default function MessageCard({ onLastPhaseStart }) {
  const { text, done, replay, currentPhase } = useTypewriter(phases, 29000);
  const [glow, setGlow] = useState(false);

  // Glow card while typing
  useEffect(() => {
    setGlow(true);
  }, []);

  // Trigger callback when last phase starts
  useEffect(() => {
    if (currentPhase === phases.length - 1 && onLastPhaseStart) {
      onLastPhaseStart();
    }
  }, [currentPhase, onLastPhaseStart]);

  return (
    <div className={`glass ${glow ? "final-glow" : ""}`} style={card}>
      <h2>💖 A New Year Message 💖</h2>
      <p style={{ whiteSpace: "pre-line" }}>{text}</p>
      {done && (
        <button onClick={replay} style={btn}>
          🔁 Replay
        </button>
      )}
    </div>
  );
}

const card = {
  maxWidth: "580px",
  padding: "42px",
  textAlign: "center",
  transition: "all 0.5s ease",
};

const btn = {
  marginTop: "25px",
  padding: "10px 20px",
  borderRadius: "20px",
  border: "none",
  cursor: "pointer",
  fontSize: "16px",
};
