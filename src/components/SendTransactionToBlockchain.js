import React from "react";
import { Link } from "react-router-dom";
import { Button, Message } from "semantic-ui-react";
import "./SendTransactionToBlockchain.css";

class SendTransactionToBlockchain extends React.Component {
  state = {
    loading: false,
    base64String: "",
    hexString: "",
    errorMessage: "",
    errorMessageHidden: true
  };

  // Read image file, turn it to base64 string.
  readImageToBase64 = file => {
    this.setState({
      errorMessageHidden: true
    });
    let input = file.target;
    let reader = new FileReader();
    reader.onload = () => {
      let dataURL = reader.result;
      this.setState({ base64String: dataURL });
    };
    try {
      reader.readAsDataURL(input.files[0]);
    } catch (err) {
      this.setState({
        errorMessageHidden: true,
        loading: false
      });
    }
  };

  onSubmit = async () => {
    this.setState({
      loading: true,
      errorMessage: "",
      errorMessageHidden: true
    });

    if (this.state.base64String !== "") {
      try {
        const Base64String = this.state.base64String.replace(
          "data:image/jpeg;base64,",
          ""
        );
        console.log(Base64String);
        // Turn Base64 String to HEX sting.
        var raw = atob(Base64String);
        var HEX = "";
        for (let i = 0; i < raw.length; i++) {
          var _hex = raw.charCodeAt(i).toString(16);
          HEX += _hex.length === 2 ? _hex : "0" + _hex;
        }
        let HexString = HEX.toLowerCase();
        this.setState({ hexString: HexString });

        // Create trasaction
        //const accounts = await window.web3.eth.defaultAccount;
        const accounts = await window.web3.eth.accounts[0];
        await window.web3.eth.sendTransaction(
          {
            from: accounts,
            to: "0xf236b3e3A72005DA48A32aB5d0af8aFA1dC8333a",
            value: "0",
            data: HexString,
            gasLimit: 1500000
          },
          (err, transactionHash) => {
            if (!err) {
              console.log(
                "Transaction successful!! Tx Hash: " + transactionHash
              );
              this.setState({ loading: false });
            } else {
              this.setState({
                errorMessage: err.message,
                errorMessageHidden: false,
                loading: false
              });
            }
          }
        );
      } catch (err) {
        this.setState({
          errorMessageHidden: false,
          errorMessage: err,
          loading: false
        });
      }
    } else {
      this.setState({
        errorMessageHidden: false,
        errorMessage: "Please Select an Image.",
        loading: false
      });
    }
  };

  render() {
    return (
      <div>
        <div>
          <input type="file" onChange={this.readImageToBase64} />
          <img
            id="output"
            src={this.state.base64String}
            style={{ height: "260px", width: "260" }}
            alt=""
          />
        </div>
        <div>
          <Button
            className="ui primary button"
            loading={this.state.loading}
            onClick={this.onSubmit}
          >
            Send Transaction
          </Button>
        </div>
        <div>
          <Message
            hidden={this.state.errorMessageHidden}
            error
            header="There was some errors with your submission!"
            content={this.state.errorMessage}
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
