export const FACTORY_ADDRESS = '0x1d21Db6cde1b18c7E47B0F7F42f4b3F68b9beeC9'

export const BUNDLE_ID = '1'

export const timeframeOptions = {
  WEEK: '1 week',
  MONTH: '1 month',
  // THREE_MONTHS: '3 months',
  // YEAR: '1 year',
  HALF_YEAR: '6 months',
  ALL_TIME: 'All time',
}

// token list urls to fetch tokens from - use for warnings on tokens and pairs
export const SUPPORTED_LIST_URLS__NO_ENS = [
  'https://gateway.ipfs.io/ipns/tokens.uniswap.org',
  'https://www.coingecko.com/tokens_list/uniswap/defi_100/v_0_0_0.json',
]

// hide from overview list
export const TOKEN_BLACKLIST = ['0x104592a158490a9228070e0a8e5343b499e125d0']

// pair blacklist
export const PAIR_BLACKLIST = ['0xde251792215fee62f458141db2944283740039ec', '0x0dabcde647ba8d912ce173ce8687b3076a66b0b2', '0xf2f2a88bcf47d1a86ae15fd17098f93152606c3d']

// warnings to display if page contains info about blocked token
export const BLOCKED_WARNINGS = {}

/**
 * For tokens that cause erros on fee calculations
 */
export const FEE_WARNING_TOKENS = []

export const UNTRACKED_COPY = 'Derived USD values may be inaccurate without liquid stablecoin or ETH pairings.'

// tokens that should be tracked but arent due to lag in subgraph
export const TRACKED_OVERRIDES = [
  '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619'.toLowerCase(), // WETH
  '0x2791bca1f2de4661ed88a30c99a7a9449aa84174'.toLowerCase(), // USDC
  '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270'.toLowerCase(), //WMATIC
  '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6'.toLowerCase(), //WBTC
  '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063'.toLowerCase(), // DAI
  '0xc2132d05d31c914a87c6611c10748aeb04b58e8f'.toLowerCase(), // USDT
  '0x255707B70BF90aa112006E1b07B9AeA6De021424'.toLowerCase(), // TETU
  '0xa3Fa99A148fA48D14Ed51d610c367C61876997F1'.toLowerCase(), // MAI
  '0x580A84C73811E1839F75d86d75d88cCa0c241fF4'.toLowerCase(), // QI
]
