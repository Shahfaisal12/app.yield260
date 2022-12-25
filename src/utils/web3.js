import Abijson from "../contractAbi.json"
const Web3 = require("web3");

export function getBSCContractInstance() {
  const web3Bsc = new Web3(
    new Web3.providers.HttpProvider(
      "https://bsc-dataseed4.defibit.io"
    )
  );

  return new web3Bsc.eth.Contract(
    Abijson,
    "0xDCe927C84Ba103A64e6fC54EF5B0A7D4C6dc0F4f"
  );

}