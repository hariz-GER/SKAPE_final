import ParallaxHero from "@/components/ParallaxHero";
import StatsCounter from "@/components/StatsCounter";
import Image from "next/image";

const services = [
  {
    id: "architectural-design",
    title: "Architectural Design",
    description:
      "We shape residential and commercial spaces that balance utility, structure, and timeless visual identity.",
    tags: "Residential · Commercial · Institutional"
  },
  {
    id: "interior-design",
    title: "Interior Design",
    description:
      "From concept to final styling, we design interiors that are functional, emotionally warm, and deeply personal.",
    tags: "Concept · Execution · Styling"
  },
  {
    id: "planning-applications",
    title: "Planning Applications",
    description:
      "Our team handles permissions, documentation, and authority coordination for smooth and compliant project approvals.",
    tags: "Permissions · Regulation · Compliance"
  },
  {
    id: "conservation-heritage-design",
    title: "Conservation & Heritage Design",
    description:
      "We help preserve character-rich buildings with sensitive upgrades, material care, and planning-ready documentation.",
    tags: "Restoration · Retrofit · Heritage"
  },
  {
    id: "create-construct",
    title: "Create & Construct",
    description:
      "We deliver complete build execution with quality control, schedule clarity, and end-to-end on-site coordination.",
    tags: "Build · Manage · Deliver"
  }
];

export default function Home() {
  return (
    <main>
      <ParallaxHero />

      <div className="page-content">
        <section id="about" className="about-strip">
          <div className="section-shell">
            <div className="section-heading-row">
              <p className="section-kicker">Who We Are</p>
              <h2>Skape Design & Build</h2>
            </div>

            <div className="about-grid">
              <p>
                At Skape Design, founded in 2002 in Chennai, we transform spaces into functional,
                emotionally resonant environments. Every project blends creativity, practical thinking,
                and careful detailing.
              </p>
              <p>
                From architecture and interiors to renovation, planning, and construction, we deliver
                complete solutions with transparency and craft at every stage.
              </p>
            </div>

            <StatsCounter />
          </div>
        </section>

        <section id="services" className="services">
          <div className="section-shell">
            <div className="section-heading-row">
              <p className="section-kicker">What We Do</p>
              <h2>Services</h2>
            </div>

            <div className="services-grid">
              {services.map((service) => (
                <article key={service.title} id={service.id} className="service-card">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <span>{service.tags}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="portfolio">
          <div className="section-shell">
            <div className="section-heading-row">
              <p className="section-kicker">Selected Work</p>
              <h2>Portfolio</h2>
            </div>

            <div className="portfolio-projects">
              <article className="portfolio-project" aria-label="Mr. Antony Residence — Design Brief">
                <header className="portfolio-project-header">
                  <p className="portfolio-project-kicker">MR. ANTONY RESIDENCE</p>
                  <h3 className="portfolio-project-title">DESIGN BRIEF</h3>
                  <p className="portfolio-project-meta">
                    Residential Project for Mr. Antony — Chennai
                  </p>
                </header>

                <div className="portfolio-project-grid">
                  <div className="portfolio-project-body">
                    <section className="portfolio-brief">
                      <h4>Project Overview</h4>
                      <p>
                        This project involves the interior design of a residential home for Mr.
                        Antony in Chennai. The objective is to create a refined, comfortable, and
                        climate-responsive living environment that reflects the client&apos;s lifestyle
                        while ensuring functionality and long-term durability.
                      </p>
                    </section>

                    <section className="portfolio-brief">
                      <h4>Architecture</h4>
                      <p>
                        The overall concept is Modern Tropical Contemporary — blending clean modern
                        aesthetics with warmth, natural materials, and Chennai&apos;s climate
                        considerations. The interiors focus on simplicity, elegance, and practical
                        space planning.
                      </p>
                    </section>

                    <section className="portfolio-brief">
                      <h4>Interior Design Concept — Modern Classic Dining &amp; Transition Space</h4>
                      <p>
                        This interior reflects a refined modern classic aesthetic, blending deep,
                        moody tones with rich wood textures and elegant detailing. The space is
                        designed to create a seamless transition between dining and living areas while
                        maintaining visual depth and sophistication.
                      </p>
                      <p>
                        The feature wooden partition with sculpted arch detailing acts as both a
                        divider and a statement element, adding rhythm, texture, and architectural
                        character. Dark olive-grey wall panels with subtle molding enhance the classic
                        influence, while arched niches introduce softness and vertical emphasis.
                      </p>
                      <p>
                        The marble-top dining table paired with upholstered seating balances luxury
                        and comfort. Warm wall sconces and recessed ceiling lighting create layered
                        illumination, enhancing material richness and creating an intimate ambiance
                        ideal for gatherings.
                      </p>
                      <p>
                        The overall palette—deep greens, walnut wood, soft neutrals, and brushed gold
                        accents—evokes warmth, elegance, and timeless charm. The design achieves a
                        harmonious balance between contemporary minimalism and classic architectural
                        detailing, delivering a space that feels both dramatic and inviting.
                      </p>
                    </section>

                    <section className="portfolio-brief">
                      <h4>Design Details</h4>
                      <p>
                        The spaces follow a structured yet soft design approach—combining vertical
                        elements, subtle panel detailing, and elegant curves to create depth and
                        rhythm. Each area transitions seamlessly into the next, maintaining visual
                        continuity throughout the home.
                      </p>
                    </section>
                  </div>

                  <div className="portfolio-project-media">
                    <figure className="portfolio-media">
                      <Image
                        src="/portfolio/mr-antony/bedroom.png"
                        alt="Bedroom visual: layered drapery, botanical feature wall, and warm pendant lighting."
                        fill
                        sizes="(max-width: 900px) 100vw, 44vw"
                        className="portfolio-media-image"
                      />
                    </figure>
                    <figure className="portfolio-media">
                      <Image
                        src="/portfolio/mr-antony/kitchen.png"
                        alt="Kitchen visual: deep blue cabinetry with brass hardware and a bright, minimal backsplash."
                        fill
                        sizes="(max-width: 900px) 100vw, 44vw"
                        className="portfolio-media-image"
                      />
                    </figure>
                  </div>
                </div>
              </article>

              <article className="portfolio-project" aria-label="Mr. Sampath Residence — Design Brief">
                <header className="portfolio-project-header">
                  <p className="portfolio-project-kicker">MR. SAMPATH RESIDENCE</p>
                  <h3 className="portfolio-project-title">DESIGN BRIEF</h3>
                </header>

                <div className="portfolio-project-grid">
                  <div className="portfolio-project-body">
                    <section className="portfolio-brief">
                      <h4>Project Overview</h4>
                      <p>
                        This living space is designed with a modern minimal aesthetic, emphasizing
                        clean geometry, vertical detailing, and soft neutral tones. The concept
                        focuses on maximizing spatial perception while maintaining warmth and
                        functionality within a compact layout.
                      </p>
                    </section>

                    <section className="portfolio-brief">
                      <h4>Design Concept</h4>
                      <p>
                        The core idea is &ldquo;Soft Linear Minimalism.&rdquo; Vertical slatted elements,
                        curved wall motifs, and subtle panel detailing create rhythm and architectural
                        depth without overwhelming the space. The design balances straight lines with
                        gentle curves for visual harmony.
                      </p>
                    </section>

                    <section className="portfolio-brief">
                      <h4>Architecture</h4>
                      <p>
                        The architecture reflects a contemporary tropical approach with clean lines,
                        open planning, and seamless spatial flow. Double-height volumes, floating
                        staircases, and integrated storage maximize functionality within compact
                        proportions. Natural light is prioritized through large openings, creating
                        airy interiors that respond to climate while maintaining privacy and refined
                        modern aesthetics.
                      </p>
                    </section>

                    <section className="portfolio-brief">
                      <h4>Interior Design</h4>
                      <p>
                        The interiors follow a calm, neutral palette with layered textures and subtle
                        contrasts. Fluted panels, soft curves, warm wood finishes, and ambient lighting
                        create depth and sophistication. Each space balances elegance and comfort,
                        blending modern minimalism with personalized details to achieve a timeless yet
                        inviting residential environment.
                      </p>
                    </section>

                    <section className="portfolio-brief">
                      <h4>Design Details</h4>
                      <p>
                        Design details focus on precision and subtle craftsmanship. Concealed
                        lighting, vertical fluting, patterned wall panels, and integrated display
                        niches add texture and rhythm. Carefully selected hardware, layered fabrics,
                        and warm accent lighting elevate everyday spaces, transforming simple forms
                        into refined, cohesive design statements throughout the home.
                      </p>
                    </section>

                    <section className="portfolio-brief">
                      <h4>Furniture Details</h4>
                      <p>
                        Furniture selection emphasizes clean silhouettes, ergonomic comfort, and
                        material harmony. Custom-built storage, floating consoles, upholstered beds,
                        and sleek dining elements integrate seamlessly with architectural features.
                        Wood, glass, and metal accents enhance durability while maintaining visual
                        lightness, ensuring every piece complements both function and spatial
                        composition.
                      </p>
                    </section>
                  </div>

                  <div className="portfolio-project-media">
                    <figure className="portfolio-media">
                      <Image
                        src="/portfolio/mr-sampath/living.png"
                        alt="Living space visual: soft linear minimalism with vertical detailing and warm neutrals."
                        fill
                        sizes="(max-width: 900px) 100vw, 44vw"
                        className="portfolio-media-image"
                      />
                    </figure>
                    <figure className="portfolio-media">
                      <Image
                        src="/portfolio/mr-sampath/staircase.png"
                        alt="Staircase visual: floating steps with airy, contemporary tropical spatial flow."
                        fill
                        sizes="(max-width: 900px) 100vw, 44vw"
                        className="portfolio-media-image"
                      />
                    </figure>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="section-shell contact-shell">
            <div>
              <p className="section-kicker">Get In Touch</p>
              <h2>
                Let&apos;s create something <em>remarkable</em> together.
              </h2>
              <p>
                Skape Design & Construction, Chennai. Architecture, interior design, planning, and
                build services crafted for meaningful, lasting spaces.
              </p>
            </div>

            <a href="mailto:hello@skape.design" className="contact-cta">
              hello@skape.design
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
