import React, { Component } from "react";

class SunSalutationA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      steps: []
    };
  }

  render() {
    return (
      <div>
        <h1>AAAAAAAAAAAAA</h1>
        <h3>Warm-Up</h3>
        <p>
          Warm up your entire body with this classic version of the Sun
          Salutation. Follow the steps below and repeat for 3 - 10 rounds for a
          complete warm-up
        </p>
        <label>Steps:</label>
        <ol>
          <li>
            Stand with your feet hip distance apart. Exhale and bring your hands
            to prayer
          </li>
          <li>Inhale and reach up, arching your back</li>
          <li>Inhale and reach up, arching your back</li>
        </ol>
      </div>
    );
  }
}

export default SunSalutationA;
