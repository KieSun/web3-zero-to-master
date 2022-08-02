import { ethers } from "hardhat";

async function main() {
    const lockedAmount = ethers.utils.parseEther("100");

    const Lock = await ethers.getContractFactory("YckToken");
    const lock = await Lock.deploy(lockedAmount);

    await lock.deployed();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
