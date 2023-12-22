import { Button } from "@/components/ui/button";
import React from "react";

const Keys = () => {
  return (
    <div className="p-6">
      <div className="mb-4">
        <h1 className="text-2xl font-semibold">Stream Key & URLs</h1>
        <Button variant="primary">Generate</Button>
      </div>
      <div className="space-y-4"></div>
    </div>
  );
};

export default Keys;
