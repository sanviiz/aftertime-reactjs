import React, { useRef } from "react";
import { motion } from "framer-motion";

export default function Input3({
  addProgress,
  setQuestion,
  question,
  setNote,
  note,
}) {
  const updateProgress = () => {
    addProgress(5);
    setQuestion({ ...question, input3: false, seven: true });
    setNote([...note, input.current.value]);
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
        <p>Note down the story in short.</p>
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
