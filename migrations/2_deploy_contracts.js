// var Youtube = artifacts.require("./YoutubeViews");
var Youtube = artifacts.require("./Youtube.sol");

module.exports = function(deployer) {
  deployer.deploy(Youtube);
};
