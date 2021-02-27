import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function Input2({
  addProgress,
  setQuestion,
  question,
  setWho,
  who,
  setTooltip,
  addIndex,
}) {
  const updateProgress = () => {
    addIndex();
    addProgress(5);
    setQuestion({ ...question, input2: false, five: true });
    setWho([...who, input.current.value]);
  };

  const input = useRef();

  useEffect(() => {
    setTooltip(
      "An item could become sentimental if it connects <br /> to someone or somewhere in your meaningful memories."
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
        <p>Who or where does this item remind you of?</p>
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
