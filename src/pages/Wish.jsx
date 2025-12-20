import { useState } from "react";
import { motion } from "framer-motion";
import Gift from "../components/GiftBox";
import FireworkIcon from "../components/FireworkIcon";
import Countdown from "../components/Countdown";
import Fireworks from "../components/Fireworks";

export default function Wish() {
  const name = localStorage.getItem("name");
  const [showWish, setShowWish] = useState(false);

  if (!showWish) {
    return <Countdown onFinish={() => setShowWish(true)} />;
  }

  return (
    <>
      {/* Fireworks exactly when Wish page appears */}
      <Fireworks show={true} />

      <motion.div
        style={hero}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.35 },
          },
        }}
      >
        {/* TITLE */}
        <motion.div
          style={titleRow}
          variants={item}
        >
          <FireworkIcon delay={0} />
          <h1 className="neonTitle">Happy New Year 2025</h1>
          <FireworkIcon delay={0.8} />
        </motion.div>

        {/* NAME */}
        <motion.h2 variants={item}>
          {name} 💖
        </motion.h2>

        {/* TEXT */}
        <motion.p variants={item}>
          Tap the gift to unlock your surprise 🎁
        </motion.p>

        {/* GIFT */}
        <motion.div variants={item}>
          <Gift />
        </motion.div>
      </motion.div>
    </>
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

const hero = {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "22px",
  textAlign: "center",
  padding: "20px",
};

const titleRow = {
  display: "flex",
  alignItems: "center",
  gap: "14px",
  flexWrap: "wrap",
  justifyContent: "center",
};
