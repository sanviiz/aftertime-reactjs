import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function Choice4({
  addProgress,
  setQuestion,
  question,
  addScore,
  setTooltip,
}) {
  const updateProgressYes = () => {
    addProgress(5);
    addScore();
    setQuestion({ ...question, four: false, input2: true });
  };

  const updateProgressNo = () => {
    addProgress(10);
    setQuestion({ ...question, four: false, five: true });
  };

  useEffect(() => {
    setTooltip(
      "An item could remind you of a memorable event, place or person."
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
        <p>Is this item remind you of someone or somewhere?</p>
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
