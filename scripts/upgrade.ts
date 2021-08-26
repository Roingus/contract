import { ethers, upgrades } from "hardhat";

const CONTR = process.env.ADDR || ""
async function main() {
    const factory = await ethers.getContractFactory("RoingusToken");

    const contract = await upgrades.upgradeProxy(CONTR, factory)
    console.log('upgraded');
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
