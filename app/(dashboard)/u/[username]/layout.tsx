import { Container } from "@/app/(browse)/_components/container";
import { Navbar } from "@/app/(browse)/_components/navbar";
import { Sidebar } from "@/app/(browse)/_components/sidebar";
import { redirect } from "next/navigation";
import React from "react";

interface CreatorLayoutProps {
  params: {
    username: string;
  };
  children: React.ReactNode;
}

const CreatorLayout = async ({ params, children }: CreatorLayoutProps) => {
  return (
    <>
      <Navbar />
      <div className="flex h-full pt-20">
        <Sidebar />
        <Container>{children}</Container>
      </div>
    </>
  );
};

export default CreatorLayout;
