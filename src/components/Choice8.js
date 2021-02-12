import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function Choice8({
  addProgress,
  setQuestion,
  question,
  addScore,
  eight,
  setEight,
  setTooltip,
}) {
  const updateProgressYes = () => {
    addProgress(10);
    addScore();
    setQuestion({ ...question, eight: false, nine: true });
    setEight([...eight, true]);
  };

  const updateProgressNo = () => {
    addProgress(10);
    setQuestion({ ...question, eight: false, nine: true });
    setEight([...eight, false]);
  };

  useEffect(() => {
    setTooltip(
      "An item that you constantly use or have in you everyday is just like a good friend of yours. You would feel odd if the item isn’t around."
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
        <p>Is this item a part of your routine?</p>
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
