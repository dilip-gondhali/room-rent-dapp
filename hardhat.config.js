require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");


module.exports = {
  solidity: "0.8.24",
  networks: {
    hardhat: {},
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/CkrSVYa8E3etSvUuYQz2EQkzRW06PEhb",
      accounts: [
        "ee5ff08a5c2f736e66e24059c20674c8683fffdccd66b908d7d9762246691dac",
      ],
    },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: "NGQK7HG6EG9C397KFYUEBPYFDHW37SG3IV"
  },
  sourcify: {
    // Disabled by default
    // Doesn't need an API key
    enabled: true
  }
};
