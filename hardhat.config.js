require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

const SEPOLIA_URL = process.env.SEPOLIA_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/vQ3UMg4aQ3CyuMRXdkLT4W82GIlVftDJ",
      accounts: ["29579423e7dd070a4a7176c3cd848c47e8f66a679130946b6a19d75845c725cb"],
    },
  }
};
