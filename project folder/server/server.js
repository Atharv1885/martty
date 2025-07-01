const express = require("express");
const app = express();
const Web3 = require("web3").default;
const contract = require("../build/contracts/ProductTracker.json");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

app.use(cors());
app.use(bodyParser.json());

const web3 = new Web3("http://127.0.0.1:8545"); // Ganache

const contractAddress = "0xac1d818440918530a80ea9fa9b5f3557049c3ab8";
const contractInstance = new web3.eth.Contract(contract.abi, contractAddress);

let account;
web3.eth.getAccounts().then((accounts) => {
  account = accounts[0];
});

app.post("/update", async (req, res) => {
  const { id, weight, dimensions, photo, video, hubId } = req.body;

  try {
    await contractInstance.methods
      .updateProduct(id, weight, dimensions, photo, video, hubId)
      .send({ from: account, gas: 3000000 });

    res.json({ message: "Product updated on blockchain" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
