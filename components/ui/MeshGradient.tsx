"use client";

import React, { useEffect, useState } from "react";

export default function MeshGradient() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="absolute inset-0 bg-tlg-midnight" />;

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-tlg-midnight z-0 pointer-events-none">
      {/* Base Dark Blue */}
      <div className="absolute inset-0 bg-tlg-midnight mix-blend-multiply" />
      
      {/* Animated Blobs */}
      <div 
        className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full mix-blend-screen opacity-40 animate-blob-spin"
        style={{
          background: "radial-gradient(circle, rgba(208, 154, 58, 0.8) 0%, rgba(7, 21, 47, 0) 70%)",
          filter: "blur(60px)",
          transformOrigin: "center center"
        }}
      />
      
      <div 
        className="absolute top-[10%] -right-[20%] w-[60vw] h-[60vw] rounded-full mix-blend-screen opacity-30 animate-blob-float"
        style={{
          background: "radial-gradient(circle, rgba(8, 42, 25, 0.8) 0%, rgba(7, 21, 47, 0) 70%)", // Emerald
          filter: "blur(60px)",
          transformOrigin: "calc(50% - 400px)"
        }}
      />
      
      <div 
        className="absolute -bottom-[30%] left-[20%] w-[80vw] h-[80vw] rounded-full mix-blend-screen opacity-30 animate-blob-spin-reverse"
        style={{
          background: "radial-gradient(circle, rgba(42, 16, 74, 0.8) 0%, rgba(7, 21, 47, 0) 70%)", // Purple
          filter: "blur(80px)",
          transformOrigin: "calc(50% + 400px)"
        }}
      />

      {/* Extreme Blur Overlay to blend everything into a liquid aurora */}
      <div className="absolute inset-0 backdrop-blur-[100px] z-10" />
      
      {/* Subtle Noise / Grain overlay for premium texture */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay z-20 pointer-events-none" style={{ backgroundImage: "url('/noise.png')" }} />
    </div>
  );
}
