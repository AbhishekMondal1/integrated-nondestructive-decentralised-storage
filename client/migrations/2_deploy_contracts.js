const INDStorage = artifacts.require("INDStorage");

module.exports = function(deployer) {
	deployer.deploy(INDStorage);
};
