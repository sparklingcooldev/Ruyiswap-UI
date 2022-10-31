import { ChainId } from '@pancakeswap/sdk'

const NETWORK_URLS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: 'https://bsc-dataseed1.defibit.io',
  [ChainId.TESTNET]: 'https://data-seed-prebsc-1-s1.binance.org:8545',
  [ChainId.AVAX_TESTNET]: 'https://api.avax-test.network/ext/bc/C/rpc',
  [ChainId.MUMBAI]: 'https://rpc-mumbai.maticvigil.com/',
  [ChainId.FTMTESTNET]: 'https://rpc.testnet.fantom.network/',
  [ChainId.RINKEBY]: 'https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
  [ChainId.CRONOSTESTNET]: 'https://cronos-testnet-3.crypto.org:8545/',
}

export default NETWORK_URLS
