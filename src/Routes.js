import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import history from "./history";
import Home from "./Home/Home";
import Intro from "./Intro/Intro";

export default function Routes() {
  const location = useLocation();

  return (
    <Router history={history}>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={Home} />
          <Route path="/intro" component={Intro} />
        </Switch>
      </AnimatePresence>
    </Router>
  );
}
