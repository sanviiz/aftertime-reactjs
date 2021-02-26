import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function Input3({
  addProgress,
  setQuestion,
  question,
  setNote,
  note,
  setTooltip,
  addIndex,
}) {
  const updateProgress = () => {
    addIndex();
    addProgress(5);
    setQuestion({ ...question, input3: false, seven: true });
    setNote([...note, input.current.value]);
  };

  const input = useRef();

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
        <p>Note down the story in short.</p>
        <input type="text" className="question-input" ref={input} />
        <div className="question-btn">
          <button
            className="button-primary"
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
