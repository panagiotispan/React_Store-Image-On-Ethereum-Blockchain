import React from "react";
import { Link } from "react-router-dom";

const Buttons = () => {
  return (
    <div>
      <Link to="/SendTransactionPage">
        <button className="ui primary button">
          I Want To Store An Image On The Blockchain.
        </button>
      </Link>
      <br /> <br /> <br />
      <Link to="/DisplayImagePage">
        <button className="ui primary button">
          I Want to Download An Image From The Blockchain.
        </button>
      </Link>
    </div>
  );
};

export default Buttons;
