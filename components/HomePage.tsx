import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Asterisk,
  Check,
  MoveUpRight,
} from 'lucide-react';
import { featuredProjects, sideProjects } from '../lib/projects';

const services = [
  {
    number: '01',
    title: 'AI workflows',
    description:
      'Turn repetitive handoffs, documents, and decisions into useful workflows your team can actually run.',
    examples: 'Intake · reporting · follow-up',
  },
  {
    number: '02',
    title: 'Custom AI tools',
    description:
      'Build a focused assistant, internal tool, or customer experience around your business and your data.',
    examples: 'Knowledge search · copilots · portals',
  },
  {
    number: '03',
    title: 'Connected systems',
    description:
      'Make the software you already pay for work together, so information gets where it needs to go.',
    examples: 'CRM · APIs · operations',
  },
  {
    number: '04',
    title: 'Technical direction',
    description:
      'Get a practical plan, sound architecture, and a hands-on engineer to take it through launch.',
    examples: 'Discovery · prototypes · delivery',
  },
];

function FlowGraphic() {
  return (
    <div
      className="studio-flow"
      aria-label="A business problem becomes a working AI system"
    >
      <div className="studio-flow-top">
        <span>FIELD NOTE 001</span>
        <span>THE WORK / REIMAGINED</span>
      </div>
      <div className="studio-flow-row studio-flow-row-input">
        <span className="studio-flow-num">01 / INPUT</span>
        <strong>The work piling up.</strong>
        <span className="studio-flow-tag">manual + scattered</span>
      </div>
      <div className="studio-flow-connector">
        <span>↓</span>
        <i />
      </div>
      <div className="studio-flow-core">
        <div className="studio-flow-core-head">
          <Asterisk size={27} strokeWidth={1.7} />
          <span>DESIGNED + BUILT BY LARRY</span>
        </div>
        <strong>
          People + process
          <br />
          <em>+ useful AI.</em>
        </strong>
        <div className="studio-flow-core-bottom">
          <span>YOUR BUSINESS CONTEXT</span>
          <span>REAL ENGINEERING</span>
        </div>
      </div>
      <div className="studio-flow-connector studio-flow-connector-last">
        <span>↓</span>
        <i />
      </div>
      <div className="studio-flow-row studio-flow-row-output">
        <span className="studio-flow-num">02 / OUTPUT</span>
        <strong>Time back to grow.</strong>
        <span className="studio-flow-check">
          <Check size={16} /> working system
        </span>
      </div>
      <div className="studio-flow-foot">
        <span>SMALL BUSINESS, BIG LEVERAGE</span>
        <span>LH / 2026</span>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="studio-site">
      <section className="studio-hero" id="top">
        <div className="studio-hero-grid" aria-hidden="true" />
        <div className="studio-wrap studio-hero-inner">
          <div className="studio-hero-copy">
            <div className="studio-kicker">
              <span className="studio-live-dot" /> INDEPENDENT AI ENGINEERING ·
              PALM BEACH, FL
            </div>
            <h1>
              Small business.
              <br />
              <span>Big capability.</span>
              <br />
              <em>One engineer.</em>
            </h1>
            <p className="studio-hero-lede">
              I design and build practical AI tools that give small businesses
              time back, connect the systems they rely on, and make ambitious
              ideas real.
            </p>
            <div className="studio-hero-actions">
              <Link
                className="studio-button studio-button-accent"
                href="/services"
              >
                See what I can build <ArrowUpRight size={19} />
              </Link>
              <a
                className="studio-text-link"
                href="mailto:me@caneslarry.com?subject=I%20have%20an%20AI%20project%20in%20mind"
              >
                Tell me your problem <ArrowRight size={18} />
              </a>
            </div>
            <p className="studio-hero-aside">
              For employers:{' '}
              <Link href="/experience">
                explore my experience <ArrowUpRight size={13} />
              </Link>
            </p>
          </div>
          <FlowGraphic />
        </div>
        <div className="studio-wrap studio-hero-bottom">
          <span>
            THE BOUTIQUE ADVANTAGE: THE PERSON YOU TALK TO IS THE PERSON WHO
            BUILDS IT.
          </span>
          <a href="#approach">
            SCROLL TO EXPLORE <ArrowDownRight size={15} />
          </a>
        </div>
      </section>

      <section className="studio-intro" id="approach">
        <div className="studio-wrap studio-intro-grid">
          <div className="studio-section-index">
            01 <span>/ THE IDEA</span>
          </div>
          <div>
            <p className="studio-eyebrow">A SMALL SHOP FOR THE BIG SHIFT</p>
            <h2>
              AI should feel like an <em>extra set of capable hands.</em>
            </h2>
            <p className="studio-intro-lede">
              You do not need a giant transformation program. You need someone
              who can understand how your business runs, find the right
              opportunity, and build a dependable tool around it.
            </p>
            <div className="studio-intro-principles">
              <div>
                <span>01</span>
                <strong>Start with the bottleneck.</strong>
                <p>The right problem matters more than the flashiest model.</p>
              </div>
              <div>
                <span>02</span>
                <strong>Build for real work.</strong>
                <p>
                  Useful software fits the team, data, and tools you already
                  have.
                </p>
              </div>
              <div>
                <span>03</span>
                <strong>Own the outcome.</strong>
                <p>
                  One experienced engineer from first conversation to launch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="studio-services" id="services">
        <div className="studio-wrap">
          <div className="studio-section-head">
            <div>
              <p className="studio-eyebrow">02 / WHAT I DO</p>
              <h2>
                Useful AI, <em>built for your business.</em>
              </h2>
            </div>
            <p>
              Focused engagements with a clear job to do. Start with one
              workflow or idea and build from there.
            </p>
          </div>
          <div className="studio-service-grid">
            {services.map((service) => (
              <article className="studio-service-card" key={service.number}>
                <div className="studio-service-card-top">
                  <span>{service.number} / SERVICE</span>
                  <MoveUpRight size={18} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className="studio-service-examples">
                  {service.examples}
                </span>
              </article>
            ))}
          </div>
          <Link className="studio-inline-cta" href="/services">
            Explore all services and how we work <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      <section className="studio-work" id="work">
        <div className="studio-wrap">
          <div className="studio-section-head">
            <div>
              <p className="studio-eyebrow">03 / PROOF OF PRACTICE</p>
              <h2>
                Built across <em>real complexity.</em>
              </h2>
            </div>
            <p>
              Selected work from engineering roles and independent product
              experiments. These show the systems thinking I bring to each new
              project.
            </p>
          </div>
          <div className="studio-work-grid">
            {featuredProjects.slice(0, 2).map((project, index) => (
              <Link
                className="studio-work-card"
                href={'/work/' + project.slug}
                key={project.slug}
              >
                <div className="studio-work-image">
                  <Image
                    src={project.image}
                    alt={'Illustrative concept for ' + project.title}
                    fill
                    sizes="(min-width: 800px) 50vw, 100vw"
                  />
                  <span>ILLUSTRATIVE CONCEPT</span>
                </div>
                <div className="studio-work-card-body">
                  <div className="studio-work-label">
                    <span>0{index + 1} / CAREER WORK</span>
                    <ArrowUpRight size={19} />
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </Link>
            ))}
            <Link
              className="studio-work-card studio-work-card-small"
              href={'/work/' + sideProjects[1].slug}
            >
              <div className="studio-work-card-body">
                <div className="studio-work-label">
                  <span>03 / INDEPENDENT PRODUCT</span>
                  <ArrowUpRight size={19} />
                </div>
                <h3>{sideProjects[1].title}</h3>
                <p>{sideProjects[1].description}</p>
                <span className="studio-work-note">
                  AI product design, from idea to usable workflow ↗
                </span>
              </div>
            </Link>
          </div>
          <Link className="studio-inline-cta" href="/experience">
            See the experience behind the work <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      <section className="studio-about-strip">
        <div className="studio-wrap studio-about-grid">
          <div className="studio-about-symbol">
            LH<span>✳</span>
          </div>
          <div>
            <p className="studio-eyebrow">THE HUMAN BEHIND THE SYSTEMS</p>
            <h2>
              Senior-level thinking.
              <br />
              <em>Hands-on building.</em>
            </h2>
          </div>
          <div>
            <p>
              I&apos;m Larry Hussey, a software engineer and technical leader
              with more than 20 years of experience building products,
              platforms, and connected systems. Now I bring that range to
              practical AI work for small businesses.
            </p>
            <Link href="/experience">
              My background <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="studio-contact" id="contact">
        <div className="studio-wrap studio-contact-grid">
          <div>
            <p className="studio-eyebrow">04 / YOUR NEXT MOVE</p>
            <h2>
              What would you do with <em>more capacity?</em>
            </h2>
            <p>
              Tell me what is slowing your business down or what you wish your
              software could do. We can start with a conversation.
            </p>
            <a
              className="studio-button studio-button-dark"
              href="mailto:me@caneslarry.com?subject=Let's%20build%20something%20useful"
            >
              Start a conversation <ArrowUpRight size={19} />
            </a>
          </div>
          <div className="studio-contact-note">
            <span>AN OPEN INVITATION</span>
            <strong>Bring the messy version of the problem.</strong>
            <p>
              You do not need a polished brief. A workflow, a frustration, or a
              rough idea is enough to start.
            </p>
            <span className="studio-contact-note-bottom">
              ME@CANESLARRY.COM ↗
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
