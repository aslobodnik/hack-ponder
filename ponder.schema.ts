import { createSchema } from "@ponder/core";

export default createSchema((p) => ({
  BaseToken: p.createTable({
    id: p.bigint(),
    currentOwner: p.hex().optional(),
    transfers: p.many("TransferEvents.tokenId"),
    dropped: p.boolean().optional(),
    currentStreak: p.bigint().optional(),
  }),

  TransferEvents: p.createTable({
    id: p.hex(),
    from: p.hex(),
    to: p.hex(),
    tokenId: p.bigint().references("BaseToken.id"),
    timestamp: p.bigint(),
  }),
}));
