const { buildModule } = require('@nomicfoundation/hardhat-ignition/modules');

const TokenModule = buildModule('TokenModule', (m) => {
  const name = m.getParameter('name', 'Dapp DotSol');
  const symbol = m.getParameter('symbol', 'DDS');
  const totalSupply = m.getParameter('totalSupply', 1000000);
  const token = m.contract('Token', [name, symbol, totalSupply]);

  return { token };
});

module.exports = TokenModule;
