import { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import { useTranslation } from 'contexts/Localization'
import { multicallv2 } from 'utils/multicall'
import profileABI from 'config/abi/pancakeProfile.json'
import { getPancakeProfileAddress } from 'utils/addressHelpers'
import useToast from 'hooks/useToast'
import useActiveWeb3React from 'hooks/useActiveWeb3React'

const useGetProfileCosts = () => {
  const { t } = useTranslation()
  const { chainId } = useActiveWeb3React();
  const [isLoading, setIsLoading] = useState(true)
  const [costs, setCosts] = useState({
    numberCakeToReactivate: ethers.BigNumber.from(0),
    numberCakeToRegister: ethers.BigNumber.from(0),
    numberCakeToUpdate: ethers.BigNumber.from(0),
  })
  const { toastError } = useToast()

  useEffect(() => {
    const fetchCosts = async () => {
      try {
        const calls = ['numberCakeToReactivate', 'numberCakeToRegister', 'numberCakeToUpdate'].map((method) => ({
          address: getPancakeProfileAddress(chainId),
          name: method,
        }))
        const [[numberCakeToReactivate], [numberCakeToRegister], [numberCakeToUpdate]] = await multicallv2<
          [[ethers.BigNumber], [ethers.BigNumber], [ethers.BigNumber]]
        >(profileABI, calls)

        setCosts({
          numberCakeToReactivate,
          numberCakeToRegister,
          numberCakeToUpdate,
        })
        setIsLoading(false)
      } catch (error) {
        toastError(t('Error'), t('Could not retrieve CAKE costs for profile'))
      }
    }

    fetchCosts()
  }, [setCosts, toastError, t, chainId])

  return { costs, isLoading }
}

export default useGetProfileCosts
