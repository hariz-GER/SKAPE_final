"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { withBasePath } from "@/lib/basePath";

const arrows = [
  {
    src: withBasePath("/about-arrows/2.webp"),
    alt: "Modern bedroom interior"
  },
  {
    src: withBasePath("/about-arrows/3.webp"),
    alt: "Modern office interior"
  },
  {
    src: withBasePath("/about-arrows/4.webp"),
    alt: "Executive portrait outdoors"
  },
  {
    src: withBasePath("/about-arrows/home-office-small.jpg"),
    alt: "Minimal home office rendering"
  }
];

export default function AboutArrowsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [arrowsOpen, setArrowsOpen] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) {
      return;
    }

    const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    if (prefersReducedMotion) {
      setArrowsOpen(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setArrowsOpen(true);
        }
      },
      {
        root: null,
        threshold: 0.2,
        rootMargin: "-35% 0px -35% 0px"
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`about-arrows-section ${arrowsOpen ? "is-arrows-open" : ""}`}
      aria-label="Skape approach"
    >
      <div className="section-shell about-arrows-shell">
        <h2 className="about-arrows-title">
          <span className="about-arrows-title-strong">This isn&apos;t just about</span>{" "}
          <span className="about-arrows-title-muted">real estate.</span>
        </h2>

        <div className="about-arrows-video" aria-hidden="true">
          <video
            className="about-arrows-video-el"
            src={withBasePath("/assets/why-us.mp4")}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        </div>

        <div className="about-arrows-row" role="list" aria-label="Skape highlights">
          {arrows.map((arrow) => (
            <div key={arrow.src} className="about-arrow" role="listitem">
              <Image
                src={arrow.src}
                alt={arrow.alt}
                fill
                sizes="(max-width: 800px) 26vw, 240px"
                className="about-arrow-image"
                priority={false}
              />
            </div>
          ))}
        </div>

        <p className="about-arrows-copy">
          It&apos;s about identity, progress, and building spaces that help you move forward with
          clarity.
        </p>
      </div>
    </section>
  );
}
