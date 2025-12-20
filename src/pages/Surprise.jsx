import Confetti from "react-confetti";
import { useEffect, useState } from "react";
import Message from "../components/MessageCard";
import Gallery from "../components/ImageGallery";
import BackgroundMusic from "../components/BackgroundMusic";


export default function Surprise() {
  const [confetti, setConfetti] = useState(true);

  useEffect(() => {
    setTimeout(() => setConfetti(false), 7000);
  }, []);

  return (
    
    <div style={wrap}>
        <BackgroundMusic />

      {confetti && <Confetti gravity={0.18} />}
      <Message />
      <Gallery />
    </div>
  );
}

const wrap = {
  minHeight: "100vh",
  padding: "24px",
  textAlign: "center",
};
