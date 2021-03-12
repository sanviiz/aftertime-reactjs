import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function Choice1({
  addProgress,
  setQuestion,
  question,
  addScore,
  setTooltip,
  addIndex,
  give,
  setGive,
}) {
  const updateProgressYes = () => {
    addProgress(2.5);
    addScore();
    setQuestion({ ...question, one: false, input1: true });
  };

  const updateProgressNo = () => {
    addIndex();
    addProgress(5);
    setQuestion({ ...question, one: false, two: true });
    setGive([...give, false]);
  };

  useEffect(() => {
    setTooltip(
      "Was this item received as a gift? <br /> Bought for you? Given to you?"
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
        <p>Was this item given to you by someone?</p>
        <div className="question-btn">
          <button
            className="button-primary"
            style={{ marginBottom: "2rem", width: "160px" }}
            onClick={updateProgressYes}
          >
            YES
          </button>
          <br />
          <button
            className="button-primary"
            onClick={updateProgressNo}
            style={{ width: "160px" }}
          >
            NO
          </button>
        </div>
      </div>
    </motion.div>
  );
}
