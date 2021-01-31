import React, { useRef } from "react";
import { motion } from "framer-motion";

export default function Input2({
  addProgress,
  setQuestion,
  question,
  setWho,
  who,
}) {
  const updateProgress = () => {
    addProgress(5);
    setQuestion({ ...question, input2: false, five: true });
    setWho([...who, input.current.value]);
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
        <p>Who or where does this item remind you of?</p>
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
