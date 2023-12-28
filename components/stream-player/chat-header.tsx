"use client";

import React from "react";

export const ChatHeader = () => {
  return (
    <div className="relative p-3 border-b">
      <div className="absolute left-2 top-2 hidden lg:block">ChatToggle</div>
      <p className="font-semibold text-priamry text-center">Stream Chat</p>
      <div className="absolute right-2 top-2">VariantToggle</div>
    </div>
  );
};
