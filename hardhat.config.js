require("@nomicfoundation/hardhat-toolbox");



/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    hardhat: {
      chainId: 1337
    },
    SepoliaTestNetwork: {
      url: `https://sepolia.infura.io/v3/`,
      chainId: 11155111,
    },
  },
};
