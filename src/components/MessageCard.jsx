import { useEffect, useState } from "react";

const text = `
🎉 Surpriseee! 🎉

You made this year brighter just by being you 💫
May 2025 bring smiles, success, and endless happiness 🌈
Let’s make more memories together 🥳
`;

export default function Message() {
  const [display, setDisplay] = useState("");
  let i = 0;

  useEffect(() => {
    const timer = setInterval(() => {
      setDisplay((prev) => prev + text.charAt(i));
      i++;
      if (i >= text.length) clearInterval(timer);
    }, 35);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="glass" style={card}>
      <h2>💖 A Special Message 💖</h2>
      <p style={{ whiteSpace: "pre-line" }}>{display}</p>
    </div>
  );
}

const card = {
  maxWidth: "560px",
  margin: "0 auto 50px",
  padding: "40px",
  textAlign: "center",
};
