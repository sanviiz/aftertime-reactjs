import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";

export default function Input4({
  addProgress,
  setQuestion,
  question,
  setPerspective,
  perspective,
  score,
  setTooltip,
}) {
  const isEmpty = (str) => !str.trim().length;

  const history = useHistory();

  const updateProgress = () => {
    if (isEmpty(input.current.value)) alert("Please fill an input");
    else {
      addProgress(5);
      setQuestion({ ...question, input4: false });
      setPerspective([...perspective, input.current.value]);
      setTimeout(() => {
        if (score >= 2) {
          history.push("/yes");
        } else {
          history.push("/no");
        }
      }, 500);
    }
  };

  const input = useRef();

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
        <p>What is the new view you discovered through this item?</p>
        <input type="text" className="question-input" ref={input} />
        <div className="question-btn">
          <button
            className="button-primary"
            style={{ marginBottom: "2rem", width: "160px" }}
            onClick={updateProgress}
          >
            CONFIRM
          </button>
        </div>
      </div>
    </motion.div>
  );
}
