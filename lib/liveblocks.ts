import { Liveblocks } from "@liveblocks/node";

if (!process.env.LIVEBLOCKS_SECRET_KEY?.startsWith("sk_")) {
  throw new Error(
    "Invalid or missing LIVEBLOCKS_SECRET_KEY environment variable"
  );
}

export const liveblocks = new Liveblocks({
  secret: process.env.LIVEBLOCKS_SECRET_KEY,
});
