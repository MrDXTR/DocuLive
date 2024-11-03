import CollaborativeRoom from "@/components/CollaborativeRoom";
import { getDocument } from "@/lib/actions/room.actions";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const Document = async ({ params: { id } }: SearchParamProps) => {
  const clerkUser = await currentUser();
  if (!clerkUser) {
    redirect("/sign-in");
  }

  const room = await getDocument(id, clerkUser.emailAddresses[0].emailAddress);
  if (!room) {
    redirect("/");
  }

  return (
    <main className="flex flex-col items-center w-full">
      <CollaborativeRoom
        roomId={id}
        roomMetadata={room.metadata}
        users={[]}
        currentUserType={"editor"}
      />
    </main>
  );
};

export default Document;
