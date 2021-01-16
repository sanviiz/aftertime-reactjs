import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import history from "./history";
import Home from "./Home/Home";
import Intro from "./Intro/Intro";

export default function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/intro" component={Intro} />
      </Switch>
    </Router>
  );
}
