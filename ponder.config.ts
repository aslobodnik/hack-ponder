import { createConfig } from "@ponder/core";
import { http } from "viem";

import { MyTokenAbi } from "./abis/MyTokenAbi";

export default createConfig({
  networks: {
    baseSepolia: {
      chainId: 84532,
      transport: http(process.env.PONDER_RPC_URL_84532),
    },
  },
  contracts: {
    MyToken: {
      abi: MyTokenAbi,
      address: "0x7382Eb8658DEFd8883cBCA5AE4B55f2A70BF4a78",
      network: "baseSepolia",
      startBlock: 7417848,
    },
  },
});
