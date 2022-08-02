import { task } from "hardhat/config";
import { types } from "hardhat/config";
import { getContractAt } from "@nomiclabs/hardhat-ethers/internal/helpers";
import { Contract } from "ethers";
import { TransactionResponse, TransactionReceipt } from "@ethersproject/abstract-provider";

task("transfer-ycktoken", "Transfer YckToken")
    .addParam("to", "Address", undefined, types.string)
    .addParam("amount", "Amount", undefined, types.string)
    .setAction(async (params, hre) => {
        const tokenAddress = '0x5fbdb2315678afecb367f032d93f642f64180aa3'

        return getContractAt(hre, "YckToken", tokenAddress, hre.ethers.provider.getSigner())
            .then((contract: Contract) => {
                return contract.transfer(params.to, hre.ethers.utils.parseEther(params.amount));
            })
            .then((tr: TransactionResponse) => {
                return tr.wait().then((receipt: TransactionReceipt) => {
                    console.log("transfer completed:", receipt.blockNumber)
                })
            }).catch((e: Error) => console.log(e))
    });

