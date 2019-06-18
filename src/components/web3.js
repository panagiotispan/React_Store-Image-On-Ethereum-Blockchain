import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  //We are in the browser AND user is running metamask

  window.web3 = new Web3(window.web3.currentProvider);
  // web3 = new Web3(window.web3.currentProvider);
  ethereum.enable();
} else {
  //We are in the browser and metamask is not running.
  const provider = new Web3.providers.HttpProvider(
    "https://rinkeby.infura.io/v3/922702136d00447796623cf7d7986dc6"
  );
  web3 = new Web3(provider);
  ethereum.enable();
}

const web3 = new Web3(window.web3.currentProvider);

export default web3;
