import React, { useRef } from "react";
import { motion } from "framer-motion";

export default function Input4({
  addProgress,
  setQuestion,
  question,
  setPerspective,
  perspective,
}) {
  const updateProgress = () => {
    addProgress(5);
    setQuestion({ ...question, input4: false });
    setPerspective([...perspective, input.current.value]);
  };

  const input = useRef();

  return (
    <motion.div
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "-30%" }}
      transition={{ type: "spring", stiffness: 70, duration: 0.5 }}
    >
      <div className="question-group">
        <p>What is the new perspective you find through this item?</p>
        <input type="text" className="question-input" ref={input} />
        <div className="question-btn">
          <button
            className="btn-primary"
            style={{ marginBottom: "2rem" }}
            onClick={updateProgress}
          >
            Confirm
          </button>
        </div>
      </div>
    </motion.div>
  );
}
