import Image from "next/image";

const arrows = [
  {
    src: "/about-arrows/2.webp",
    alt: "Modern bedroom interior"
  },
  {
    src: "/about-arrows/3.webp",
    alt: "Modern office interior"
  },
  {
    src: "/about-arrows/4.webp",
    alt: "Executive portrait outdoors"
  },
  {
    src: "/about-arrows/home-office-small.jpg",
    alt: "Minimal home office rendering"
  }
];

export default function AboutArrowsSection() {
  return (
    <section className="about-arrows-section" aria-label="Skape approach">
      <div className="section-shell about-arrows-shell">
        <h2 className="about-arrows-title">
          <span className="about-arrows-title-strong">This isn&apos;t just about</span>{" "}
          <span className="about-arrows-title-muted">real estate.</span>
        </h2>

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
