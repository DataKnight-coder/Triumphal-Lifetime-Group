"use client";

import { useEffect } from "react";

export default function PwaRegistry() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker.register("/sw.js").catch(() => {
          // Silent catch for dev/unsupported environments
        });
      });
    }
  }, []);

  return null;
}
