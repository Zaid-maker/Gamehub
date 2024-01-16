import { redirect } from "next/navigation";
import React from "react";
import { Results } from "./_components/results";

interface SearchPageProps {
  searchParams: {
    term?: string;
  };
}

const SearchPage = ({ searchParams }: SearchPageProps) => {
  if (!searchParams.term) {
    redirect("/");
  }

  return (
    <div className="h-full p-8 max-w-screen-2xl mx-auto">
      <Results term={searchParams.term} />
    </div>
  );
};

export default SearchPage;
