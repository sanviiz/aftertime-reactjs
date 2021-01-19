import React, { useState } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home/Home";
import Intro from "./pages/Intro/Intro";
import Question from "./pages/Question/Question";

export default function Routes() {
  const location = useLocation();
  const [round, setRound] = useState(0);
  const [images, setImages] = useState([]);

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
          <Question images={images} round={round} />
        </Route>
      </Switch>
    </AnimatePresence>
  );
}
