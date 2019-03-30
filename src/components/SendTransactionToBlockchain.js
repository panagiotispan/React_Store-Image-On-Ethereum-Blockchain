import React from "react";
import { Link } from "react-router-dom";

class SendTransactionToBlockchain extends React.Component {
  state = { value: "", loading: false };

  readImageToBase64() {
    function readFile() {
      if (this.files && this.files[0]) {
        let FR = new FileReader();

        FR.addEventListener("load", function(e) {
          document.getElementById("img").src = e.target.result;
          document.getElementById("inp2").value = e.target.result.replace(
            "data:image/jpeg;base64,",
            ""
          );
        });

        FR.readAsDataURL(this.files[0]);
      }
    }
    document.getElementById("inp").addEventListener("change", readFile);
  }

  render() {
    return (
      <div>
        <div>
          Send Transaction
          <form onClick={this.readImageToBase64}>
            <input id="inp" type="file" /> &ensp; &ensp; &ensp; &ensp;
            <img id="img" height="260" length="260" />
          </form>
          <input
            type="hidden"
            id="inp2"
            value={this.state.value}
            onChange={event => this.setState({ value: event.target.value })}
          />
        </div>
        <div>
          <Link to="/DisplayImagePage">
            <button>I Want to Download An Image From The Blockchain.</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default SendTransactionToBlockchain;
