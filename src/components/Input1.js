import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function Input1({
  addProgress,
  setQuestion,
  question,
  setGive,
  give,
  setTooltip,
  addIndex,
}) {
  const updateProgress = () => {
    addIndex();
    addProgress(2.5);
    setQuestion({ ...question, input1: false, two: true });
    setGive([...give, input.current.value]);
  };

  const input = useRef();

  useEffect(() => {
    setTooltip(
      "Was this item received as a gift? <br /> Bought for you? Given to you?"
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
        <p>Who gave you this item?</p>
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
