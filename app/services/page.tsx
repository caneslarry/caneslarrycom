import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Compass,
  Wrench,
  Zap,
} from 'lucide-react';
import Header from '../../components/Header';
import StudioFooter from '../../components/StudioFooter';

export const metadata = {
  title: 'Services | Larry Hussey — AI Engineering for Small Business',
  description:
    'AI workflows, custom AI tools, connected systems, and hands-on technical direction for small businesses.',
};

const offerings = [
  {
    number: '01',
    title: 'AI workflow design & automation',
    lead: 'Give the recurring work a better way to happen.',
    body: 'I map the steps your team repeats, identify where AI can make a real difference, and build a workflow with sensible human checks.',
    examples: [
      'Document and information intake',
      'Drafting, review, and follow-up',
      'Research and reporting workflows',
    ],
    result: 'A working process your team can use, maintain, and trust.',
  },
  {
    number: '02',
    title: 'Custom AI tools & assistants',
    lead: 'Put your knowledge to work.',
    body: 'I build focused tools that help your people or customers find answers, make decisions, and complete tasks using the context that matters to your business.',
    examples: [
      'Internal knowledge assistants',
      'Customer-facing tools',
      'AI features inside existing products',
    ],
    result: 'A useful product, built around a real job instead of a demo.',
  },
  {
    number: '03',
    title: 'Systems & data integration',
    lead: 'Connect the dots between your tools.',
    body: 'When customer information, documents, and operations live in different places, I connect the systems and design reliable data flow between them.',
    examples: [
      'CRM and business app integrations',
      'APIs and operational dashboards',
      'Data preparation for AI features',
    ],
    result: 'Less copying and chasing; a clearer source of truth.',
  },
  {
    number: '04',
    title: 'Product & technical leadership',
    lead: 'Find the right move, then make it real.',
    body: 'From an early idea to an existing system that needs direction, I can scope the opportunity, choose the architecture, and do the hands-on engineering.',
    examples: [
      'Opportunity and feasibility reviews',
      'Prototypes and product roadmaps',
      'Full-stack build and launch',
    ],
    result: 'A practical plan with an engineer accountable for execution.',
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="studio-site studio-subpage">
        <section className="studio-page-hero">
          <div className="studio-wrap studio-page-hero-grid">
            <div>
              <p className="studio-eyebrow">SERVICES / THE WORK</p>
              <h1>
                AI that earns
                <br />
                <em>its place.</em>
              </h1>
            </div>
            <div className="studio-page-hero-aside">
              <span>FOR SMALL BUSINESSES READY TO MOVE</span>
              <p>
                Start with a problem worth solving. I&apos;ll help find the
                right approach, build the tool, and make it work in the real
                world.
              </p>
              <a href="mailto:me@caneslarry.com?subject=Let's%20talk%20about%20an%20AI%20project">
                Discuss your project <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
          <div className="studio-wrap studio-page-hero-bottom">
            <span>ONE ENGINEER / END-TO-END ACCOUNTABILITY</span>
            <span>01 — 04</span>
          </div>
        </section>
        <section className="studio-offerings">
          <div className="studio-wrap">
            <div className="studio-offerings-intro">
              <p className="studio-eyebrow">THE CAPABILITIES</p>
              <h2>
                What I can <em>build with you.</em>
              </h2>
              <p>
                Each engagement starts with your business, not a predetermined
                tool. These are common ways I can help.
              </p>
            </div>
            <div className="studio-offering-list">
              {offerings.map((offering) => (
                <article className="studio-offering" key={offering.number}>
                  <div className="studio-offering-number">
                    {offering.number}
                    <span> / 04</span>
                  </div>
                  <div className="studio-offering-main">
                    <h3>{offering.title}</h3>
                    <strong>{offering.lead}</strong>
                    <p>{offering.body}</p>
                  </div>
                  <div className="studio-offering-side">
                    <span>EXAMPLES</span>
                    <ul>
                      {offering.examples.map((example) => (
                        <li key={example}>
                          <Check size={15} /> {example}
                        </li>
                      ))}
                    </ul>
                    <div className="studio-offering-result">
                      <span>THE GOAL</span>
                      <p>{offering.result}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="studio-process">
          <div className="studio-wrap">
            <div className="studio-section-head">
              <div>
                <p className="studio-eyebrow">HOW AN ENGAGEMENT WORKS</p>
                <h2>
                  Clear steps.
                  <br />
                  <em>Real progress.</em>
                </h2>
              </div>
              <p>
                Small enough to stay personal. Structured enough to deliver
                dependable software.
              </p>
            </div>
            <div className="studio-process-grid">
              <article>
                <Compass size={29} />
                <span>01 / DISCOVER</span>
                <h3>Find the leverage.</h3>
                <p>
                  We talk through the work, the people, the tools, and the
                  constraints. I identify a useful first outcome and scope it
                  clearly.
                </p>
              </article>
              <article>
                <Wrench size={29} />
                <span>02 / BUILD</span>
                <h3>Make it useful.</h3>
                <p>
                  I design and engineer the solution, showing working versions
                  early so we can adjust it around real use.
                </p>
              </article>
              <article>
                <Zap size={29} />
                <span>03 / LAUNCH</span>
                <h3>Put it to work.</h3>
                <p>
                  We test with the people who will use it, launch deliberately,
                  and document what the team needs to keep moving.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className="studio-service-close">
          <div className="studio-wrap studio-service-close-grid">
            <div>
              <p className="studio-eyebrow">START SOMEWHERE SPECIFIC</p>
              <h2>
                What is the task you wish <em>just happened?</em>
              </h2>
            </div>
            <div>
              <p>
                Bring me the bottleneck, the spreadsheet, the scattered
                information, or the product idea. I&apos;ll help turn it into a
                concrete next step.
              </p>
              <a
                className="studio-button studio-button-accent"
                href="mailto:me@caneslarry.com?subject=Here's%20the%20business%20problem%20I'd%20like%20to%20solve"
              >
                Tell me about it <ArrowUpRight size={19} />
              </a>
              <Link href="/experience" className="studio-service-close-link">
                See my experience <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <StudioFooter />
    </>
  );
}
