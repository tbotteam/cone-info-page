export const BUNDLE_ID = '1'
export const FEE = 0

export const timeframeOptions = {
  WEEK: '1 week',
  MONTH: '1 month',
  // THREE_MONTHS: '3 months',
  // YEAR: '1 year',
  HALF_YEAR: '6 months',
  ALL_TIME: 'All time',
}

export const NETWORK_SCAN = 'bscscan.com'

export const WBNB = '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c'
export const NETWORK_TOKEN_NAME = 'BNB'

// always 1 USD
export const PRICE_OVERRIDES = [
  '0x55d398326f99059ff775485246999027b3197955', // USDT
  '0xe9e7cea3dedca5984780bafc599bd69add087d56', // BUSDT
  '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d', // USDC
]

// token addresses and their respective pair addresses (pools with bnb/wbnb) to use for price calculation.
export const PLATFORM_TOKENS_TO_PAIR_MAPPING = {
  '0x11a38e06699b238d6d9a0c7a01f3ac63a07ad318': '0x4c88871d129a618ebb460f90f99311cb32d840ea',
  '0xa3870fbbeb730ba99e4107051612af3465ca9f5e': '0xa309cc1cbcf7f73fd1f3dbdaa9cb946b8d449884',
}

export const PRICE_CALCULATOR_TOKENS = [
  // wbnb
  '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',

  // usdt
  '0x55d398326f99059ff775485246999027b3197955',

  // usdc
  '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',

  // busd
  '0xe9e7cea3dedca5984780bafc599bd69add087d56',
]

export const TOKEN_BLACKLIST = []

export const PAIR_BLACKLIST = []

// warnings to display if page contains info about blocked token
export const BLOCKED_WARNINGS = {}

/**
 * For tokens that cause erros on fee calculations
 */
export const FEE_WARNING_TOKENS = []

export const UNTRACKED_COPY = 'Derived USD values may be inaccurate without liquid stablecoin or ETH pairings.'

// tokens that should be tracked but arent due to lag in subgraph
export const TRACKED_OVERRIDES = [
  '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'.toLowerCase(), // WBNB
  // '0x11A38e06699b238D6D9A0C7A01f3AC63a07ad318'.toLowerCase(),  // USDFI
  '0x2170ed0880ac9a755fd29b2688956bd959f933f8'.toLowerCase(), // WETH
  '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d'.toLowerCase(), // USDC
  '0x90c97f71e18723b0cf0dfa30ee176ab653e89f40'.toLowerCase(), // FRAX
  '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3'.toLowerCase(), // DAI
  '0x55d398326f99059ff775485246999027b3197955'.toLowerCase(), // USDT
  '0x3f56e0c36d275367b8c502090edf38289b3dea0d'.toLowerCase(), // MAI
  '0xe9e7cea3dedca5984780bafc599bd69add087d56'.toLowerCase(), // BUSD
  // '0xA60205802E1B5C6EC1CAFA3cAcd49dFeECe05AC9'.toLowerCase(), // CONE
  // '0xe80772eaf6e2e18b651f160bc9158b2a5cafca65'.toLowerCase(), // USD+
  // '0xd7fbbf5cb43b4a902a8c994d94e821f3149441c7'.toLowerCase(), // UNKNOWN
  '0xa3870fbBeb730BA99e4107051612af3465CA9F5e'.toLowerCase(), // STABLE
  '0x64048A7eEcF3a2F1BA9e144aAc3D7dB6e58F555e'.toLowerCase(), // FRXETH
  '0x3Cd55356433C89E50DC51aB07EE0fa0A95623D53'.toLowerCase(), // SFRXETH
  '0x0782b6d8c4551B9760e74c0545a9bCD90bdc41E5'.toLowerCase(), // HAY
  '0x1bdd3Cf7F79cfB8EdbB955f20ad99211551BA275'.toLowerCase(), // BNBX
  // '0xa3870fbBeb730BA99e4107051612af3465CA9F5e'.toLowerCase(), //STABLE
]
