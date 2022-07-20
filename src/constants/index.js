export const BUNDLE_ID = '1'
export const FEE = 0.0001

export const timeframeOptions = {
  WEEK: '1 week',
  MONTH: '1 month',
  // THREE_MONTHS: '3 months',
  // YEAR: '1 year',
  HALF_YEAR: '6 months',
  ALL_TIME: 'All time',
}

export const NETWORK_SCAN = 'bscscan.com'

export const WBNB = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
export const NETWORK_TOKEN_NAME = 'BNB'

// always 1 USD
export const PRICE_OVERRIDES = [
  '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d', // USDC
]

// hide from overview list
export const TOKEN_BLACKLIST = ['']

// pair blacklist
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
  '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'.toLowerCase(), // WBNB_TOKEN
  '0x2170ed0880ac9a755fd29b2688956bd959f933f8'.toLowerCase(), // WETH_TOKEN
  '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d'.toLowerCase(), // USDC_TOKEN
  '0x90c97f71e18723b0cf0dfa30ee176ab653e89f40'.toLowerCase(), // FRAX_TOKEN
  '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3'.toLowerCase(), // DAI_TOKEN
  '0x55d398326f99059ff775485246999027b3197955'.toLowerCase(), // USDT_TOKEN
  '0x3f56e0c36d275367b8c502090edf38289b3dea0d'.toLowerCase(), // MAI_TOKEN
  '0xe9e7cea3dedca5984780bafc599bd69add087d56'.toLowerCase(), // BUSD_TOKEN
]
