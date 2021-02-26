import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function Choice3({
  addProgress,
  setQuestion,
  question,
  addScore,
  three,
  setThree,
  setTooltip,
  addIndex,
}) {
  const updateProgressYes = () => {
    addIndex();
    addProgress(10);
    addScore();
    setQuestion({ ...question, three: false, four: true });
    setThree([...three, true]);
  };

  const updateProgressNo = () => {
    addIndex();
    addProgress(10);
    setQuestion({ ...question, three: false, four: true });
    setThree([...three, false]);
  };

  useEffect(() => {
    setTooltip(
      "‘It was passed on’ means that someone gave <br /> the item to you after receiving it from someone else."
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
        <p>Has this item been passed on?</p>
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
