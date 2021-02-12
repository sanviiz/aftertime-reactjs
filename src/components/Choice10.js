import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";

export default function Choice10({
  addProgress,
  setQuestion,
  question,
  addScore,
  score,
  setTooltip,
}) {
  const history = useHistory();

  const updateProgressYes = () => {
    addProgress(5);
    addScore();
    setQuestion({ ...question, ten: false, input4: true });
  };

  const updateProgressNo = () => {
    addProgress(10);
    setQuestion({ ...question, ten: false });
    setTimeout(() => {
      if (score >= 3) {
        history.push("/yes");
      } else {
        history.push("/no");
      }
    }, 500);
  };

  useEffect(() => {
    setTooltip(
      "An item that helped you see in a new perspective should be significant to you as a gate to the new vision."
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
        <p>Has item helped you find a new perspective?</p>
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
