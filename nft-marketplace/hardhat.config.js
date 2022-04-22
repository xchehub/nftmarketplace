require("@nomiclabs/hardhat-waffle");

const porjectId= "0e308bd1ae5c42e9977e02482c226d3d"

module.exports = {
  networks: {
    hardhat:{
      chainId: 1337
    },
    mumbay: {
      url: 'https://polygon-mumbai.infura.io/v3/${projectId}',
      accounts: []
    },
    mainnet: {
      url: 'https://polygon-mainnet.infura.io/v3/${projectId}',
      accounts: []
    }
  },
  solidity: "0.8.4",
};
