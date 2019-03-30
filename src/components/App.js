import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import SearchBar from "./SearchBar";
import SendTransactionToBlockchain from "./SendTransactionToBlockchain";
import Buttons from "./Buttons";

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="ui container" style={{ marginTop: "10px" }} />
        <div>
          <BrowserRouter>
            <div>
              <Route path="/DisplayImagePage" component={SearchBar} />
              <Route
                path="/SendTransactionPage"
                component={SendTransactionToBlockchain}
              />
              <Route path="/" exact component={Buttons} />
            </div>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
