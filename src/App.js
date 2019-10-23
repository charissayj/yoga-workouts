import React from "react";
import "./App.css";
import HomePage from "./components/Homepage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SunSalutationA from "./components/sun-salutation-a";
import TraditionalSunSalutation from "./components/traditional-sun-salutation";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/workouts" component={SunSalutationA} />
      <Route path="/balance" component={TraditionalSunSalutation} />
      <Route path="/sun-a" component={TraditionalSunSalutation} />
      <Route path="/traditional-sun" component={TraditionalSunSalutation} />
      <Route path="/energize-and-glow" component={TraditionalSunSalutation} />
      <Route path="/open-and-release" component={TraditionalSunSalutation} />
      <Route
        path="/stretch-and-strengthen"
        component={TraditionalSunSalutation}
      />
    </Switch>
  );
}

export default App;
