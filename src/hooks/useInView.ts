
"use client";
import { useEffect, useRef, useState } from "react";

export default function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const obs = new IntersectionObserver((entries) => {
      if (entries[0]?.isIntersecting) {
        setInView(true);
        obs.disconnect();
      }
    }, { threshold: 0.01, rootMargin: "0px 0px -10% 0px" });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, inView } as const;
}
