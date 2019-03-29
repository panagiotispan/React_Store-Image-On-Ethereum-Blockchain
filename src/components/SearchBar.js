import React from "react";
import DisplayImageFromBlockchain from "./DisplayImageFromBlockchain";

class SearchBar extends React.Component {
  state = { transaction_hash: "" };

  onFormSubmit = e => {
    e.preventDefault();
    console.log(this.state.transaction_hash);
  };

  render() {
    return (
      <div>
        <div className="ui segment">
          <form onSubmit={this.onFormSubmit} className="ui form">
            <div className="field">
              <label>Input Transaction Hash</label>
              <input
                type="text"
                value={this.state.transaction_hash}
                onChange={e =>
                  this.setState({ transaction_hash: e.target.value })
                }
              />
            </div>
          </form>
        </div>
        <div>
          <DisplayImageFromBlockchain
            transaction_hash={this.state.transaction_hash}
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;
