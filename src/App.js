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
    </Switch>
  );
}

export default App;
