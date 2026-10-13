import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '../../../components/Header';
import StudioFooter from '../../../components/StudioFooter';
import { getProject, projects, sideProjects } from '../../../lib/projects';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  return project
    ? {
        title: `${project.title} | Selected Work — Larry Hussey`,
        description: project.description,
      }
    : {};
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const currentIndex = projects.findIndex((item) => item.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const independent = sideProjects.includes(project);

  return (
    <>
      <Header />
      <main className="studio-site studio-case-study">
        <section className="studio-case-hero">
          <div className="studio-wrap">
            <Link className="studio-case-back" href="/#work">
              <ArrowLeft size={16} /> All selected work
            </Link>
            <div className="studio-case-hero-grid">
              <div>
                <p className="studio-eyebrow">
                  {independent ? 'INDEPENDENT PRODUCT' : 'CAREER WORK'} /{' '}
                  {project.eyebrow}
                </p>
                <h1>{project.title}</h1>
                <p className="studio-case-lede">{project.description}</p>
              </div>
              <div className="studio-case-role">
                <span>MY ROLE</span>
                <strong>{project.role}</strong>
                <div>
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="studio-case-image">
              <Image
                src={project.image}
                alt={
                  independent
                    ? `${project.title} interface`
                    : `Illustrative concept for ${project.title}`
                }
                fill
                priority
                sizes="100vw"
              />
              {!independent && <span>ILLUSTRATIVE PRODUCT CONCEPT</span>}
            </div>
          </div>
        </section>
        <section className="studio-case-story">
          <div className="studio-wrap studio-case-story-grid">
            <div>
              <p className="studio-eyebrow">THE STORY</p>
              <h2>
                The thinking behind <em>the build.</em>
              </h2>
            </div>
            <div className="studio-case-story-list">
              <article>
                <span>01 / THE CHALLENGE</span>
                <h3>What needed to change</h3>
                <p>{project.challenge}</p>
              </article>
              <article>
                <span>02 / THE DECISION</span>
                <h3>How I approached it</h3>
                <p>{project.decision}</p>
              </article>
              <article>
                <span>03 / THE OUTCOME</span>
                <h3>What it made possible</h3>
                <p>{project.outcome}</p>
              </article>
            </div>
          </div>
        </section>
        {project.signals.length > 0 && (
          <section className="studio-case-signals">
            <div className="studio-wrap studio-case-signals-grid">
              {project.signals.map((signal) => (
                <div key={signal.label}>
                  <strong>{signal.value}</strong>
                  <span>{signal.label}</span>
                </div>
              ))}
            </div>
          </section>
        )}
        {project.architecture.length > 0 && (
          <section className="studio-case-system">
            <div className="studio-wrap">
              <div className="studio-section-head">
                <div>
                  <p className="studio-eyebrow">SYSTEM VIEW</p>
                  <h2>
                    The moving <em>parts.</em>
                  </h2>
                </div>
                <p>
                  A simple view of the components and decisions that shaped the
                  product.
                </p>
              </div>
              <div className="studio-case-system-grid">
                {project.architecture.map((step, index) => (
                  <article key={step.label}>
                    <span>0{index + 1}</span>
                    <h3>{step.label}</h3>
                    <p>{step.detail}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}
        <section className="studio-case-next">
          <div className="studio-wrap">
            <div>
              <p className="studio-eyebrow">KEEP EXPLORING</p>
              <Link href={'/work/' + nextProject.slug}>
                <span>Next: {nextProject.title}</span>
                <ArrowRight size={28} />
              </Link>
            </div>
            <div>
              <p>Have a similar problem to solve?</p>
              <a href="mailto:me@caneslarry.com?subject=I%20saw%20your%20work">
                Let&apos;s talk <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <StudioFooter />
    </>
  );
}
