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

ponder.on("MyToken:OwnershipTransferred", async ({ event, context }) => {
  console.log(event.args);
});

ponder.on("MyToken:PassTheBase", async ({ event, context }) => {
  console.log(event.args);
  const { BaseToken } = context.db;

  // await BaseToken.update({
  //   id: event.args.tokenId,
  //   data: {
  //     currentStreak: event.args.streak,
  //   },
  // });
});

// export default createSchema((p) => ({
//   BaseToken: p.createTable({
//     id: p.bigint(),
//     currentOwner: p.hex().optional(),
//     owners: p.hex().list().optional(),
//     dropped: p.boolean().optional(),
//     currentStreak: p.bigint().optional(),
//   }),
// }));
