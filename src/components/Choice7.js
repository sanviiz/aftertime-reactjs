import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function Choice7({
  addProgress,
  setQuestion,
  question,
  addScore,
  seven,
  setSeven,
  setTooltip,
  addIndex,
}) {
  const updateProgressYes = () => {
    addIndex();
    addProgress(10);
    addScore();
    setQuestion({ ...question, seven: false, eight: true });
    setSeven([...seven, true]);
  };

  const updateProgressNo = () => {
    addIndex();
    addProgress(10);
    setQuestion({ ...question, seven: false, eight: true });
    setSeven([...seven, false]);
  };

  useEffect(() => {
    setTooltip(
      "Making and designing entail planning or forming by <br /> putting parts together, construction, or creating by yourself."
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
        <p>Did you make or design this item?</p>
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
