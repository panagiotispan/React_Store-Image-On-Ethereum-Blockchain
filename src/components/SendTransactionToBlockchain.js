import React from "react";
import { Link } from "react-router-dom";
import { Button, Message } from "semantic-ui-react";

class SendTransactionToBlockchain extends React.Component {
  state = {
    loading: false,
    base64String: "",
    hexString: "",
    errorMessage: "",
    successMessage: "",
    errorMessageHidden: true,
    successMessageHidden: true
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
        // console.log(Base64String);
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
              this.setState({
                loading: false,
                successMessageHidden: false,
                successMessage: transactionHash
              });
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
          errorMessage: err.message,
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
          <input
            type="file"
            name="file"
            onChange={this.readImageToBase64}
            style={{
              color: "white",
              position: "absolute",
              top: "200px",
              left: "45%",
              backgroundColor: "black",
              display: "inline-block"
            }}
          />
          <img
            id="output"
            src={this.state.base64String}
            style={{ height: "260px", width: "260" }}
            alt=""
          />
        </div>
        <div>
          <Button
            className="big ui button"
            loading={this.state.loading}
            onClick={this.onSubmit}
            style={{ position: "absolute", left: `65%`, top: `528px` }}
          >
            Send Transaction
          </Button>
        </div>
        <div>
          <Message
            className="container"
            hidden={this.state.errorMessageHidden}
            error
            header="There was some errors with your submission!"
            content={this.state.errorMessage}
            style={{ position: "absolute", top: "280px", width: "100%" }}
          />
        </div>
        <div>
          <Message
            className=" ui success message container"
            hidden={this.state.successMessageHidden}
            header="Your Transaction is broadcasted!"
            content={this.state.successMessage}
            style={{ position: "relative", top: "180px" }}
          />
        </div>
        <div>
          <Link to="/DisplayImagePage">
            <button
              className="big ui button"
              style={{ position: "absolute", left: `10%`, top: `528px` }}
            >
              Download An Image From The Blockchain.
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default SendTransactionToBlockchain;
