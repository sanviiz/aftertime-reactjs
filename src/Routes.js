import React, { useState } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home/Home";
import Intro from "./pages/Intro/Intro";
import Question from "./pages/Question/Question";
import Yes from "./pages/Yes/Yes";
import No from "./pages/No/No";
import Send from "./pages/Send/Send";

export default function Routes() {
  const location = useLocation();

  const [round, setRound] = useState(0);

  const [images, setImages] = useState([]);

  const [call, setCall] = useState([]);

  const [give, setGive] = useState([]);

  const [who, setWho] = useState([]);

  const [note, setNote] = useState([]);

  const [perspective, setPerspective] = useState([]);

  const addImage = (path) => {
    setImages([...images, path]);
  };

  const addRound = () => {
    setRound((prevRound) => prevRound + 1);
  };

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.key}>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/intro">
          <Intro addImage={addImage} />
        </Route>
        <Route path="/question">
          <Question
            image={images[round]}
            addRound={addRound}
            call={call}
            setCall={setCall}
            give={give}
            setGive={setGive}
            who={who}
            setWho={setWho}
            note={note}
            setNote={setNote}
            perspective={perspective}
            setPerspective={setPerspective}
          />
        </Route>
        <Route path="/yes">
          <Yes
            call={call[round]}
            give={give[round]}
            who={who[round]}
            note={note[round]}
            perspective={perspective[round]}
          />
        </Route>
        <Route path="/no">
          <No />
        </Route>
        <Route path="/send">
          <Send />
        </Route>
      </Switch>
    </AnimatePresence>
  );
}
