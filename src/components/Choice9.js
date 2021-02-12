import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function Choice9({
  addProgress,
  setQuestion,
  question,
  addScore,
  nine,
  setNine,
  setTooltip,
}) {
  const updateProgressYes = () => {
    addProgress(10);
    addScore();
    setQuestion({ ...question, nine: false, ten: true });
    setNine([...nine, true]);
  };

  const updateProgressNo = () => {
    addProgress(10);
    setQuestion({ ...question, nine: false, ten: true });
    setNine([...nine, false]);
  };

  useEffect(() => {
    setTooltip(
      "If you feel passionate about an item, it would probably be the last thing you would discard."
    );
  });

  return (
    <motion.div
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "-30%" }}
      transition={{ type: "spring", stiffness: 70, duration: 0.5 }}
    >
      <div className="question-group">
        <p>Do you feel passionate about this item?</p>
        <div className="question-btn">
          <button
            className="button-primary"
            style={{ marginBottom: "2rem" }}
            onClick={updateProgressYes}
          >
            Yes
          </button>
          <button className="button-primary" onClick={updateProgressNo}>
            No
          </button>
        </div>
      </div>
    </motion.div>
  );
}
