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

  const [two, setTwo] = useState([]);

  const [three, setThree] = useState([]);

  const [five, setFive] = useState([]);

  const [seven, setSeven] = useState([]);

  const [eight, setEight] = useState([]);

  const [nine, setNine] = useState([]);

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
            two={two}
            setTwo={setTwo}
            three={three}
            setThree={setThree}
            five={five}
            setFive={setFive}
            seven={seven}
            setSeven={setSeven}
            eight={eight}
            setEight={setEight}
            nine={nine}
            setNine={setNine}
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
            image={images[round]}
            two={two[round]}
            three={three[round]}
            five={five[round]}
            seven={seven[round]}
            eight={eight[round]}
            nine={nine[round]}
            call={call[round]}
            give={give[round]}
            who={who[round]}
            note={note[round]}
            perspective={perspective[round]}
            addRound={addRound}
          />
        </Route>
        <Route path="/no">
          <No image={images[round]} addRound={addRound} />
        </Route>
        <Route path="/send">
          <Send />
        </Route>
      </Switch>
    </AnimatePresence>
  );
}
