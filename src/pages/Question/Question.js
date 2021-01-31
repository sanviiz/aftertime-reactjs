import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Topbar from "../../components/Topbar";
import Logo from "../../assets/logo/logo-dark.png";
import ProgressBar from "../../components/ProgressBar";
import Choice1 from "../../components/Choice1";
import Choice2 from "../../components/Choice2";
import Choice3 from "../../components/Choice3";
import Choice4 from "../../components/Choice4";
import Choice5 from "../../components/Choice5";
import Choice6 from "../../components/Choice6";
import Choice7 from "../../components/Choice7";
import Choice8 from "../../components/Choice8";
import Choice9 from "../../components/Choice9";
import Choice10 from "../../components/Choice10";
import Input0 from "../../components/Input0";
import Input1 from "../../components/Input1";
import Input2 from "../../components/Input2";
import Input3 from "../../components/Input3";
import Input4 from "../../components/Input4";

export default function Question({
  image,
  addRound,
  call,
  setCall,
  give,
  setGive,
  who,
  setWho,
  note,
  setNote,
  perspective,
  setPerspective,
}) {
  const [question, setQuestion] = useState({
    input0: true,
    input1: false,
    input2: false,
    input3: false,
    input4: false,
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
    six: false,
    seven: false,
    eight: false,
    nine: false,
    ten: false,
  });

  const [score, setScore] = useState(0);

  const [progress, setProgress] = useState(0);

  const addProgress = (value) => {
    setProgress((prevProgress) => prevProgress + value);
  };

  const addScore = () => {
    setScore((prevScore) => prevScore + 1);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "-100%" }}
      transition={{ type: "spring", stiffness: 70, duration: 0.5 }}
    >
      <div className="page">
        <Topbar imgSrc={Logo} lineColor="topLine-dark" />
        <img src={image} alt="img" className="question-image" />
        <AnimatePresence>
          {question.input0 && (
            <Input0
              addProgress={addProgress}
              setQuestion={setQuestion}
              question={question}
              call={call}
              setCall={setCall}
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {question.one && (
            <Choice1
              addProgress={addProgress}
              setQuestion={setQuestion}
              question={question}
              addScore={addScore}
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {question.input1 && (
            <Input1
              addProgress={addProgress}
              setQuestion={setQuestion}
              question={question}
              give={give}
              setGive={setGive}
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {question.two && (
            <Choice2
              addProgress={addProgress}
              setQuestion={setQuestion}
              question={question}
              addScore={addScore}
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {question.three && (
            <Choice3
              addProgress={addProgress}
              setQuestion={setQuestion}
              question={question}
              addScore={addScore}
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {question.four && (
            <Choice4
              addProgress={addProgress}
              setQuestion={setQuestion}
              question={question}
              addScore={addScore}
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {question.input2 && (
            <Input2
              addProgress={addProgress}
              setQuestion={setQuestion}
              question={question}
              who={who}
              setWho={setWho}
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {question.five && (
            <Choice5
              addProgress={addProgress}
              setQuestion={setQuestion}
              question={question}
              addScore={addScore}
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {question.six && (
            <Choice6
              addProgress={addProgress}
              setQuestion={setQuestion}
              question={question}
              addScore={addScore}
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {question.input3 && (
            <Input3
              addProgress={addProgress}
              setQuestion={setQuestion}
              question={question}
              note={note}
              setNote={setNote}
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {question.seven && (
            <Choice7
              addProgress={addProgress}
              setQuestion={setQuestion}
              question={question}
              addScore={addScore}
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {question.eight && (
            <Choice8
              addProgress={addProgress}
              setQuestion={setQuestion}
              question={question}
              addScore={addScore}
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {question.nine && (
            <Choice9
              addProgress={addProgress}
              setQuestion={setQuestion}
              question={question}
              addScore={addScore}
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {question.ten && (
            <Choice10
              addProgress={addProgress}
              setQuestion={setQuestion}
              question={question}
              addScore={addScore}
              score={score}
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {question.input4 && (
            <Input4
              addProgress={addProgress}
              setQuestion={setQuestion}
              question={question}
              score={score}
              perspective={perspective}
              setPerspective={setPerspective}
            />
          )}
        </AnimatePresence>
        <ProgressBar completed={progress} />
      </div>
    </motion.div>
  );
}
