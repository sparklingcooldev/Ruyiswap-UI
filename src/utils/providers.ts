import { ethers } from 'ethers'
import getRpcUrl from 'utils/getRpcUrl'

const RPC_URL = getRpcUrl()

export const simpleRpcProvider = new ethers.providers.Web3Provider(window.ethereum, "any");

export default null
