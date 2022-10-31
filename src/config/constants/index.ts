import { ChainId, JSBI, Percent, Token } from '@pancakeswap/sdk'
import { mainnetTokens, testnetTokens, avaxtestnetTokens, mumbaiTokens, ftmtestnetTokens, rinkebyTokens, cronostestnetTokens } from './tokens'

export const ROUTER_ADDRESS = {
  97: '0x75Ad1c91539D814c9F95946c77f0dA5984E385A6',
  43113: '0xD6fF37E2c4C2577FA8feE01714c7A3756CbBE981',
  80001: '0xbB92FEC4DD1358a0Fbf5908b62e0725def5fcEba',
  4002: '0x261614876a3A1eDaf46F1b812667B341eDfbeF09',
  4: '0x4acc87223e91AE446a043d359824bA6D3200b20B',
  338: '0x0c19E21C4f7036F195a98877d092327C6e69b9a4'
}
// export const ROUTER_ADDRESS = '0xD6fF37E2c4C2577FA8feE01714c7A3756CbBE981'

// a list of tokens by chain
type ChainTokenList = {
  readonly [chainId in ChainId]: Token[]
}

// used to construct intermediary pairs for trading
export const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList = {
  [ChainId.MAINNET]: [
    mainnetTokens.wbnb,
    mainnetTokens.cake,
    mainnetTokens.busd,
    mainnetTokens.usdt,
    mainnetTokens.btcb,
    mainnetTokens.ust,
    mainnetTokens.eth,
    mainnetTokens.usdc,
  ],
  [ChainId.TESTNET]: [testnetTokens.wbnb, testnetTokens.cake, testnetTokens.busd],
  [ChainId.AVAX_TESTNET]: [avaxtestnetTokens.wbnb],
  [ChainId.MUMBAI]: [mumbaiTokens.wmatic],
  [ChainId.FTMTESTNET]: [ftmtestnetTokens.wftmtestnet],
  [ChainId.RINKEBY]: [rinkebyTokens.wftmtestnet],
  [ChainId.CRONOSTESTNET]: [cronostestnetTokens.wcronostestnet],
}

/**
 * Addittional bases for specific tokens
 * @example { [WBTC.address]: [renBTC], [renBTC.address]: [WBTC] }
 */
export const ADDITIONAL_BASES: { [chainId in ChainId]?: { [tokenAddress: string]: Token[] } } = {
  [ChainId.MAINNET]: {},
}

/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 * @example [AMPL.address]: [DAI, WETH[ChainId.MAINNET]]
 */
export const CUSTOM_BASES: { [chainId in ChainId]?: { [tokenAddress: string]: Token[] } } = {
  [ChainId.MAINNET]: {},
}

// used for display in the default list when adding liquidity
export const SUGGESTED_BASES: ChainTokenList = {
  [ChainId.MAINNET]: [mainnetTokens.busd, mainnetTokens.cake, mainnetTokens.btcb],
  [ChainId.TESTNET]: [testnetTokens.wbnb, testnetTokens.cake, testnetTokens.busd],
  [ChainId.AVAX_TESTNET]: [],
  [ChainId.MUMBAI]: [],
  [ChainId.FTMTESTNET]: [],
  [ChainId.RINKEBY]: [],
  [ChainId.CRONOSTESTNET]: [],
}

// used to construct the list of all pairs we consider by default in the frontend
export const BASES_TO_TRACK_LIQUIDITY_FOR: ChainTokenList = {
  [ChainId.MAINNET]: [mainnetTokens.wbnb, mainnetTokens.dai, mainnetTokens.busd, mainnetTokens.usdt],
  [ChainId.TESTNET]: [testnetTokens.wbnb, testnetTokens.cake, testnetTokens.busd],
  [ChainId.AVAX_TESTNET]: [],
  [ChainId.MUMBAI]: [],
  [ChainId.FTMTESTNET]: [],
  [ChainId.RINKEBY]: [],
  [ChainId.CRONOSTESTNET]: [],
}

export const PINNED_PAIRS: { readonly [chainId in ChainId]?: [Token, Token][] } = {
  [ChainId.MAINNET]: [
    [mainnetTokens.cake, mainnetTokens.wbnb],
    [mainnetTokens.busd, mainnetTokens.usdt],
    [mainnetTokens.dai, mainnetTokens.usdt],
  ],
}

export const NetworkContextName = 'NETWORK'

// default allowed slippage, in bips
export const INITIAL_ALLOWED_SLIPPAGE = 50
// 20 minutes, denominated in seconds
export const DEFAULT_DEADLINE_FROM_NOW = 60 * 20

export const BIG_INT_ZERO = JSBI.BigInt(0)

// one basis point
export const ONE_BIPS = new Percent(JSBI.BigInt(1), JSBI.BigInt(10000))
export const BIPS_BASE = JSBI.BigInt(10000)
// used for warning states
export const ALLOWED_PRICE_IMPACT_LOW: Percent = new Percent(JSBI.BigInt(100), BIPS_BASE) // 1%
export const ALLOWED_PRICE_IMPACT_MEDIUM: Percent = new Percent(JSBI.BigInt(300), BIPS_BASE) // 3%
export const ALLOWED_PRICE_IMPACT_HIGH: Percent = new Percent(JSBI.BigInt(500), BIPS_BASE) // 5%
// if the price slippage exceeds this number, force the user to type 'confirm' to execute
export const PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN: Percent = new Percent(JSBI.BigInt(1000), BIPS_BASE) // 10%
// for non expert mode disable swaps above this
export const BLOCKED_PRICE_IMPACT_NON_EXPERT: Percent = new Percent(JSBI.BigInt(1500), BIPS_BASE) // 15%

// used to ensure the user doesn't send so much BNB so they end up with <.01
export const MIN_BNB: JSBI = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(16)) // .01 BNB
export const BETTER_TRADE_LESS_HOPS_THRESHOLD = new Percent(JSBI.BigInt(50), JSBI.BigInt(10000))

export const ZERO_PERCENT = new Percent('0')
export const ONE_HUNDRED_PERCENT = new Percent('1')

// SDN OFAC addresses
export const BLOCKED_ADDRESSES: string[] = [
  '0x7F367cC41522cE07553e823bf3be79A889DEbe1B',
  '0xd882cFc20F52f2599D84b8e8D58C7FB62cfE344b',
  '0x901bb9583b24D97e995513C6778dc6888AB6870e',
  '0xA7e5d5A720f06526557c513402f2e6B5fA20b008',
  '0x8576aCC5C05D6Ce88f4e49bf65BdF0C62F91353C',
]

export { default as farmsConfig } from './farms'
export { default as poolsConfig } from './pools'
export { default as ifosConfig } from './ifo'
