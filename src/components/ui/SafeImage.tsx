"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type SafeImageProps = Omit<ImageProps, "onError"> & {
  placeholderClassName?: string;
};

export function SafeImage({
  className,
  placeholderClassName,
  alt,
  fill,
  ...props
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={cn(
          fill && "absolute inset-0",
          "flex flex-col items-center justify-center gap-3 bg-beige p-6 text-center",
          !fill && "h-full w-full",
          placeholderClassName,
          className
        )}
      >
        <ImageIcon className="h-10 w-10 text-gray-muted" strokeWidth={1.25} />
        <p className="max-w-[200px] text-xs leading-relaxed text-charcoal-light">
          {alt}
        </p>
      </div>
    );
  }

  return (
    <Image
      {...props}
      fill={fill}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
    />
  );
}
