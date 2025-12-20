import { useState } from "react";
import { motion } from "framer-motion";

export default function GiftBox() {
  const [opened, setOpened] = useState(false);

  return (
    <div className="gift-container">
      {!opened ? (
        <motion.div
          className="gift-box"
          onClick={() => setOpened(true)}
          whileTap={{ scale: 0.95 }}
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          {/* LID */}
          <motion.div
            className="gift-lid"
            animate={{ rotate: opened ? -35 : 0, y: opened ? -40 : 0 }}
            transition={{ duration: 0.6 }}
          />

          {/* BOX */}
          <div className="gift-body">
            <div className="ribbon-vertical" />
            <div className="ribbon-horizontal" />
          </div>

          <span className="tap-text">Tap to open 🎁</span>
        </motion.div>
      ) : (
        <motion.div
          className="gift-open"
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <div className="sparkles">
            {Array.from({ length: 14 }).map((_, i) => (
              <span key={i}>✨</span>
            ))}
          </div>

          <p className="gift-message">
            This surprise was made with love 💖
          </p>
        </motion.div>
      )}
    </div>
  );
}
