"use client";

import { useEffect } from "react";
import { site } from "@/lib/site";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function AnalyticsEvents() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = (event.target as HTMLElement).closest("[data-track]");
      if (!(target instanceof HTMLElement)) return;
      const name = target.getAttribute("data-track");
      if (!name) return;
      window.gtag?.("event", name, { event_category: "conversion" });
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  if (!site.gaId) return null;
  return null;
}
