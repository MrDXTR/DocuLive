import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { SignedIn, UserButton } from "@clerk/nextjs";
import React from "react";
import Image from "next/image";
import AddDocument from "@/components/AddDocument";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getDocuments } from "@/lib/actions/room.actions";
import Link from "next/link";
import { dateConverter } from "@/lib/utils";
import { DeleteModal } from "@/components/DeleteModal";

const Home = async () => {
  const clerkUser = await currentUser();
  if (!clerkUser) {
    redirect("/sign-in");
  }
  const documents = await getDocuments(
    clerkUser.emailAddresses[0].emailAddress
  );
  return (
    <main className="home-container">
      <Header className="sticky top-0 left-0 ">
        <div className="flex items-center gap-2 lg:gap-4">
          Notification
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </Header>
      {documents?.data?.length > 0 ? (
        <div className="document-list-container">
          <div className="document-list-title">
            <h3 className="text-28 font-semibold">All Documents</h3>
            <AddDocument
              userId={clerkUser.id}
              email={clerkUser.emailAddresses[0].emailAddress}
            />
          </div>
          <ul className="document-ul">
            {documents?.data?.map(({ id, metadata, createdAt }: any) => (
              <li key={id} className="document-list-item">
                <Link
                  href={`/documents/${id}`}
                  className="flex-1 flex items-center gap-4"
                >
                  <div className="hidden rounded-md bg-dark-500 p-2 sm:block">
                    <Image
                      src="/assets/icons/doc.svg"
                      alt="document"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="space-y-1">
                    <p className="line-clamp-1 text-lg">{metadata.title}</p>
                    <p className="text-sm text-blue-100 font-light">
                      Created about {dateConverter(createdAt)}
                    </p>
                  </div>
                </Link>
                <DeleteModal roomId={id} />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="document-list-empty">
          <Image
            src="/assets/icons/doc.svg"
            alt="empty document"
            width={40}
            height={40}
            className="mx-auto"
          />
          <AddDocument
            userId={clerkUser.id}
            email={clerkUser.emailAddresses[0].emailAddress}
          />
        </div>
      )}
    </main>
  );
};

export default Home;
