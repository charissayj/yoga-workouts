import React from "react";
import { Link } from "react-router-dom";

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

      <h4>Or select a posture series</h4>
      <ul>
        <li>Standing</li>
        <li>Inversion</li>
        <li>Backbends</li>
        <li>Forward Bends</li>
        <li>Hip Openers</li>
        <li>Balancing Poses</li>
        <li>Seated and Supine</li>
        <li>Breathing Exercises</li>
        <li>Meditation</li>
      </ul>
    </div>
  );
}
export default HomePage;
