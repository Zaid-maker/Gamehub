import { Check } from "lucide-react";

export const VerifiedMark = () => {
  return (
    <div className="p-0.5 flex items-center justify-center h-4 w-4 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.5)]">
      <Check className="h-[10px] w-[10px] text-primary stroke-[4px]" />
    </div>
  );
};
