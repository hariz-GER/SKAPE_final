"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function lerp(start: number, end: number, amount: number) {
  return start + (end - start) * amount;
}

function segment(progress: number, start: number, end: number) {
  return clamp((progress - start) / (end - start), 0, 1);
}

function easeInOut(value: number) {
  return value * value * (3 - 2 * value);
}

const WORDMARK_LETTERS = ["S", "K", "A", "P", "E"] as const;

export default function ParallaxHero() {
  const sceneRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let rafId = 0;

    const updateProgress = () => {
      const scene = sceneRef.current;

      if (!scene) {
        return;
      }

      const sceneRect = scene.getBoundingClientRect();
      const totalScrollable = Math.max(scene.offsetHeight - window.innerHeight, 1);
      const travelled = clamp(-sceneRect.top, 0, totalScrollable);

      setProgress(travelled / totalScrollable);
    };

    const onScroll = () => {
      if (rafId) {
        return;
      }

      rafId = window.requestAnimationFrame(() => {
        updateProgress();
        rafId = 0;
      });
    };

    updateProgress();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateProgress);
      window.cancelAnimationFrame(rafId);
    };
  }, []);

  const introPhase = easeInOut(segment(progress, 0.04, 0.36));
  const introOpacity = 1 - introPhase;
  const introLift = lerp(0, -84, introPhase);

  const houseEnter = easeInOut(segment(progress, 0.1, 0.78));
  const houseExit = easeInOut(segment(progress, 0.9, 0.99));
  const houseY = lerp(24, -1, houseEnter) + lerp(0, -18, houseExit);
  const houseScale = lerp(0.78, 1.16, houseEnter);
  const houseOpacity = 1 - houseExit * 0.95;

  const cloudDrift = easeInOut(segment(progress, 0, 1));
  const cloudFarX = lerp(-8, 10, cloudDrift);
  const cloudFarY = lerp(-6, 14, cloudDrift);

  const cloudMidIn = easeInOut(segment(progress, 0.24, 0.76));
  const cloudMidOut = easeInOut(segment(progress, 0.88, 1));
  const cloudMidX = lerp(11, -8, cloudMidIn);
  const cloudMidY = lerp(30, 4, cloudMidIn) + lerp(0, -8, cloudMidOut);
  const cloudMidOpacity = lerp(0.12, 0.72, cloudMidIn) * (1 - cloudMidOut * 0.2);

  const cloudNearIn = easeInOut(segment(progress, 0.34, 0.88));
  const cloudNearDrift = easeInOut(segment(progress, 0.88, 1));
  const cloudNearX = lerp(15, -17, cloudNearIn);
  const cloudNearY = lerp(34, -4, cloudNearIn) + lerp(0, -10, cloudNearDrift);
  const cloudNearOpacity = lerp(0.08, 1, cloudNearIn);

  const letterWindows: Array<[number, number]> = [
    [0.48, 0.62],
    [0.62, 0.76],
    [0.76, 0.88],
    [0.62, 0.76],
    [0.48, 0.62]
  ];
  const outlineBuild = easeInOut(segment(progress, 0.48, 0.88));
  const letterReveal = letterWindows.map(([start, end]) => easeInOut(segment(progress, start, end)));
  const outlineOut = easeInOut(segment(progress, 0.92, 0.98));
  const outlineOpacity = outlineBuild * (1 - outlineOut);
  const outlineScale = lerp(1.09, 1, outlineBuild);

  const fillIn = easeInOut(segment(progress, 0.95, 1));
  const fillOpacity = fillIn;
  const fillScale = lerp(1.04, 1, fillIn);
  const fillY = lerp(24, 0, fillIn);

  return (
    <section ref={sceneRef} id="home" className="hero-scene">
      <div className="hero-sticky">
        <div className="hero-sky" />

        <header className="hero-nav">
          <div className="hero-brand">SKAPE</div>
          <nav>
            <a href="#services">Search</a>
            <a href="#services">Agents</a>
            <a href="#about">Join</a>
            <a href="#services">Paperwork</a>
            <a href="#services">Resources</a>
            <a href="#about">About</a>
          </nav>
          <a className="hero-nav-cta" href="#contact">
            Sign In
          </a>
        </header>

        <Image
          src="/assets/cloud.webp"
          alt=""
          aria-hidden="true"
          width={1024}
          height={435}
          className="cloud cloud-far"
          style={{ transform: `translate(${cloudFarX}vw, ${cloudFarY}vh)` }}
          priority
        />

        <div
          className="hero-intro"
          style={{
            opacity: introOpacity,
            transform: `translate(-50%, ${introLift}px)`
          }}
        >
          <h1>Find What Moves You</h1>
          <p className="hero-subtext">
            Expert agents. Real guidance. A clear path to find what&apos;s next.
          </p>
          <div className="hero-actions">
            <a href="#services" className="btn btn-dark">
              Find Properties →
            </a>
          </div>
        </div>

        <Image
          src="/assets/house.webp"
          alt="SKAPE featured building"
          width={1400}
          height={1245}
          className="hero-house"
          style={{
            opacity: houseOpacity,
            transform: `translate3d(-50%, ${houseY}vh, 0) scale(${houseScale})`
          }}
          priority
        />

        <Image
          src="/assets/cloud.webp"
          alt=""
          aria-hidden="true"
          width={1024}
          height={435}
          className="cloud cloud-mid"
          style={{
            transform: `translate(${cloudMidX}vw, ${cloudMidY}vh) scale(1.15)`,
            opacity: cloudMidOpacity
          }}
          priority
        />

        <Image
          src="/assets/cloud.webp"
          alt=""
          aria-hidden="true"
          width={1024}
          height={435}
          className="cloud cloud-near"
          style={{
            transform: `translate(${cloudNearX}vw, ${cloudNearY}vh) scale(1.2)`,
            opacity: cloudNearOpacity
          }}
          priority
        />

        <div
          className="hero-wordmark hero-wordmark-outline"
          style={{
            opacity: outlineOpacity,
            transform: `translate(-50%, -50%) scale(${outlineScale})`
          }}
        >
          <span className="hero-wordmark-main hero-wordmark-main-split">
            {WORDMARK_LETTERS.map((letter, index) => {
              const reveal = letterReveal[index];

              return (
                <span
                  key={letter}
                  className="hero-letter"
                  style={{
                    opacity: reveal,
                    transform: `translateY(${lerp(24, 0, reveal)}px)`
                  }}
                >
                  {letter}
                </span>
              );
            })}
          </span>
          <span className="hero-wordmark-sub" style={{ opacity: outlineBuild }}>
            Design & Construction
          </span>
        </div>

        <div
          className="hero-wordmark hero-wordmark-fill"
          style={{
            opacity: fillOpacity,
            transform: `translate(-50%, calc(-50% + ${fillY}px)) scale(${fillScale})`
          }}
        >
          <span className="hero-wordmark-main">SKAPE</span>
          <span className="hero-wordmark-sub">Design & Construction</span>
        </div>
      </div>
    </section>
  );
}
