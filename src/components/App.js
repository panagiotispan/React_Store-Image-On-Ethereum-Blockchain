import React from "react";
import DisplayImageFromBlockchain from "./DisplayImageFromBlockchain";
import Api from "./Api";

class App extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <Api />
        App
        <DisplayImageFromBlockchain />
      </div>
    );
  }
}

export default App;
