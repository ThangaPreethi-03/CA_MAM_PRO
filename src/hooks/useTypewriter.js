import { useEffect, useRef, useState } from "react";

export default function useTypewriter(phases, totalDuration) {
  const fullText = phases.join("");
  const totalChars = fullText.length;
  const speed = Math.floor(totalDuration / totalChars);

  const [text, setText] = useState("");
  const [done, setDone] = useState(false);
  const [currentPhase, setCurrentPhase] = useState(0);

  const phaseRef = useRef(0);
  const indexRef = useRef(0);
  const intervalRef = useRef(null);

  const start = () => {
    clearInterval(intervalRef.current);
    setText("");
    setDone(false);
    setCurrentPhase(0);
    phaseRef.current = 0;
    indexRef.current = 0;

    intervalRef.current = setInterval(() => {
      const char = phases[phaseRef.current].charAt(indexRef.current);

      if (!char) {
        phaseRef.current++;
        indexRef.current = 0;
        setCurrentPhase(phaseRef.current);

        if (phaseRef.current >= phases.length) {
          clearInterval(intervalRef.current);
          setDone(true);
        }
        return;
      }

      setText((prev) => prev + char);
      indexRef.current++;
    }, speed);
  };

  useEffect(() => {
    start();
    return () => clearInterval(intervalRef.current);
  }, []);

  return { text, done, currentPhase, replay: start };
}
