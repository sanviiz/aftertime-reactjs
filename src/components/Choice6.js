import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function Choice6({
  addProgress,
  setQuestion,
  question,
  addScore,
  setTooltip,
  addIndex,
  note,
  setNote,
}) {
  const updateProgressYes = () => {
    addProgress(5);
    addScore();
    setQuestion({ ...question, six: false, input3: true });
  };

  const updateProgressNo = () => {
    addIndex();
    addProgress(10);
    setQuestion({ ...question, six: false, seven: true });
    setNote([...note, false]);
  };

  useEffect(() => {
    setTooltip(
      "What do you remember most fondly about this item? <br /> If this item could talk, what story would it tell?"
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
        <p>Does this item have a story behind it?</p>
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
