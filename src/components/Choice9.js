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
  addIndex,
}) {
  const updateProgressYes = () => {
    addIndex();
    addProgress(10);
    addScore();
    setQuestion({ ...question, nine: false, ten: true });
    setNine([...nine, true]);
  };

  const updateProgressNo = () => {
    addIndex();
    addProgress(10);
    setQuestion({ ...question, nine: false, ten: true });
    setNine([...nine, false]);
  };

  useEffect(() => {
    setTooltip("Passion forms through intense feelings and beliefs.");
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
