import { useEffect, useRef } from "react";
import music from "../assets/music.mp3";

export default function BackgroundMusic() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    audio.volume = 0;
    audio.play().catch(() => {});

    let volume = 0;
    const fade = setInterval(() => {
      if (volume < 0.35) {
        volume += 0.01;
        audio.volume = volume;
      } else {
        clearInterval(fade);
      }
    }, 200);

    return () => audio.pause();
  }, []);

  return <audio ref={audioRef} loop src={music} />;
}
