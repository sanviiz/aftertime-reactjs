import React from "react";
import { motion } from "framer-motion";

export default function Choice6({
  addProgress,
  setQuestion,
  question,
  addScore,
}) {
  const updateProgressYes = () => {
    addProgress(5);
    addScore();
    setQuestion({ ...question, six: false, input3: true });
  };

  const updateProgressNo = () => {
    addProgress(10);
    setQuestion({ ...question, six: false, seven: true });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "-30%" }}
      transition={{ type: "spring", stiffness: 70, duration: 0.5 }}
    >
      <div className="question-group">
        <p>Does this item have a story behind it?</p>
        <div className="question-btn">
          <button
            className="btn-primary"
            style={{ marginBottom: "2rem" }}
            onClick={updateProgressYes}
          >
            Yes
          </button>
          <button className="btn-primary" onClick={updateProgressNo}>
            No
          </button>
        </div>
      </div>
    </motion.div>
  );
}