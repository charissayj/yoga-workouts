import React from "react";
import { Link, Route } from "react-router-dom";
import SunSalutationA from "./sun-salutation-a";

function HomePage() {
  return (
    <div>
      <h4>Select which type of workout you're looking for</h4>
      <ul>
        <li>
          <Link to="/sun-a">Sun Salutation A</Link>
        </li>
        <li>
          <Link to="/traditional-sun">Traditional Sun Salutation</Link>
        </li>
        <li>
          <Link to="/energize-and-glow">Energize and Glow</Link>
        </li>
        <li>
          <Link to="/open-and-release">Open and Release</Link>
        </li>
        <li>
          <Link to="/stretch-and-strengthen">Stretch and Strengthen</Link>
        </li>
      </ul>

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
