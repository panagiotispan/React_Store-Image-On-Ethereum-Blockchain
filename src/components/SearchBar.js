import React from "react";
import DisplayImageFromBlockchain from "./DisplayImageFromBlockchain";
import { Link } from "react-router-dom";

class SearchBar extends React.Component {
  state = { transaction_hash: "" };

  onFormSubmit = e => {
    e.preventDefault();
    console.log(this.state.transaction_hash);
  };

  render() {
    return (
      <div>
        <br />
        <br />
        <div className="ui segment container">
          <form onSubmit={this.onFormSubmit} className="ui form">
            <div className="field">
              <label>Input Transaction Hash</label>
              <input
                type="text"
                value={this.state.transaction_hash}
                onChange={
                  e =>
                    this.setState({ transaction_hash: e.target.value.trim() }) // added trim to remove empty spaces.
                }
              />
            </div>
          </form>
        </div>
        <div>
          <DisplayImageFromBlockchain
            transaction_hash={this.state.transaction_hash}
          />
          <Link to="/SendTransactionPage">
            <button
              className="big ui button"
              style={{ position: "absolute", left: `60%`, top: `528px` }}
            >
              Store An Image On The Blockchain
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default SearchBar;
