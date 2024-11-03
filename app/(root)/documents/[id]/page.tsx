import CollaborativeRoom from "@/components/CollaborativeRoom";
import { Editor } from "@/components/editor/Editor";
import Header from "@/components/Header";
import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
import React from "react";

const Document = () => {
  return (
    <main className="flex flex-col items-center w-full">
      <CollaborativeRoom />
    </main>
  );
};

export default Document;
