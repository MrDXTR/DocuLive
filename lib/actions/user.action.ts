"use server";

import { clerkClient, EmailAddress } from "@clerk/nextjs/server";
import { parseStringify } from "../utils";
import { liveblocks } from "../liveblocks";

export const getClerkUsers = async ({ userIds }: { userIds: string[] }) => {
  try {
    const clerk = await clerkClient();
    const { data } = await clerk.users.getUserList({
      emailAddress: userIds,
    });

    const users = data.map(
      (user: {
        id: any;
        firstName: any;
        lastName: any;
        emailAddresses: { emailAddress: any }[];
        imageUrl: any;
      }) => ({
        id: user.id,
        name: `${user.firstName} ${user.lastName}`,
        email: user.emailAddresses[0].emailAddress,
        avatar: user.imageUrl,
      })
    );
    const sortedUsers = userIds.map((email) =>
      users.find((user) => user.email === email)
    );
    return parseStringify(sortedUsers);
  } catch (error) {
    console.log(`Error fetching user: ${error}`);
    return null;
  }
};

export const getDocumentUsers = async ({
  roomId,
  currentUser,
  text,
}: {
  roomId: string;
  currentUser: string;
  text: string;
}) => {
  try {
    const room = await liveblocks.getRoom(roomId);
    const users = Object.keys(room.usersAccesses).filter(
      (email) => email !== currentUser
    );

    if (text.length > 0) {
      const texts = text.toLowerCase();
      const filteredUsers = users.filter((email) =>
        email.toLowerCase().includes(texts)
      );

      return parseStringify(filteredUsers);
    }
    return parseStringify(users);
  } catch (error) {
    console.log(`Error fetching document users: ${error}`);
  }
};
