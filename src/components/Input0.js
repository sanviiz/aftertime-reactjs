import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function Input0({
  addProgress,
  setQuestion,
  question,
  setCall,
  call,
  setTooltip,
}) {
  const updateProgress = () => {
    addProgress(5);
    setQuestion({ ...question, input0: false, one: true });
    setCall([...call, input.current.value]);
  };

  useEffect(() => {
    setTooltip("Type the name that you normally call this item.");
  });

  const input = useRef();

  return (
    <motion.div
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "-30%" }}
      transition={{ type: "spring", stiffness: 70, duration: 0.5 }}
    >
      <div className="question-group">
        <p>What do you call this item?</p>
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
