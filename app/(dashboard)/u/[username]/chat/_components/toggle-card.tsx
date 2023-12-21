"use client";

type FieldTypes = "isChatEnabled" | "isChatDelayed" | "isChatFollowersOnly";

interface ToggleCardProps {
  label: string;
  value: boolean;
  field: FieldTypes;
}

export const ToggleCard = ({ label, value, field }: ToggleCardProps) => {
  return <div>ToggleCard</div>;
};
