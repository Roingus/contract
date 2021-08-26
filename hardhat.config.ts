
import { HardhatUserConfig } from "hardhat/types";
import '@openzeppelin/hardhat-upgrades';
import "@typechain/hardhat";





const TESTNET_PRIVATE_KEY = process.env.TESTNET_PRIVKEY || ""
const MAINNET_PRIVATE_KEY = process.env.MAINNET_PRIVKEY || ""

const config: HardhatUserConfig = {
    defaultNetwork: "hardhat",
    solidity: {
        compilers: [{ version: "0.8.3", settings: {} }],
    },

    networks: {
        hardhat: {},
        localhost: {},
        testnet: {
            url: 'https://rpc.testnet.fantom.network',
            accounts: [TESTNET_PRIVATE_KEY], chainId: 4002,
        },
        mainnet: {
            url: 'https://rpcapi.fantom.network',
            accounts: [MAINNET_PRIVATE_KEY], chainId: 250,
        }
    }
};

export default config;
