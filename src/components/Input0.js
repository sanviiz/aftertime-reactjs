import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function Input0({
  addProgress,
  setQuestion,
  question,
  setCall,
  call,
  setTooltip,
  addIndex,
}) {
  const isEmpty = (str) => !str.trim().length;

  const updateProgress = () => {
    if (isEmpty(input.current.value)) alert("Please fill an input");
    else {
      addIndex();
      addProgress(5);
      setQuestion({ ...question, input0: false, one: true });
      setCall([...call, input.current.value]);
    }
  };

  useEffect(() => {
    setTooltip(
      "Calling an item with a specific name is <br /> to indicate ownership and affection."
    );
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
