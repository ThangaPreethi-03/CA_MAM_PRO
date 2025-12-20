import { useEffect } from "react";

const emojis = ["🎉", "✨", "🎊", "💖", "🥳", "🎈"];

export default function EmojiRain() {
  useEffect(() => {
    const interval = setInterval(() => {
      const emoji = document.createElement("div");
      emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
      emoji.style.position = "fixed";
      emoji.style.left = Math.random() * 100 + "vw";
      emoji.style.top = "-30px";
      emoji.style.fontSize = "28px";
      emoji.style.animation = "emojiFall 4s linear";
      emoji.style.zIndex = 999;

      document.body.appendChild(emoji);

      setTimeout(() => emoji.remove(), 4000);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return null;
}
