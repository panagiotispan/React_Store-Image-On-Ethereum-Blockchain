import React from "react";
import { Link } from "react-router-dom";
import "./Buttons.css";

const Buttons = () => {
  return (
    <div className="ui grid">
      <div className="four column row">
        <div className="left floated column">
          <Link to="/SendTransactionPage">
            <button className="huge ui button btn-position1">
              Store An Image On The Blockchain.
            </button>
          </Link>
        </div>

        <div className="right floated column">
          <Link to="/DisplayImagePage">
            <button className="huge ui button btn-position2">
              Download An Image From The Blockchain.
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
