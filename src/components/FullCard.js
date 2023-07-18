import React from "react";
import Sparkling from "../../src/assets/Sparkling.png";
import "../styles/FullCard.css";

function FullCard() {
  return (
    <div classname="m-auto drop-shadow-md">
      <h2>Seasonal</h2>
      <div className="m-4 text-left">
        <div className="image-container">
          <img src={Sparkling} alt="Sparkling" />
        </div>
        <div className="content-container text-left">
          <div className="subheader-container text-left">
            <h3>Celebrate with Sparkling wine!</h3>
          </div>
          <div className="paragraph-container align-items-left text-left p-[-100px]">
            <p className= "text-left p-[-100px]">
              <br /> Any time, any day... life should always be celebrated.<br />Browse our selections and let us help make your day more special.
            </p>
          </div>
          <div className="button-container">
            <button>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullCard;
