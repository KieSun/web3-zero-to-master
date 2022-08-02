import '@nomiclabs/hardhat-ethers'
import { HardhatUserConfig } from "hardhat/config";

import("./tasks/yckToken");

const config: HardhatUserConfig = {
  solidity: '0.8.0'
}

export default config
