import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home/Home";
import Intro from "./pages/Intro/Intro";

export default function Routes() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.key}>
        <Route exact path="/" component={Home} />
        <Route path="/intro" component={Intro} />
      </Switch>
    </AnimatePresence>
  );
}
