// src/hooks/useInView.ts
import { useEffect, useRef, useState } from "react";

export default function useInView() {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !ref.current) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return { ref, inView };
}
