import React from "react";

class Api extends React.Component {
  state = { text: "" };
  // Api call to fetch the image from the blockchain
  requestImage = async transaction_hash => {
    let baseUrl = `https://api-rinkeby.etherscan.io/api?module=proxy&action=eth_getTransactionByHash&txhash=${transaction_hash}&apikey=J6V63K8568NS7TA22G63MGRMN5TXUI13FT`;
    try {
      const response = await fetch(baseUrl);
      const data = await response.json();
      let stripedData = data.result.input.replace("0x", "");
      var base64String = Buffer.from(stripedData, "hex").toString("base64");
      let variable = "data:image/jpeg;base64," + base64String;
      this.setState({ text: variable });
    } catch (err) {
      console.log(" Api call failed");
    }
  };
  // Pass image hash to the Api call function.
  requestImageWithParemeter = () => {
    this.requestImage(
      "0x7d7a4d8678fba7a3fa3e3fff061f02a4497094c2e2b4c89286faf76346b548f2"
    );
  };

  render() {
    return (
      <div>
        <button onClick={this.requestImageWithParemeter}>API CALL</button>
        <img src={this.state.text} alt="" />
      </div>
    );
  }
}

export default Api;
