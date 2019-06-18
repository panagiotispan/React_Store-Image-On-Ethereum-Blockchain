import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import SearchBar from "./SearchBar";
import SendTransactionToBlockchain from "./SendTransactionToBlockchain";
import Buttons from "./Buttons";
import { Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/DisplayImagePage" component={SearchBar} />
          <Route
            path="/SendTransactionPage"
            component={SendTransactionToBlockchain}
          />
          <Route path="/" exact component={Buttons} />
          <Route render={Buttons} />
        </Switch>
      </div>
    );
  }
}

export default App;
