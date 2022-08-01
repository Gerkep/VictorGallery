import { parseEther } from 'ethers/lib/utils'
import { DeployFunction } from 'hardhat-deploy/types'
import { HardhatRuntimeEnvironment } from 'hardhat/types'

const func: DeployFunction = async function(hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre
  const { deploy } = deployments

  const { deployer } = await getNamedAccounts()
  console.log(`Deploying as ${deployer}…`)

  await deploy('Lock', {
    from: deployer,
    log: true,
  })
}
func.tags = ['Lock']
export default func
