import ParallaxHero from "@/components/ParallaxHero";
import StatsCounter from "@/components/StatsCounter";

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

          <p className="portfolio-copy">
            A curated selection of completed projects will be showcased here soon.
          </p>
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
    </main>
  );
}
