import React from "react";
import { Link } from "react-router-dom";

class SendTransactionToBlockchain extends React.Component {
  state = { value: "", loading: false };

  // Read image file, turn it to base64 and display it on screen.
  readImageToBase64 = file => {
    let input = file.target;
    let reader = new FileReader();

    reader.onload = () => {
      let dataURL = reader.result;
      this.setState({ value: dataURL });
    };
    reader.readAsDataURL(input.files[0]);
  };

  render() {
    return (
      <div>
        <div>
          <input type="file" onChange={this.readImageToBase64} />
          <img
            id="output"
            src={this.state.value}
            style={{ height: "260px", width: "260" }}
            alt=""
          />
        </div>

        <div>
          <Link to="/DisplayImagePage">
            <button className="ui primary button">
              I Want to Download An Image From The Blockchain.
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default SendTransactionToBlockchain;
