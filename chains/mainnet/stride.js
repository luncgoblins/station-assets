module.exports = {
  chainID: 'stride-1',
  lcd: 'https://stride-fleet.main.stridenet.co/api',
  gasAdjustment: 1.75,
  gasPrices: { ustrd: 0 },
  prefix: 'stride',
  coinType: '118',
  baseAsset: 'ustrd',
  name: 'Stride',
  icon: process.env.CF_PAGES_URL + '/img/chains/Stride.png',
  ibc: {
    fromTerra: 'channel-46',
    toTerra: 'channel-52',
  },
  channels: {
    'phoenix-1': 'channel-52',
    'axelar-dojo-1': 'channel-69',
    'carbon-1': 'channel-47',
    'comdex-1': 'channel-49',
    'cosmoshub-4': 'channel-0',
    'crescent-1': 'channel-51',
    'juno-1': 'channel-24',
    'kaiyo-1': 'channel-18',
    'osmosis-1': 'channel-5',
    'injective-1': 'channel-6',
  },
  explorer: {
    address: 'https://www.mintscan.io/stride/account/{}',
    tx: 'https://www.mintscan.io/stride/txs/{}',
    validator: 'https://www.mintscan.io/stride/validators/{}',
    block: 'https://www.mintscan.io/stride/blocks/id/{}',
  },
  tokens: [
    {
      token: 'ustrd',
      symbol: 'STRD',
      name: 'Stride',
      icon: process.env.CF_PAGES_URL + '/img/coins/Stride.png',
      decimals: 6,
    },
    {
      token: 'stuluna',
      symbol: 'stLUNA',
      name: 'Stride LUNA',
      icon: process.env.CF_PAGES_URL + '/img/coins/stLUNA.svg',
      decimals: 6,
      lsd: 'uluna',
    },
    {
      token: 'stuatom',
      symbol: 'stATOM',
      name: 'stATOM',
      icon: process.env.CF_PAGES_URL + '/img/coins/stATOM.svg',
      decimals: 6,
      lsd: 'uatom',
    },
    {
      token: 'stustars',
      symbol: 'stSTARS',
      name: 'stSTARS',
      icon: process.env.CF_PAGES_URL + '/img/coins/stSTARS.svg',
      decimals: 6,
      lsd: 'ustars',
    },
    {
      token: 'stujuno',
      symbol: 'stJUNO',
      name: 'stJUNO',
      icon: process.env.CF_PAGES_URL + '/img/coins/stJUNO.svg',
      decimals: 6,
      lsd: 'ujuno',
    },
    {
      token: 'stuosmo',
      symbol: 'stOSMO',
      name: 'stOSMO',
      icon: process.env.CF_PAGES_URL + '/img/coins/stOSMO.svg',
      decimals: 6,
      lsd: 'uosmo',
    },
    {
      token: 'staevmos',
      symbol: 'stEVMOS',
      name: 'stEVMOS',
      icon: process.env.CF_PAGES_URL + '/img/coins/stEVMOS.svg',
      decimals: 18,
      lsd: 'aevmos',
    },
  ],
}
