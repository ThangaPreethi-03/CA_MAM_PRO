import { useState } from "react";
import { motion } from "framer-motion";
import Gift from "../components/GiftBox";
import FireworkIcon from "../components/FireworkIcon";
import Countdown from "../components/Countdown";

export default function Wish() {
  const name = localStorage.getItem("name");
  const [showWish, setShowWish] = useState(false);

  if (!showWish) {
    return <Countdown onFinish={() => setShowWish(true)} />;
  }

  return (
    <div className="wish-wrapper">
      <motion.div
        className="wish-card"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.3 } },
        }}
      >
        {/* TITLE */}
        <motion.div
          className="wish-title"
          variants={item}
        >
          <FireworkIcon delay={0} />
          <h1 className="neonTitle">Happy New Year 2026</h1>
          <FireworkIcon delay={0.6} />
        </motion.div>

        {/* NAME */}
        <motion.h2 className="wish-name" variants={item}>
          {name} 💖
        </motion.h2>

        {/* TEXT */}
        <motion.p className="wish-text" variants={item}>
          A small surprise is waiting just for you 🎁
        </motion.p>

        {/* GIFT */}
        <motion.div className="wish-gift" variants={item}>
          <Gift />
        </motion.div>
      </motion.div>
    </div>
  );
}

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};
