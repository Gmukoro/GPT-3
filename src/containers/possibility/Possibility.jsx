import React from "react";
import "./possibility.css";
import possibilityImage from "../../assets/possibility.png";

function Possibility() {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibilityImage" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>
          Yet bed for any for travelling assistance. Indulgence not unpleasing
          not enough at Gona. Our strength is in perfection. Indulgence that
          brings everything joy. If it doesn't bring joy and complete fulfilment
          then its not Gona.
        </p>
        <h4>Request for Early Access to Get Started</h4>
      </div>
    </div>
  );
}

export default Possibility;
