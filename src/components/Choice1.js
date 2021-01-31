import React from "react";
import { motion } from "framer-motion";

export default function Choice1({
  addProgress,
  setQuestion,
  question,
  addScore,
}) {
  const updateProgressYes = () => {
    addProgress(2.5);
    addScore();
    setQuestion({ ...question, one: false, input1: true });
  };

  const updateProgressNo = () => {
    addProgress(5);
    setQuestion({ ...question, one: false, two: true });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "-30%" }}
      transition={{ type: "spring", stiffness: 70, duration: 0.5 }}
    >
      <div className="question-group">
        <p>Was this item given to you by someone?</p>
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
