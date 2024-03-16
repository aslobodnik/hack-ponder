import { ponder } from "@/generated";

ponder.on("MyToken:Approval", async ({ event, context }) => {
  console.log(event.args);
});

ponder.on("MyToken:ApprovalForAll", async ({ event, context }) => {
  console.log(event.args);
});

ponder.on("MyToken:OwnershipTransferred", async ({ event, context }) => {
  console.log(event.args);
});

ponder.on("MyToken:PassTheBase", async ({ event, context }) => {
  console.log(event.args);
});
