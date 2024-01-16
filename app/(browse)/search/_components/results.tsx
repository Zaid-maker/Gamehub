import React from "react";

interface ResultsProps {
  term?: string;
}

export const Results = ({ term }: ResultsProps) => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">
        Results for term &quot;{term}&quot;
      </h2>
    </div>
  );
};
