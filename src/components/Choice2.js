import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function Choice2({
  addProgress,
  setQuestion,
  question,
  addScore,
  two,
  setTwo,
  setTooltip,
  addIndex,
}) {
  const updateProgressYes = () => {
    addIndex();
    addProgress(10);
    addScore();
    setQuestion({ ...question, two: false, three: true });
    setTwo([...two, true]);
  };

  const updateProgressNo = () => {
    addIndex();
    addProgress(10);
    setQuestion({ ...question, two: false, three: true });
    setTwo([...two, false]);
  };

  useEffect(() => {
    setTooltip(
      "Having an item since your childhood means that <br /> the thing has been with you through transitional stages of your life."
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
        <p>Has this item been with you since childhood?</p>
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
