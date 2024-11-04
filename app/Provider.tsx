"use client";

import React from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import Loader from "@/components/Loader";
import { getClerkUsers, getDocumentUsers } from "@/lib/actions/user.action";
import { useUser } from "@clerk/nextjs";

const Provider = ({ children }: { children: React.ReactNode }) => {
  const { user: clerkUser } = useUser();

  if (!clerkUser?.emailAddresses[0]?.emailAddress) {
    return null;
  }

  return (
    <LiveblocksProvider
      authEndpoint={"/api/liveblocks-auth"}
      resolveUsers={async ({ userIds }) => {
        const users = await getClerkUsers({ userIds });
        return users;
      }}
      resolveMentionSuggestions={async ({ text, roomId }) => {
        const roomUsers = await getDocumentUsers({
          roomId,
          currentUser: clerkUser.emailAddresses[0].emailAddress,
          text,
        });
        return roomUsers;
      }}
    >
      {/* <RoomProvider id="my-room"> */}
      <ClientSideSuspense fallback={<Loader />}>{children}</ClientSideSuspense>
      {/* </RoomProvider> */}
    </LiveblocksProvider>
  );
};

export default Provider;
