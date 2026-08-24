import React from "react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-tlg-midnight text-white">
      {/* Liquid Aurora Loader */}
      <div className="relative w-32 h-32 flex items-center justify-center mb-8">
        <div className="absolute inset-0 rounded-full border border-white/10 animate-[spin_3s_linear_infinite]" />
        <div className="absolute inset-2 rounded-full border-t border-r border-tlg-signatureGold animate-[spin_2s_ease-in-out_infinite]" />
        <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-tlg-signatureGold to-transparent opacity-20 blur-md animate-pulse" />
      </div>
      
      {/* Brand Typography */}
      <div className="flex flex-col items-center leading-none tracking-widest text-center animate-pulse">
        <span className="font-serif text-2xl font-medium tracking-tight mb-2">Triumphal</span>
        <span className="text-[9px] uppercase text-tlg-signatureGold font-sans font-bold">Lifetime Group</span>
      </div>
    </div>
  );
}
