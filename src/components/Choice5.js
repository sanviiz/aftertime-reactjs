import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function Choice5({
  addProgress,
  setQuestion,
  question,
  addScore,
  five,
  setFive,
  setTooltip,
  addIndex,
}) {
  const updateProgressYes = () => {
    addIndex();
    addProgress(10);
    addScore();
    setQuestion({ ...question, five: false, six: true });
    setFive([...five, true]);
  };

  const updateProgressNo = () => {
    addIndex();
    addProgress(10);
    setQuestion({ ...question, five: false, six: true });
    setFive([...five, false]);
  };

  useEffect(() => {
    setTooltip(
      "Play engages in an activity for enjoyment <br /> and recreation rather than for profound or practical purposes."
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
        <p>Did you use to play with this item?</p>
        <div className="question-btn">
          <button
            className="button-primary"
            style={{ marginBottom: "2rem" }}
            onClick={updateProgressYes}
          >
            Yes
          </button>
          <br />
          <button className="button-primary" onClick={updateProgressNo}>
            No
          </button>
        </div>
      </div>
    </motion.div>
  );
}
