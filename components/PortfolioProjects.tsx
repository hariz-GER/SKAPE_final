"use client";

import Image from "next/image";
import { useId, useLayoutEffect, useRef, useState } from "react";

type PortfolioBrief = {
  title: string;
  paragraphs: string[];
};

type PortfolioMedia = {
  src: string;
  alt: string;
};

type PortfolioProject = {
  id: string;
  ariaLabel: string;
  kicker: string;
  title: string;
  meta?: string;
  preview: string;
  briefs: PortfolioBrief[];
  media: PortfolioMedia[];
};

const projects: PortfolioProject[] = [
  {
    id: "mr-antony",
    ariaLabel: "Mr. Antony Residence — Design Brief",
    kicker: "MR. ANTONY RESIDENCE",
    title: "DESIGN BRIEF",
    meta: "Residential Project for Mr. Antony — Chennai",
    preview:
      "Refined, comfortable, climate-responsive interiors with elegant space planning and warm, modern detailing.",
    briefs: [
      {
        title: "Project Overview",
        paragraphs: [
          "This project involves the interior design of a residential home for Mr. Antony in Chennai. The objective is to create a refined, comfortable, and climate-responsive living environment that reflects the client's lifestyle while ensuring functionality and long-term durability."
        ]
      },
      {
        title: "Architecture",
        paragraphs: [
          "The overall concept is Modern Tropical Contemporary — blending clean modern aesthetics with warmth, natural materials, and Chennai's climate considerations. The interiors focus on simplicity, elegance, and practical space planning."
        ]
      },
      {
        title: "Interior Design Concept — Modern Classic Dining & Transition Space",
        paragraphs: [
          "This interior reflects a refined modern classic aesthetic, blending deep, moody tones with rich wood textures and elegant detailing. The space is designed to create a seamless transition between dining and living areas while maintaining visual depth and sophistication.",
          "The feature wooden partition with sculpted arch detailing acts as both a divider and a statement element, adding rhythm, texture, and architectural character. Dark olive-grey wall panels with subtle molding enhance the classic influence, while arched niches introduce softness and vertical emphasis.",
          "The marble-top dining table paired with upholstered seating balances luxury and comfort. Warm wall sconces and recessed ceiling lighting create layered illumination, enhancing material richness and creating an intimate ambiance ideal for gatherings.",
          "The overall palette—deep greens, walnut wood, soft neutrals, and brushed gold accents—evokes warmth, elegance, and timeless charm. The design achieves a harmonious balance between contemporary minimalism and classic architectural detailing, delivering a space that feels both dramatic and inviting."
        ]
      },
      {
        title: "Design Details",
        paragraphs: [
          "The spaces follow a structured yet soft design approach—combining vertical elements, subtle panel detailing, and elegant curves to create depth and rhythm. Each area transitions seamlessly into the next, maintaining visual continuity throughout the home."
        ]
      }
    ],
    media: [
      {
        src: "/portfolio/mr-antony/bedroom.png",
        alt: "Bedroom visual: layered drapery, botanical feature wall, and warm pendant lighting."
      },
      {
        src: "/portfolio/mr-antony/kitchen.png",
        alt: "Kitchen visual: deep blue cabinetry with brass hardware and a bright, minimal backsplash."
      }
    ]
  },
  {
    id: "mr-sampath",
    ariaLabel: "Mr. Sampath Residence — Design Brief",
    kicker: "MR. SAMPATH RESIDENCE",
    title: "DESIGN BRIEF",
    preview:
      "Soft linear minimalism: clean geometry, vertical rhythm, gentle curves, and warm neutrals to make compact spaces feel expansive.",
    briefs: [
      {
        title: "Project Overview",
        paragraphs: [
          "This living space is designed with a modern minimal aesthetic, emphasizing clean geometry, vertical detailing, and soft neutral tones. The concept focuses on maximizing spatial perception while maintaining warmth and functionality within a compact layout."
        ]
      },
      {
        title: "Design Concept",
        paragraphs: [
          "The core idea is “Soft Linear Minimalism.” Vertical slatted elements, curved wall motifs, and subtle panel detailing create rhythm and architectural depth without overwhelming the space. The design balances straight lines with gentle curves for visual harmony."
        ]
      },
      {
        title: "Architecture",
        paragraphs: [
          "The architecture reflects a contemporary tropical approach with clean lines, open planning, and seamless spatial flow. Double-height volumes, floating staircases, and integrated storage maximize functionality within compact proportions. Natural light is prioritized through large openings, creating airy interiors that respond to climate while maintaining privacy and refined modern aesthetics."
        ]
      },
      {
        title: "Interior Design",
        paragraphs: [
          "The interiors follow a calm, neutral palette with layered textures and subtle contrasts. Fluted panels, soft curves, warm wood finishes, and ambient lighting create depth and sophistication. Each space balances elegance and comfort, blending modern minimalism with personalized details to achieve a timeless yet inviting residential environment."
        ]
      },
      {
        title: "Design Details",
        paragraphs: [
          "Design details focus on precision and subtle craftsmanship. Concealed lighting, vertical fluting, patterned wall panels, and integrated display niches add texture and rhythm. Carefully selected hardware, layered fabrics, and warm accent lighting elevate everyday spaces, transforming simple forms into refined, cohesive design statements throughout the home."
        ]
      },
      {
        title: "Furniture Details",
        paragraphs: [
          "Furniture selection emphasizes clean silhouettes, ergonomic comfort, and material harmony. Custom-built storage, floating consoles, upholstered beds, and sleek dining elements integrate seamlessly with architectural features. Wood, glass, and metal accents enhance durability while maintaining visual lightness, ensuring every piece complements both function and spatial composition."
        ]
      }
    ],
    media: [
      {
        src: "/portfolio/mr-sampath/living.png",
        alt: "Living space visual: soft linear minimalism with vertical detailing and warm neutrals."
      },
      {
        src: "/portfolio/mr-sampath/staircase.png",
        alt: "Staircase visual: floating steps with airy, contemporary tropical spatial flow."
      }
    ]
  }
];

function PortfolioProjectCard({
  project,
  open,
  onToggle
}: {
  project: PortfolioProject;
  open: boolean;
  onToggle: () => void;
}) {
  const contentId = useId();
  const innerRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState(0);

  useLayoutEffect(() => {
    const node = innerRef.current;
    if (!node) {
      return;
    }

    const update = () => {
      setMaxHeight(node.scrollHeight);
    };

    update();

    if (!open) {
      return;
    }

    const observer = new ResizeObserver(update);
    observer.observe(node);
    return () => observer.disconnect();
  }, [open]);

  return (
    <article
      className={`portfolio-project ${open ? "is-open" : "is-closed"}`}
      aria-label={project.ariaLabel}
    >
      <header className="portfolio-project-header">
        <p className="portfolio-project-kicker">{project.kicker}</p>

        <h3 className="portfolio-project-title">
          <button
            type="button"
            className="portfolio-project-toggle"
            aria-expanded={open}
            aria-controls={contentId}
            onClick={onToggle}
          >
            <span className="portfolio-project-toggle-text">{project.title}</span>
            <span className="portfolio-project-caret" aria-hidden="true" />
          </button>
        </h3>

        {project.meta ? <p className="portfolio-project-meta">{project.meta}</p> : null}

        <p className={`portfolio-project-preview ${open ? "is-hidden" : ""}`}>{project.preview}</p>
      </header>

      <div
        id={contentId}
        className={`portfolio-project-collapsible ${open ? "is-open" : ""}`}
        style={{ maxHeight: open ? `${maxHeight}px` : "0px" }}
      >
        <div ref={innerRef} className="portfolio-project-collapsible-inner">
          <div className="portfolio-project-grid">
            <div className="portfolio-project-body">
              {project.briefs.map((brief) => (
                <section key={brief.title} className="portfolio-brief">
                  <h4>{brief.title}</h4>
                  {brief.paragraphs.map((paragraph, index) => (
                    <p key={`${brief.title}-${index}`}>{paragraph}</p>
                  ))}
                </section>
              ))}
            </div>

            <div className="portfolio-project-media">
              {project.media.map((media) => (
                <figure key={media.src} className="portfolio-media">
                  <Image
                    src={media.src}
                    alt={media.alt}
                    fill
                    sizes="(max-width: 900px) 100vw, 44vw"
                    className="portfolio-media-image"
                  />
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function PortfolioProjects() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="portfolio-projects">
      {projects.map((project) => {
        const open = openId === project.id;

        return (
          <PortfolioProjectCard
            key={project.id}
            project={project}
            open={open}
            onToggle={() => setOpenId(open ? null : project.id)}
          />
        );
      })}
    </div>
  );
}
