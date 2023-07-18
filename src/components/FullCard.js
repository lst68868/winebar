import React from "react";
import Sparkling from "../../src/assets/Sparkling.png";
import "../styles/FullCard.css";

function FullCard() {
  return (
    <div>
      <div className="header-container">Seasonal</div>
      <div className="container">
        <div className="image-container">
          <img src={Sparkling} alt="Sparkling" />
        </div>
        <div className="content-container">
          <div className="subheader-container">
            <h3>Celebrate with Sparkling wine!</h3>
          </div>
          <div className="paragraph-container">
            <p>
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
