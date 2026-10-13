import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Header from '../../components/Header';
import StudioFooter from '../../components/StudioFooter';
import { featuredProjects } from '../../lib/projects';

export const metadata = {
  title: 'Experience | Larry Hussey — Software Engineer & Technical Leader',
  description:
    'Explore Larry Hussey’s engineering experience, selected work, technical range, and leadership background.',
};

const roles = [
  {
    dates: '2024 — PRESENT',
    role: 'Senior Software Engineer / Team Lead',
    company: 'Agora Data',
    detail:
      'Leading AI-assisted dealer product development with React, Next.js, and GraphQL, while strengthening the delivery foundation for a data-heavy platform.',
  },
  {
    dates: '2023 — 2024',
    role: 'Senior Full Stack Developer',
    company: 'WDG — The Web Development Group',
    detail:
      'Led PHP, JavaScript, and Python initiatives, including Salesforce-connected WordPress experiences and CI/CD delivery.',
  },
  {
    dates: '2021 — 2023',
    role: 'Senior Software Engineer / Team Lead',
    company: 'Model B',
    detail:
      'Built marketing technology products connecting analytics, customer engagement, AWS, and Google Cloud.',
  },
  {
    dates: '2018 — 2021',
    role: 'Senior Software Engineer',
    company: 'ApparelMagic',
    detail:
      'Built ERP integrations and business-critical workflows; guided Agile execution as a hands-on engineer and Scrum Master.',
  },
  {
    dates: '2010 — 2018',
    role: 'Lead Applications Architect / Director of Technology',
    company: 'The John Maxwell Team',
    detail:
      'Architected platforms serving more than 20,000 client sites, connected marketing journeys to Salesforce, built a custom LMS, and led cloud migration.',
  },
];

export default function ExperiencePage() {
  return (
    <>
      <Header />
      <main className="studio-site studio-subpage">
        <section className="studio-page-hero studio-experience-hero">
          <div className="studio-wrap studio-page-hero-grid">
            <div>
              <p className="studio-eyebrow">EXPERIENCE / THE ENGINEER</p>
              <h1>
                Depth in the work.
                <br />
                <em>Range in the build.</em>
              </h1>
            </div>
            <div className="studio-page-hero-aside">
              <span>LARRY HUSSEY / ENGINEER + TECHNICAL LEADER</span>
              <p>
                More than two decades across product engineering, architecture,
                cloud systems, and team leadership. I still like being close to
                the code.
              </p>
              <a href="mailto:me@caneslarry.com?subject=Engineering%20opportunity">
                Talk about an opportunity <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
          <div className="studio-wrap studio-page-hero-bottom">
            <span>CAREER RECORD / SELECTED WORK / TECHNICAL RANGE</span>
            <span>EST. 2002</span>
          </div>
        </section>
        <section className="studio-experience-proof">
          <div className="studio-wrap">
            <div className="studio-section-head">
              <div>
                <p className="studio-eyebrow">THE SHORT VERSION</p>
                <h2>
                  Built to deliver.
                  <br />
                  <em>Built to lead.</em>
                </h2>
              </div>
              <p>
                I connect product judgment, system design, implementation, and
                team execution. That breadth lets me move from a fuzzy problem
                to software people can use.
              </p>
            </div>
            <div className="studio-proof-grid">
              <div>
                <strong>20+</strong>
                <span>YEARS BUILDING SOFTWARE</span>
              </div>
              <div>
                <strong>20K+</strong>
                <span>CLIENT SITES SUPPORTED</span>
              </div>
              <div>
                <strong>8.9×</strong>
                <span>AUDIENCE GROWTH ENABLED</span>
              </div>
              <div>
                <strong>Full stack</strong>
                <span>FROM ARCHITECTURE TO UI</span>
              </div>
            </div>
          </div>
        </section>
        <section className="studio-career">
          <div className="studio-wrap studio-career-grid">
            <div className="studio-career-intro">
              <p className="studio-eyebrow">THE EXPERIENCE</p>
              <h2>
                A career in
                <br />
                <em>building systems.</em>
              </h2>
              <p>
                Hands-on engineering, architecture, and leadership across
                enterprise platforms, product teams, and applied AI.
              </p>
            </div>
            <div className="studio-role-list">
              {roles.map((item) => (
                <article className="studio-role" key={item.company}>
                  <span>{item.dates}</span>
                  <div>
                    <h3>{item.role}</h3>
                    <strong>{item.company}</strong>
                    <p>{item.detail}</p>
                  </div>
                </article>
              ))}
              <p className="studio-career-earlier">
                Earlier roles at Forte Interactive and Newsmax Media built the
                foundation in enterprise applications, reusable frameworks, and
                service-based architecture.
              </p>
            </div>
          </div>
        </section>
        <section className="studio-experience-work">
          <div className="studio-wrap">
            <div className="studio-section-head">
              <div>
                <p className="studio-eyebrow">SELECTED CASE STUDIES</p>
                <h2>
                  The decisions <em>behind the work.</em>
                </h2>
              </div>
              <p>
                A closer look at complex platforms and products I helped design
                and build during my career.
              </p>
            </div>
            <div className="studio-experience-case-list">
              {featuredProjects.map((project, index) => (
                <Link href={'/work/' + project.slug} key={project.slug}>
                  <span>
                    0{index + 1} / {project.eyebrow}
                  </span>
                  <h3>{project.title}</h3>
                  <p>{project.outcome}</p>
                  <ArrowUpRight size={23} />
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="studio-range">
          <div className="studio-wrap studio-range-grid">
            <div>
              <p className="studio-eyebrow">TECHNICAL RANGE</p>
              <h2>
                Broad tools.
                <br />
                <em>Clear judgment.</em>
              </h2>
            </div>
            <div>
              <p>
                TypeScript · React · Next.js · Node.js · Python · PHP · C#/.NET
                · GraphQL · PostgreSQL · APIs · AWS · Google Cloud · Azure ·
                Salesforce · AI-assisted products · CI/CD
              </p>
              <div className="studio-range-credentials">
                <span>
                  B.S. COMPUTER SCIENCE
                  <br />
                  <strong>Florida Atlantic University</strong>
                </span>
                <span>
                  CERTIFIED SCRUMMASTER
                  <br />
                  <strong>Scrum Alliance</strong>
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="studio-service-close">
          <div className="studio-wrap studio-service-close-grid">
            <div>
              <p className="studio-eyebrow">LET&apos;S TALK</p>
              <h2>
                Need this kind of <em>engineer?</em>
              </h2>
            </div>
            <div>
              <p>
                Whether it&apos;s a role on your team or a project for your
                business, I&apos;m glad to talk through what you need.
              </p>
              <a
                className="studio-button studio-button-lime"
                href="mailto:me@caneslarry.com?subject=Let's%20talk%20about%20working%20together"
              >
                Get in touch <ArrowUpRight size={19} />
              </a>
              <Link className="studio-service-close-link" href="/services">
                Explore services <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <StudioFooter />
    </>
  );
}
