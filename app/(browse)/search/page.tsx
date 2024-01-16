import { redirect } from "next/navigation";
import React from "react";

interface SearchPageProps {
  searchParams: {
    term?: string;
  };
}

const SearchPage = ({ searchParams }: SearchPageProps) => {
  if (!searchParams.term) {
    redirect("/");
  }

  return <div className="h-full p-8 max-w-screen-2xl mx-auto">SearchPage</div>;
};

export default SearchPage;
