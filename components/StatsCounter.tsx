"use client";

import { useEffect, useRef, useState } from "react";

type Stat = {
  value: number;
  suffix: string;
  label: string;
};

const stats: Stat[] = [
  { value: 20, suffix: "+", label: "Years of Excellence" },
  { value: 150, suffix: "+", label: "Projects Delivered" },
  { value: 100, suffix: "%", label: "Client Satisfaction" }
];

const DURATION_MS = 1500;

export default function StatsCounter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isVisibleRef = useRef(false);
  const rafIdRef = useRef<number | null>(null);
  const [counts, setCounts] = useState<number[]>(() => stats.map(() => 0));

  useEffect(() => {
    const node = containerRef.current;

    if (!node) {
      return;
    }

    const prefersReducedMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    )?.matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (isVisibleRef.current) {
            return;
          }

          isVisibleRef.current = true;

          if (prefersReducedMotion) {
            setCounts(stats.map((stat) => stat.value));
            return;
          }

          if (rafIdRef.current !== null) {
            window.cancelAnimationFrame(rafIdRef.current);
          }

          setCounts(stats.map(() => 0));
          const start = performance.now();

          const animate = (now: number) => {
            const t = Math.min((now - start) / DURATION_MS, 1);
            const eased = 1 - Math.pow(1 - t, 3);

            setCounts(stats.map((stat) => Math.round(stat.value * eased)));

            if (t < 1) {
              rafIdRef.current = window.requestAnimationFrame(animate);
              return;
            }

            rafIdRef.current = null;
            setCounts(stats.map((stat) => stat.value));
          };

          rafIdRef.current = window.requestAnimationFrame(animate);
          return;
        }

        isVisibleRef.current = false;
        if (rafIdRef.current !== null) {
          window.cancelAnimationFrame(rafIdRef.current);
          rafIdRef.current = null;
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (rafIdRef.current !== null) {
        window.cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="stats-grid">
      {stats.map((stat, index) => (
        <article key={stat.label}>
          <strong>
            {counts[index]}
            {stat.suffix}
          </strong>
          <span>{stat.label}</span>
        </article>
      ))}
    </div>
  );
}
