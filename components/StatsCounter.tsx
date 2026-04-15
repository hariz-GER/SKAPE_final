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
  const hasAnimatedRef = useRef(false);
  const [counts, setCounts] = useState<number[]>(() => stats.map(() => 0));

  useEffect(() => {
    const node = containerRef.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimatedRef.current) {
          return;
        }

        hasAnimatedRef.current = true;
        const start = performance.now();

        const animate = (now: number) => {
          const progress = Math.min((now - start) / DURATION_MS, 1);

          setCounts(stats.map((stat) => Math.floor(stat.value * progress)));

          if (progress < 1) {
            window.requestAnimationFrame(animate);
          }
        };

        window.requestAnimationFrame(animate);
      },
      { threshold: 0.35 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
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
