const { HardhatUserConfig } = require("hardhat/config");
const { Network, Alchemy } = require('alchemy-sdk');
require("@nomicfoundation/hardhat-toolbox");

const ALCHEMY_API_KEY = "mhFOPNxvhSZAcRNM-QdLv9D1bpPDa0AD";
const SEPOLIA_PRIVATE_KEY = "c8db918708226a112a1c4667643bace27560a25038e291f51e2cae701aa0d172";

const config = {
  solidity: "0.8.24",
  etherscan: {
    apiKey: "CG9DJN3V57CVH23QI1R6ETPY2ISZBUCIWE",
    saveDeployments: true,
  },
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY]
    }
  }
};

module.exports = config;