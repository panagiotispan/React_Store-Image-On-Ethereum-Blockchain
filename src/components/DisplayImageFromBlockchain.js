import React from "react";

class DisplayImageFromBlockchain extends React.Component {
  // Final text that displays the text on screen.
  state = { ImageText: "", image_does_not_exist: "" };

  // Api to the blockchain (includes the hash from the SearchBar component, as props).
  requestImage = async () => {
    let baseUrl = `https://api-rinkeby.etherscan.io/api?module=proxy&action=eth_getTransactionByHash&txhash=${
      this.props.transaction_hash
    }&apikey=J6V63K8568NS7TA22G63MGRMN5TXUI13FT`;
    try {
      const response = await fetch(baseUrl);
      const data = await response.json();
      let stripedData = data.result.input.replace("0x", "");
      let base64String = Buffer.from(stripedData, "hex").toString("base64");
      this.setState({
        ImageText: "data:image/jpeg;base64," + base64String,
        image_does_not_exist: ""
      });
    } catch (err) {
      // If Transaction hash does not exist.
      this.setState({
        ImageText: "",
        image_does_not_exist:
          "The Requested Image/Transaction Does Not Exist On The Blockchain!!"
      });
    }
  };

  render() {
    return (
      <div>
        <div>
          <button
            className="big ui button"
            onClick={this.requestImage}
            style={{ position: "relative", left: `10%`, top: `370px` }}
          >
            Download Image From The Blockhain
          </button>
        </div>
        <br />
        <br />
        <div>
          <img src={this.state.ImageText} alt="" />
        </div>
        <div style={{ color: "white", fontSize: "30px", textAlign: "center" }}>
          {this.state.image_does_not_exist}
        </div>
      </div>
    );
  }
}

export default DisplayImageFromBlockchain;
