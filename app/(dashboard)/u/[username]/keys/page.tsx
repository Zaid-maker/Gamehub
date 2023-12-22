import { Button } from "@/components/ui/button";
import React from "react";
import { UrlCard } from "./_components/url-card";

const Keys = () => {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold">Stream Key & URLs</h1>
        <Button variant="primary">Generate</Button>
      </div>
      <div className="space-y-4">
        <UrlCard />
      </div>
    </div>
  );
};

export default Keys;
