import { useEffect, useState } from "react";

export default function Countdown({ onFinish }) {
  const [count, setCount] = useState(3);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (count === 1) {
      setTimeout(() => setFadeOut(true), 700);
      setTimeout(onFinish, 1200);
      return;
    }

    const timer = setTimeout(() => {
      setCount((c) => c - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [count, onFinish]);

  return (
    <div className={`countdown ${fadeOut ? "fade-out" : ""}`}>
      <h1 className={`countText glow-${count} ${count === 1 ? "shake" : ""}`}>
        {count}
      </h1>
    </div>
  );
}
