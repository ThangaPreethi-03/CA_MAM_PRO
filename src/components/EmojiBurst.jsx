import { useEffect } from "react";

const emojis = ["🎉", "🎊", "✨", "💖", "🥳", "🎈"];

export default function EmojiBurst() {
  useEffect(() => {
    for (let i = 0; i < 25; i++) {
      const e = document.createElement("span");
      e.innerText = emojis[Math.floor(Math.random() * emojis.length)];
      e.style.position = "fixed";
      e.style.left = "50%";
      e.style.top = "40%";
      e.style.fontSize = "26px";
      e.style.transform = `translate(-50%, -50%) rotate(${Math.random() * 360}deg)`;
      e.style.animation = `burst 2s ease-out forwards`;
      e.style.setProperty("--x", `${Math.random() * 400 - 200}px`);
      e.style.setProperty("--y", `${Math.random() * -300}px`);
      e.style.zIndex = 999;

      document.body.appendChild(e);
      setTimeout(() => e.remove(), 2000);
    }
  }, []);

  return null;
}
