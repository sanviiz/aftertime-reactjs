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
  perspective,
  setPerspective,
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
    setPerspective([...perspective, false]);
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
      "Altering our points of view can be difficult. <br /> It’s great when items can help us make a change."
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
        <p>
          Has the item helped you find
          <br />a fresh perspective?
        </p>
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
