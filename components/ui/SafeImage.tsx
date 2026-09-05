"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";

interface SafeImageProps extends Omit<ImageProps, "onError"> {
  fallback: React.ReactNode;
}

export function SafeImage({ fallback, alt, ...props }: SafeImageProps) {
  const [error, setError] = useState(false);

  if (error || !props.src) {
    return <>{fallback}</>;
  }

  return (
    <Image
      {...props}
      alt={alt}
      onError={() => setError(true)}
    />
  );
}
