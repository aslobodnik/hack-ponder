import { createConfig } from "@ponder/core";
import { http } from "viem";

import { MyTokenAbi } from "./abis/MyTokenAbi";

export default createConfig({
  networks: {
    base: {
      chainId: 8453,
      transport: http(process.env.PONDER_RPC_URL_8453),
    },
  },
  contracts: {
    MyToken: {
      abi: MyTokenAbi,
      address: "0xEC2244b547BD782FC7DeefC6d45E0B3a3cbD488d",
      network: "base",
      startBlock: 11918245,
    },
  },
});
