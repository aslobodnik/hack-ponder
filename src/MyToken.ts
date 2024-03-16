import { ponder } from "@/generated";

ponder.on("MyToken:Transfer", async ({ event, context }) => {
  console.log(event.args);
  const { BaseToken, TransferEvents } = context.db;

  await BaseToken.upsert({
    id: event.args.tokenId,
    create: {
      currentOwner: event.args.to,
    },
    update: {
      currentOwner: event.args.to,
    },
  });

  await TransferEvents.create({
    id: event.transaction.hash,
    data: {
      from: event.args.from,
      to: event.args.to,
      tokenId: event.args.tokenId,
      timestamp: event.block.timestamp,
    },
  });
});
