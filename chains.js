module.exports = {
  mainnet: {
    name: 'mainnet',
    chainID: 'dimension_37-1',
    lcd: 'https://dimension-lcd.xpla.dev',
    ecd: 'https://dimension-evm-rpc.xpla.dev',
    api: 'https://dimension-api.xpla.io',
    walletconnectID: 1,
  },
  testnet: {
    name: 'testnet',
    chainID: 'cube_47-5',
    lcd: 'https://cube-lcd.xpla.dev',
    ecd: 'https://cube-evm-rpc.xpla.dev',
    api: 'https://cube-api.xpla.io',
    walletconnectID: 0,
  },
  localxpla: {
    name: 'localxpla',
    chainID: 'localxpla',
    lcd: 'http://localhost:1317',
    mantle: 'http://localhost:1337',
  },
};
