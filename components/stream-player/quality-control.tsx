"use client";

import * as React from "react";
import { Settings } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Hint } from "@/components/hint";

const QUALITIES = [
  {
    label: "1080p",
    value: "1080p",
    width: 1920,
    height: 1080,
  },
  {
    label: "720p",
    value: "720p",
    width: 1280,
    height: 720,
  },
  {
    label: "480p",
    value: "480p",
    width: 854,
    height: 480,
  },
  {
    label: "360p",
    value: "360p",
    width: 640,
    height: 360,
  },
];

interface QualityControlProps {
  onChange: (quality: { width: number; height: number }) => void;
}

export const QualityControl = ({ onChange }: QualityControlProps) => {
  const [quality, setQuality] = React.useState("720p");

  const handleChange = (value: string) => {
    setQuality(value);
    const selectedQuality = QUALITIES.find((q) => q.value === value);
    if (selectedQuality) {
      onChange({
        width: selectedQuality.width,
        height: selectedQuality.height,
      });
    }
  };

  return (
    <div className="flex items-center gap-2">
      <Hint label="Quality" asChild>
        <div className="text-white hover:bg-white/10 p-1.5 rounded-lg cursor-pointer">
          <Settings className="h-5 w-5" />
        </div>
      </Hint>
      <Select value={quality} onValueChange={handleChange}>
        <SelectTrigger className="w-[80px] bg-transparent border-0 text-white focus:ring-0 focus:ring-offset-0">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {QUALITIES.map((quality) => (
            <SelectItem key={quality.value} value={quality.value}>
              {quality.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
