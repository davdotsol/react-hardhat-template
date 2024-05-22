const { expect } = require('chai');

const {
  loadFixture,
} = require('@nomicfoundation/hardhat-toolbox/network-helpers');

describe('Token Contract', function () {
  async function deployFixture() {
    // Get the Signers here.
    const [owner, addr1, addr2] = await ethers.getSigners();

    const Token = await ethers.getContractFactory('Token');
    const token = await Token.deploy('Dapp Dot Sol', 'DDS', 1000000);

    await token.waitForDeployment();

    // Fixtures can return anything you consider useful for your tests
    return { token, owner, addr1, addr2 };
  }

  describe('Deployment', function () {
    it('Should assign the total supply of tokens to the owner', async function () {
      const { token, owner } = await loadFixture(deployFixture);
      const ownerBalance = await token.balanceOf(owner.address);
      expect(await token.totalSupply()).to.equal(ownerBalance);
    });
  });
});
