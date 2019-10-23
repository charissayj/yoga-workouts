import React from "react";
import { Link, Route } from "react-router-dom";
import SunSalutationA from "./sun-salutation-a";

function HomePage() {
  return (
    <div>
      <h4>Select which type of yoga you're looking for</h4>
      <Link to="/workouts">Workouts</Link>
      <h4>Or select a target</h4>
      <ul>
        <li>
          <Link to="/balance">Balance</Link>
        </li>
      </ul>
    </div>
  );
}
export default HomePage;
