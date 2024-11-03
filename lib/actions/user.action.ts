"use server";

import { clerkClient, EmailAddress } from "@clerk/nextjs/server";
import { parseStringify } from "../utils";

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
