module.exports = {
  chainID: 'injective-1',
  lcd: 'https://lcd.injective.network',
  gasAdjustment: 1.75,
  gasPrices: { inj: 1000000000 },
  prefix: 'inj',
  coinType: '60',
  baseAsset: 'inj',
  name: 'Injective',
  icon: process.env.CF_PAGES_URL + '/img/chains/Injective.svg',
  ibc: {
    toTerra: '', // TODO: update with correct channel when available
    fromTerra: '', // TODO: update with correct channel when available
  },
  channels: {
    'phoenix-1': '', // TODO: update with correct channel when available
    'axelar-dojo-1': 'channel-84',
    'cosmoshub-4': 'channel-1',
    'crescent-1': 'channel-90',
    'migaloo-1': 'channel-102',
    'osmosis-1': 'channel-8',
    'stride-1': 'channel-89',
  },
  explorer: {
    address: 'https://www.mintscan.io/injective/account/{}',
    tx: 'https://www.mintscan.io/injective/txs/{}',
    validator: 'https://www.mintscan.io/injective/validators/{}',
    block: 'https://www.mintscan.io/injective/blocks/id/{}',
  },
  tokens: [
    {
      token: 'inj',
      symbol: 'INJ',
      name: 'Injective',
      icon: process.env.CF_PAGES_URL + '/img/coins/Injective.svg',
      decimals: 18,
    },
  ],
}
