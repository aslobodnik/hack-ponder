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
      address: "0x024908AE411d28DeDF86700C69b2F4A172FebCCc",
      network: "baseSepolia",
      startBlock: 7423641,
    },
  },
});
