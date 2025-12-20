import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function GiftBox() {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);

  const openGift = () => {
    if (clicked) return;
    setClicked(true);

    // small delay for animation, then go to surprise page
    setTimeout(() => {
      navigate("/surprise");
    }, 900);
  };

  return (
    <div
      onClick={openGift}
      className={`giftEmoji ${clicked ? "giftOpen" : ""}`}
    >
      🎁
    </div>
  );
}
