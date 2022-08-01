import { CenterBody } from '@components/layout/CenterBody'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useDeployments } from '@shared/useDeployments'
import { ethers } from 'ethers'
import type { NextPage } from 'next'
import { Lock } from 'src/types/typechain'
import 'twin.macro'
import tw from 'twin.macro'
import { useSigner } from 'wagmi'

const Button = tw.button`m-2 px-2 py-1 rounded-lg border border-gray-400 text-gray-400 hover:text-white`

const HomePage: NextPage = () => {
  const { data: signer } = useSigner()
  const { contracts } = useDeployments()

  const getMessage = async () => {
    if (!signer || !contracts) return
    const contract = new ethers.Contract(contracts.Lock.address, contracts.Lock.abi, signer) as Lock
    try {
      const lockMessage = await contract.getMessage()
      console.log({ lockMessage })
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <>
      <CenterBody>
        {/* Rainbowkit Connect Button */}
        <ConnectButton />

        {/* Lock.sol Contract Interactions */}
        {signer && (
          <div tw="flex mt-8 items-center text-sm">
            <Button onClick={() => getMessage()}>Get Owner</Button>
          </div>
        )}
      </CenterBody>
    </>
  )
}

export default HomePage
