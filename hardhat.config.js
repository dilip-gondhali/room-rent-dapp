require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");


module.exports = {
  solidity: "0.8.24",
  networks: {
    hardhat: {},
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/YOUR_ALCHEMY_API_KEY",
      accounts: [
        "YOUR_PRIVATE_KEY",
      ],
    },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: "YOUR_ETHERSCAN API_KEY"
  },
  sourcify: {
    // Disabled by default
    // Doesn't need an API key
    enabled: true
  }
};
