"use client";

import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface IconWrapProps {
  icon: LucideIcon;
  className?: string;
  size?: "sm" | "md";
}

export function IconWrap({ icon: Icon, className, size = "md" }: IconWrapProps) {
  return (
    <div
      className={cn(
        "icon-wrap",
        size === "sm" && "h-10 w-10 rounded-xl",
        className
      )}
    >
      <Icon
        className={cn(size === "sm" ? "h-4 w-4" : "h-5 w-5")}
        strokeWidth={1.5}
      />
    </div>
  );
}
